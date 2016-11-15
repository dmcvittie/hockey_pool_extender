HockeyPool.Collections.WeeklyStats = Backbone.Collection.extend({
  initialize: function(){
    console.log("New Weekly Stats!");
  },

  team_list: function(){
    return this.map(function(model){
      return {
        team_id: model.get("team_id"),
        team_name: model.get("team_name")
      }
    });
  }
});