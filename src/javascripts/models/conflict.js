HockeyPool.Models.Conflict = Backbone.Model.extend({

  max_players: {
    C: 2,
    RW: 2,
    LW: 2,
    D: 4,
    G: 2
  },

  initialize: function(options){
    console.log("Conflict Model!");

  },

  add_multi_position_players: function(multi_position_players){
    console.log("got it!", multi_position_players);
    _.each(multi_position_players, function(player){
      var positions = player.get("positions");
      for (j=0; j < positions.length; j++){
        if (this.get(positions[j]) < this.max_players[positions[j]]){
          // console.log("setting a ", positions[j])
          this.set(positions[j], this.get(positions[j]) + 1);
          j = 100; // break the loop
        }
      }
    }, this);
  },

  defaults: function(){
    return {
      C: 0,
      RW: 0,
      LW: 0,
      D: 0,
      G: 0,
    }
  }

});