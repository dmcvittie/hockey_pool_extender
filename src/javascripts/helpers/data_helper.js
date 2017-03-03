HockeyPool.Helpers.DataHelper = {
  get_team_schedule: function(team_id){
    return $.get('/fhl/schedule?leagueId=4424&teamId=' + team_id).then(function(data) {
      var team_schedule = new HockeyPool.Collections.TeamSchedule(null, {team_id: team_id});
      $(data).find(".games-fullcol > table.tableBody tr").each(function(){
        if ($(this).text().includes("Matchup")){
          team_schedule.add(new HockeyPool.Models.ScheduleItem(null, {$row: $(this)}));
        }
      })
      return team_schedule;
    });
  },

  get_team_day: function(team_id, day_id){
    return $.get('http://games.espn.com/fhl/playertable/prebuilt/manageroster?leagueId=4424&teamId=' + team_id + '&seasonId=2017&scoringPeriodId=' + day_id + '&version=today&view=stats&context=clubhouse&ajaxPath=playertable/prebuilt/manageroster&managingIr=false&droppingPlayers=false&asLM=false').then(function(data) {
      var team_day = new HockeyPool.Models.TeamDay({day_id: day_id, team_id: team_id, html_content: data});
      return team_day;
    });
  }
};