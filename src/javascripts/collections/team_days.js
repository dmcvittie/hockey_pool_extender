HockeyPool.Collections.TeamDays = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;

  },
});