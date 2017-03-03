if ($(".games-pageheader h1").text().includes("Scoreboard")){
  var $el = $(".bodyCopy").before("<div id='comparison_table'></div>");
  a = new HockeyPool.Views.StatComparison({el: $("#comparison_table"), my_team: teamId});
}
else if ($(".games-pageheader h1").text().includes("Box Score")){
  console.log("matchup");
  a = new HockeyPool.Views.Matchup({my_team: teamId});
  console.log("test")
  console.log("November for the Leafs: ", HockeyPool.Data.get_team_schedule("tor","2016-11-01", "2016-11-30"))
  // _.each(HockeyPool.Data.team_names, function (v, k){
  // 	console.log(k, v)
  // 	console.log(k, _.keys(HockeyPool.Data.get_team_schedule(k)).length)
  // });
}
else if ($(".games-dates-mod h3").text().includes("Lineup")){
  console.log("Individual team screen");
  a = new HockeyPool.Views.TeamView({my_team: teamId});
}
