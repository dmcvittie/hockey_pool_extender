HockeyPool.Models.TeamWeek = Backbone.Model.extend({
  initialize: function(options){
    console.log("Team Week!");
    this.instance = {};
    this.instance.team_id = options.team_id;
    this.instance.matchup = options.matchup;
    this.instance.team_days = new HockeyPool.Collections.TeamDays(null, {team_id: this.instance.team_id});
    if (this.instance.matchup){
      this.get_player_data();
    }

  },

  get_player_data: function(){
    // for (i=0; this.instance.matchup.get("date_start") + moment(i, "days") <= this.instance.matchup.get("date_end"); i++){
    //   console.log("get data for...", this.instance.matchup.get("date_start").add(i, "days"))
    // }
    var period_start = this.instance.matchup.get("date_start").diff(HockeyPool.Data.season_start, "days")+1;
    var period_end = this.instance.matchup.get("date_end").diff(HockeyPool.Data.season_start, "days")+1;

    this.get_team_day(period_start, period_end);
    console.log("and it is done now.", this.instance.team_days);
  },

  get_team_day: function(day_id, period_end){
    var team_day_promise = HockeyPool.Helpers.DataHelper.get_team_day(this.instance.team_id, day_id);
    $.when(team_day_promise).done(_.bind(function(team_day){
      // add to days collection
      this.instance.team_days.add(team_day);
      console.log("adding", team_day);
      if (day_id < period_end){
        this.get_team_day(day_id+1, period_end);
      }
    }, this));

  },




});