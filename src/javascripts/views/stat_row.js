HockeyPool.Views.StatRow = Backbone.View.extend({
  tagName: "tr",

  template: _.template('<td class="teamName"><%= team_name %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="precise <%= goals_winning ? "winning" : "" %>" title=""><%= goals %></td>\
    <td id="" name="" class="precise <%= assists_winning ? "winning" : "" %>" title=""><%= assists %></td>\
    <td id="" name="" class="precise <%= plus_minus_winning ? "winning" : "" %>" title=""><%= plus_minus %></td>\
    <td id="" name="" class="precise <%= penalty_minutes_winning ? "winning" : "" %>" title=""><%= penalty_minutes %></td>\
    <td id="" name="" class="precise <%= faceoff_wins_winning ? "winning" : "" %>" title=""><%= faceoff_wins %></td>\
    <td id="" name="" class="precise <%= atoi_winning ? "winning" : "" %>" title="21:52.466667"><%= Math.floor(atoi/60) + ":" + (atoi%60 > 9 ? atoi%60 : "0" + atoi%60) %></td>\
    <td id="" name="" class="precise <%= shots_on_goal_winning ? "winning" : "" %>" title=""><%= shots_on_goal %></td>\
    <td id="" name="" class="precise <%= hits_winning ? "winning" : "" %>" title=""><%= hits %></td>\
    <td id="" name="" class="precise <%= blocks_winning ? "winning" : "" %>" title=""><%= blocks %></td>\
    <td id="" name="" class="precise <%= special_team_points_winning ? "winning" : "" %>" title=""><%= special_team_points %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="precise <%= wins_winning ? "winning" : "" %>" title=""><%= wins %></td>\
    <td id="" name="" class="precise <%= shutouts_winning ? "winning" : "" %>" title=""><%= shutouts %></td>\
    <td id="" name="" class="precise  <%= gaa_winning ? "winning" : "" %>" title=""><%= gaa %></td>\
    <td id="" name="" class="precise  <%= save_percentage_winning ? "winning" : "" %>" title=""><%= save_percentage %></td>\
    <td class="sectionLeadingSpacer"><spacer type="block" width="1" height="1"></spacer></td>\
    <td id="" name="" class="<%= matchup_winning ? "winning" : "" %> "><nobr><%= matchup_totals["winning"] + "-" + matchup_totals["losing"] + "-" + matchup_totals["tied"]%></nobr></td>\
    <%if (matchup_totals["winning"] < matchup_totals["losing"]){%>\
      <td style="color:green;">&#x2714;</td>\
    <% }else if (matchup_totals["winning"] > matchup_totals["losing"]){%>\
      <td style="color:red;">&#x2718;</td>\
    <%} else{ %>\
      <td style="color:orange;">&#x2A37;</td>\
    <%}%>'),

  initialize: function(options){
  },

  render: function(){
    this.$el.empty();
    this.$el.addClass("linescoreTeamRow");
    this.$el.attr("bgcolor", "#f4f1e8");
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})