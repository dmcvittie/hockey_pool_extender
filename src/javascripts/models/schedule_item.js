HockeyPool.Models.ScheduleItem = Backbone.Model.extend({
  initialize: function(models, options){
    this.instance = {};
    options = options || {};
    if (options.$row){
      this.parse_row(options.$row);
    }
    console.log("schuedle item", this);
  },

  parse_row: function($row){
    // dates
    var date_parts = $row.find("td").first().text().match(/\((.{3})\s(\d{1,2})\s-\s((.{3})\s)?(\d{1,2})\)/)

    var date_1_str = date_parts[1] + " " + date_parts[2] + ", " + HockeyPool.Data.month_to_year[date_parts[1]];
    var date_1 = moment(date_1_str, "MMM D, YYYY");

    var date_2_str = (date_parts[4] ? date_parts[4] : date_parts[1]) + " " + date_parts[5] + ", " + HockeyPool.Data.month_to_year[(date_parts[4] ? date_parts[4] : date_parts[1])];
    var date_2 = moment(date_2_str, "MMM D, YYYY");

    this.set({
      date_start: date_1,
      date_start_id: HockeyPool.Data.date_to_day_id(date_1),
      date_end: date_2,
      date_end_id: HockeyPool.Data.date_to_day_id(date_2),
      matchup_length: date_2.diff(date_1, 'days') + 1
    })


    // matchup result (if complete)
    var $result_anchor = $row.find("nobr a").detach();
    if ((score = $result_anchor.text()) !== "Box"){
      this.set("score", score);
    }

    // opponent
    var $opponent_anchor = $row.find("a");
    var opponent_link_parts = $opponent_anchor.attr("href").match(/teamId=(\d{1,2})/)
    this.set("opponent_name", $opponent_anchor.text());
    this.set("opponent_id", parseInt(opponent_link_parts[1]));
    // this.set("opponent_id", $opponent_anchor.text());

  },

  defaults: function(){
    return {

    };
  },

});