HockeyPool.Models.WeeklyStats = Backbone.Model.extend({
  field_stat_map: {
    "13": {
      key: "goals",
      parse_fn: parseInt,
      comparison: ">"
    },
    "14": {
      key: "assists",
      parse_fn: parseInt,
      comparison: ">"
    },
    "15": {
      key: "plus_minus",
      parse_fn: parseInt,
      comparison: ">"
    },
    "17": {
      key: "penalty_minutes",
      parse_fn: parseInt,
      comparison: ">"
    },
    "23": {
      key: "faceoff_wins",
      parse_fn: parseInt,
      comparison: ">"
    },
    "27": {
      key: "atoi",
      parse_fn: function(val){
        var time_parts = val.match(/(\d*)\:(\d*)/);
        if (time_parts){
          var total_seconds = (parseInt(time_parts[1])*60) + parseInt(time_parts[2]);
          return total_seconds;
        }
        return 0;
      },
      comparison: ">"
    },
    "29": {
      key: "shots_on_goal",
      parse_fn: parseInt,
      comparison: ">"
    },
    "31": {
      key: "hits",
      parse_fn: parseInt,
      comparison: ">"
    },
    "32": {
      key: "blocks",
      parse_fn: parseInt,
      comparison: ">"
    },
    "37": {
      key: "special_team_points",
      parse_fn: parseInt,
      comparison: ">"
    },
    "1": {
      key: "wins",
      parse_fn: parseInt,
      comparison: ">"
    },
    "7": {
      key: "shutouts",
      parse_fn: parseInt,
      comparison: ">"
    },
    "10": {
      key: "gaa",
      parse_fn: parseFloat,
      comparison: "<+save_percentage"
    },
    "11": {
      key: "save_percentage",
      parse_fn: parseFloat,
      comparison: ">"
    }
  },

  defaults: {
    team_name:"",
    team_id:0,
    goals: 0,
    goals_winning: 0,
    assists: 0,
    assists_winning: 0,
    plus_minus: 0,
    plus_minus_winning: 0,
    penalty_minutes: 0,
    penalty_minutes_winning: 0,
    faceoff_wins: 0,
    faceoff_wins_winning: 0,
    atoi: 0,
    atoi_winning: 0,
    shots_on_goal: 0,
    shots_on_goal_winning: 0,
    hits: 0,
    hits_winning: 0,
    blocks: 0,
    blocks_winning: 0,
    special_team_points: 0, 
    special_team_points_winning: 0, 
    wins: 0,
    wins_winning: 0,
    shutouts: 0,
    shutouts_winning: 0,
    gaa: 0, 
    gaa_winning: 0, 
    save_percentage: 0,
    save_percentage_winning: 0,
    matchup_winning: false,
    matchup_totals:{
      losing: 0,
      winning: 0,
      tied: 0
    }
  },

  initialize: function(options){
    this.parse_stats(options["row_node"]);
  },

  compare_to: function(other_team){
    // console.log("comparing to: ", other_team);
    var matchup_totals = {
      winning: 0,
      losing: 0,
      tied: 0
    }
    _.each(this.field_stat_map, function(field, field_id){
      var winning = false;
      if (this.get(field["key"]) == other_team.get(field["key"])){
        matchup_totals["tied"]++;
      }
      else if (field["comparison"] == ">"){
        winning = this.get(field["key"]) > other_team.get(field["key"]);
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      else if (field["comparison"] == "<"){
        winning = this.get(field["key"]) < other_team.get(field["key"]);
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      else if (field["comparison"] == "<+save_percentage"){ // special case for GAA = 0 --if you didn't play any goalies, that doesn't count as a winning category
        if ((this.get(field["key"]) == 0 && this.get("save_percentage") == 0) && other_team.get("save_percentage") > 0){
          winning = false;
        }
        else if ((other_team.get(field["key"]) == 0 && other_team.get("save_percentage") == 0) && this.get("save_percentage") > 0){
          winning = true;
        }
        else{
          winning = this.get(field["key"]) < other_team.get(field["key"]);
        }
        winning ? matchup_totals["winning"]++ : matchup_totals["losing"]++;
      }
      this.set(field["key"] + "_winning", winning);
    }, this);
    this.set("matchup_totals", matchup_totals);
    this.set("matchup_winning", matchup_totals["winning"] > matchup_totals["losing"]);
  },

  parse_stats: function(row_node){
    var team_id = null;
    _.each($(row_node).find("td"), function(cell){
      var $cell = $(cell);
      if ($cell.hasClass("teamName")){
        this.set("team_name", $cell.text());
      }
      else if ($cell.hasClass("sectionLeadingSpacer")){
        return; // ignore
      }
      else{
        //ls_tmTotalStat_16_10
        var field_info = $cell.attr("id").match(/.*_(\d*)_(\d*)/)
        if (field_info && field_info[2]){
          if (!team_id){
            team_id = parseInt(field_info[1]);
            this.set("team_id", team_id);
          }
          var field_lookup = field_info[2];
          var field_key = this.field_stat_map[field_lookup]["key"];

          this.set(field_key, this.field_stat_map[field_lookup]["parse_fn"]($cell.text()))
        }
      }
    }, this);
  }
});