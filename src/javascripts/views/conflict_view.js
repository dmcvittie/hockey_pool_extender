HockeyPool.Views.ConflictView = Backbone.View.extend({

  initialize: function(options){
    this.instance = {};
    options = options || {};
    this.instance.team_id = options.team_id || null;
    console.log("conflict view!");
    // set up events
    // load.
    this.load_data();
    },

    load_data: function(){
      var get_team_schedule = HockeyPool.Helpers.DataHelper.get_team_schedule(this.instance.team_id)

      $.when(get_team_schedule).done(_.bind(function(team_schedule) {
        this_weeks_matchup = team_schedule.this_weeks_matchup();
        console.log("this_weeks_matchup", this_weeks_matchup);

        // var today_day_id = moment().diff(HockeyPool.Data.season_start, "days")+1
        var today_day_id = HockeyPool.Data.today_date_id;
        $.when(HockeyPool.Helpers.DataHelper.get_team_day(this.instance.team_id, today_day_id)).done(_.bind(function(team_day){
          // console.log('got the team', team_day);
          // console.log("sched:", HockeyPool.Data.get_schedule_for_day(today_day_id))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("Tor"))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("stl"))
          // console.log("HockeyPool.Data.get_team_from_short_name", HockeyPool.Data.get_team_from_short_name("StL"))
          this.check_conflicts(team_day, this_weeks_matchup.get("date_start_id"), this_weeks_matchup.get("date_end_id"));
        }, this));
        // console.log(new HockeyPool.Models.TeamWeek({team_id: this.instance.my_team, matchup: team_schedule.this_weeks_matchup()}))
        this.render();
      }, this));
      // console.log("moving forward!");
      // // this.matchup_schedule = ;
      // console.log("sched:", this.matchup_schedule);
    },

    check_conflicts: function(team, day_id_start, day_id_end){
      console.log("checking!", team);
      for (i=0; day_id_start + i <= day_id_end; i++){
        var today_day_id = day_id_start + i;
        console.log("day:", today_day_id);
        var teams_playing = HockeyPool.Data.get_schedule_for_day(today_day_id);
        console.log("teams_playing", teams_playing)
        var conflicts = new HockeyPool.Models.Conflict({});
        var multi_position_players = [];

        _.each(team.instance.players.models, function(player){
          if (player.get("todays_position") !== "IR" && _.indexOf(teams_playing, player.get("team_fullname")) > -1){
            // console.log("playing!", player);
            // console.log("playing!", player.get("name"));
            if (player.get("positions").length === 1){
              var position = player.get("positions")[0];
              conflicts.set(position, conflicts.get(position) +1)
            }
            else{
              multi_position_players.push(player);
            }

          }
        }, this);
        // reconcile multi-position players
        conflicts.add_multi_position_players(multi_position_players);

        console.log("conflicts", conflicts)
      }


    },

    render: function(){
      this.$el.html(this.content_area({}));
    },

    ///////////  Templates  /////////////
    content_area: _.template('\
    <table width="970px" cellpadding="0" cellspacing="0" border="0" class="playertableFrameBorder">\
      <tbody>\
        <tr class="playerTableFiltersRow">\
          <td width="100%">\
            <div class="playertablefiltersmenu">\
              <div id="ptfiltersmenuleft" class="playertablefiltersmenu">\
                <div class="playertablefiltersmenucontaineron" title="Nov 19">Nov 19</div>\
              </div>\
            </div>\
          </td>\
        </tr>\
      </tbody>\
    </table>'),
});