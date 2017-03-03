HockeyPool.Collections.TeamSchedule = Backbone.Collection.extend({
  initialize: function(options){
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id || null;

  },

  this_weeks_matchup: function(){
    console.log("woo?");
    var matchup = null;
    var today = moment();
    _.each(this.models, function(m){
      // console.log("start:", m.get("date_start").isSameOrBefore(today, 'day'))
      // console.log("start:", m.get("date_end").isSameOrAfter(today, 'day'))
      if (today.isBetween(m.get("date_start"), m.get("date_end"))){
      // if (m.get("date_start").isSameOrBefore(today, 'day') && m.get("date_end").isSameOrAfter(today, 'day')){
        console.log("this is it!!", m);
        matchup = m;
      }
    }, this);
    return matchup;
  }
});