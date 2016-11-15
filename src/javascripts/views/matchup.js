HockeyPool.Views.Matchup = Backbone.View.extend({
  initialize: function(options){
    console.log("init!")
    this.open_bench();
  },

  open_bench: function(){
    $("#playertable_2").show().detach().insertAfter($("#playertable_0"))
    $("#playertable_5").show().detach().insertAfter($("#playertable_3"))
    $(".playerTableShowHideGroupLink").hide();
    

  },

});