HockeyPool.Collections.Players = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;
    this.instance.day_id = options.day_id || null;

  },
});