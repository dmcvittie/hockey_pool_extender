HockeyPool.Views.TeamView = Backbone.View.extend({
  initialize: function(options){
    this.instance = {};
    options = options || {};
    this.instance.my_team = options.my_team || null;
    this.add_menu();
  },

  add_menu: function(){
    $("#playerTableHeader ul li").click(_.bind(function(ev){
      window.setTimeout(_.bind(function(){
        this.add_menu();
      }, this), 500);
    }, this));
    $("#playerTableHeader ul").append("<li class='load_conflicts'><a href='#'>Conflicts</a></li>");
    $("#playerTableHeader ul li.load_conflicts").click(_.bind(function(ev){
      $("#playerTableHeader ul li#current").removeAttr("id");
      $("#playerTableHeader ul li.load_conflicts").attr("id", "current");
      $(".playertableFrameBorder").remove();
      this.load_conflicts();
    }, this));

  },

  load_conflicts: function(){
    $("<div id='conflict_container'></div>").insertAfter($("#playertableFrameOuterShell"));
    this.conflicts = new HockeyPool.Views.ConflictView({el: $("#conflict_container"), team_id: this.instance.my_team})
  },

  

});