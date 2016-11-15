HockeyPool.Views.StatComparison = Backbone.View.extend({
  initialize: function(options){
    options = options || {};
    console.log("Stat Comparison!");
    this.parse_page();
    this.my_team_id = options.my_team_id || teamId;
    this.render();
  },

  parse_page: function(){
    var collection = new HockeyPool.Collections.WeeklyStats();
    _.each($("tr.linescoreTeamRow"), function(row){
      weekly_stats = new HockeyPool.Models.WeeklyStats({
        row_node: row
      })
      collection.add(weekly_stats);
    }, this);
    console.log("collection", collection)
    this.collection = collection;
  },

  set_team_id: function(new_team_id){
    this.my_team_id = new_team_id;
    this.render();
  },

  render: function(){
    this.$el.empty();
    this.$el.html('<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tableBody stat_table"> \
<tbody><tr bgcolor="#25cfd5" class="tableHead" style="text-align:center"><th style="text-align:left">TEAM</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th colspan="10">SKATERS</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th colspan="4">GOALIES</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th style="text-align:right">TOTAL</th><th></th></tr><tr bgcolor="#a8ecee" class="tableSubHead" style="text-align:right"><th style="text-align:left">NAME</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th title="Goals">G</th><th title="Assists">A</th><th title="Plus/minus">+/-</th><th title="Penalty Minutes">PIM</th><th title="Faceoffs Won">FOW</th><th title="Average Time on Ice">ATOI</th><th title="Shots on goal">SOG</th><th title="Hits">HIT</th><th title="Blocked Shots">BLK</th><th title="Special Teams Points">STP</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th title="Wins">W</th><th title="Shutouts">SO</th><th title="Goals Against Average">GAA</th><th title="Save Percentage">SV%</th><td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
<th>SCORE</th><th></th></tr></table>');
    var my_team = this.collection.findWhere({"team_id": this.my_team_id});
    my_team.compare_to(my_team);

    this.$el.find("table.stat_table tbody").append(new HockeyPool.Views.StatRow({model: my_team}).render().$el);
    this.$el.find("table.stat_table tbody").append("<tr><td style='height:1px;'></td></tr>");
    _.each(this.collection.models, function(model){
      if (model != my_team){
        model.compare_to(my_team);
        this.$el.find("table.stat_table tbody").append(new HockeyPool.Views.StatRow({model: model}).render().$el);
      }
    }, this);
    this.$el.prepend(this.render_select());
  },

  render_select: function(){
    var $el = $("<select></select>");
    var teams = this.collection.team_list();

    _.each(teams, function(team){
      $el.append("<option value='" + team["team_id"] + "' " + (team["team_id"] == this.my_team_id ? " selected " : "") + ">" + team["team_name"] + "</option>")
    }, this);

    $el.off("change").change(_.bind(function(ev){
      var $target = $(ev.currentTarget);
      this.set_team_id(parseInt($target.val()));
    }, this));

    return $el;
  }

});