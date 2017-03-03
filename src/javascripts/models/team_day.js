HockeyPool.Models.TeamDay = Backbone.Model.extend({
  initialize: function(options){
    console.log("Team Day!");
    options = options || {};
    this.instance = {};
    this.instance.team_id = options.team_id;
    this.instance.day_id = options.day_id;
    this.instance.players = new HockeyPool.Collections.Players(null, {team_id: this.instance.team_id, day_id: this.instance.day_id});
    if (options.html_content){
      this.parse_day(options.html_content);
    }

  },

  



  parse_day: function(html_content){
    var $content = $("<div></div>").html(html_content);

    //GP  G A +/- PIM FOW ATOI  SOG HIT BLK STP
    var stat_columns_skater = ["games_played", "goals", "assists", "plus_minus", "penalty_minutes", "fow", "atoi", "shots", "hits", "blocks", "stp"];

    //GS  W GA  SV  SO  MIN GAA SV%
    var stat_columns_goalie = ["games_played", "wins", "goals_allowed", "saves", "shutouts", "minutes", "gaa", "save_percentage"];
    var _this = this;
    $content.find(".pncPlayerRow").each(function(){
      var player = new HockeyPool.Models.Player({});
      var $row = $(this);
      var player_name_string = $row.find(".playertablePlayerName").text();
      if (player_name_string == ""){
        return;
      }
      //Mika Zibanejad*, NYR RW, C  IR
      var matches = player_name_string.match(/([a-zA-Z\s\*]*),\s([A-Za-z]*).([A-Z]*(,\s[A-Z]*)*).*(IR|O|SSPD|DTD)?/)

      player.set("name", matches[1]);
      player.set("team", matches[2]);
      player.set("team_fullname", HockeyPool.Data.get_team_from_short_name(matches[2]))
      var positions = matches[3].split(", ");
      player.set("positions", positions);
      console.log("matches[5]", matches[5])
      player.set("ir_status", $.inArray(matches[5], ["IR","O"]) > -1);

      var position_string = $row.find(".playerSlot").text();
      // console.log("position: ", position_string);
      player.set("todays_position", position_string)


      var player_stats = $row.find(".playertableStat").map(function(){ return $(this).text() });
      // console.log("playertableStat: ", player_stats);
      _.each(position_string== "G" ? stat_columns_goalie : stat_columns_skater, function(stat, index){
        player.set(stat, player_stats[index]);
      }, _this);
      // console.log("player", player);
      _this.instance.players.add(player);
    });
  },
});