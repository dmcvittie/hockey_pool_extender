HockeyPool.Views.Matchup = Backbone.View.extend({
  initialize: function(options){
    this.open_bench();
  },

  open_bench: function(){
    $(".hideableGroup").show();
    $(".hideableGroup").each(function(i){
      if ($(this).text().includes("BENCH: SKATERS")){
        var skaters_node = $(this).siblings().first();
        $(this).detach().insertAfter(skaters_node);
      }
    });
    $(".playerTableShowHideGroupLink").hide();
  },

});