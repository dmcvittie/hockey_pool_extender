if ($(".games-pageheader h1").text().includes("Scoreboard")){
  var $el = $(".bodyCopy").before("<div id='comparison_table'></div>");
  a = new HockeyPool.Views.StatComparison({el: $("#comparison_table"), my_team: teamId});
}
else if ($(".games-pageheader h1").text().includes("Box Score")){
  console.log("matchup");
  a = new HockeyPool.Views.Matchup({my_team: teamId})
}
