HockeyPool.Data.month_to_year = {
  Oct: 2016,
  Nov: 2016,
  Dec: 2016,
  Jan: 2017,
  Feb: 2017,
  Mar: 2017,
  Apr: 2017,
};

HockeyPool.Data.season_start = moment("2016-10-12");
HockeyPool.Data.today_date_id = moment().diff(HockeyPool.Data.season_start, "days")+1;


HockeyPool.Data.get_schedule_for_day = function(day_id){
  var d = HockeyPool.Data.day_id_to_date(day_id);
  return HockeyPool.Data.teams_playing_by_day[d] || [];
};

HockeyPool.Data.day_id_to_date = function(day_id){
  return (moment(HockeyPool.Data.season_start).add(day_id-1, "days")).format("YYYY-MM-DD");
};

HockeyPool.Data.date_to_day_id = function(date){
  return moment(date).diff(HockeyPool.Data.season_start, "days")+1;
};

HockeyPool.Data.schedule = [
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-10-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-10-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-23",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-10-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-10-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-10-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-13",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-20",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-25",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-11-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-11-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-11-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-11-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-02",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-04",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-08",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-21",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2016-12-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2016-12-29",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2016-12-30",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2016-12-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-01",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-02",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-05",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-07",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-08",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-15",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-16",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-17",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-01-18",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-01-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-21",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-22",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-24",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-01-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-01-31",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-01",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-02",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-05",
    "10:00 PM": "12:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-12",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-15",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-16",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-02-19",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-02-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-02-26",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-02-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-02-28",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-01",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-03",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-05",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-06",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-07",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-09",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-10",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "4:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-11",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-12",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-13",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-14",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-15",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-16",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-17",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-18",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-19",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-20",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-21",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-22",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-03-23",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-24",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-25",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-26",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-27",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-03-28",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-03-29",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-03-30",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-03-31",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "1:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "2:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-01",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "9:30 PM",
    "Calgary Flames": "Anaheim Ducks",
    "Edmonton Oilers": "Calgary Flames"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Boston Bruins",
    "Edmonton Oilers": "Chicago Blackhawks"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Dallas Stars",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New York Rangers"
  },
  {
    "2016-10-12": "2017-04-02",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "San Jose Sharks",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Toronto Maple Leafs",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-03",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Arizona Coyotes",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Minnesota Wild"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Pittsburgh Penguins"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Detroit Red Wings",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Philadelphia Flyers",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Nashville Predators"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-04",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-05",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Buffalo Sabres"
  },
  {
    "2016-10-12": "2017-04-05",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Winnipeg Jets",
    "Edmonton Oilers": "Columbus Blue Jackets"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Colorado Avalanche"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-06",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-07",
    "10:00 PM": "7:30 PM",
    "Calgary Flames": "Tampa Bay Lightning",
    "Edmonton Oilers": "Montreal Canadiens"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Minnesota Wild",
    "Edmonton Oilers": "Arizona Coyotes"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "3:00 PM",
    "Calgary Flames": "Washington Capitals",
    "Edmonton Oilers": "Boston Bruins"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Florida Panthers"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "St. Louis Blues",
    "Edmonton Oilers": "Carolina Hurricanes"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Calgary Flames",
    "Edmonton Oilers": "San Jose Sharks"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:30 PM",
    "Calgary Flames": "Chicago Blackhawks",
    "Edmonton Oilers": "Los Angeles Kings"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "8:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "Dallas Stars"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Montreal Canadiens",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "10:00 PM",
    "Calgary Flames": "Edmonton Oilers",
    "Edmonton Oilers": "Vancouver Canucks"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "New York Islanders",
    "Edmonton Oilers": "New Jersey Devils"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Nashville Predators",
    "Edmonton Oilers": "Winnipeg Jets"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "12:30 PM",
    "Calgary Flames": "New York Rangers",
    "Edmonton Oilers": "Ottawa Senators"
  },
  {
    "2016-10-12": "2017-04-08",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "8:30 PM",
    "Calgary Flames": "Los Angeles Kings",
    "Edmonton Oilers": "Anaheim Ducks"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Buffalo Sabres",
    "Edmonton Oilers": "Tampa Bay Lightning"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Carolina Hurricanes",
    "Edmonton Oilers": "Philadelphia Flyers"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Columbus Blue Jackets",
    "Edmonton Oilers": "Toronto Maple Leafs"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "6:00 PM",
    "Calgary Flames": "Colorado Avalanche",
    "Edmonton Oilers": "St. Louis Blues"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "New Jersey Devils",
    "Edmonton Oilers": "Detroit Red Wings"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "9:00 PM",
    "Calgary Flames": "Vancouver Canucks",
    "Edmonton Oilers": "Edmonton Oilers"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Florida Panthers",
    "Edmonton Oilers": "Washington Capitals"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "5:00 PM",
    "Calgary Flames": "Ottawa Senators",
    "Edmonton Oilers": "New York Islanders"
  },
  {
    "2016-10-12": "2017-04-09",
    "10:00 PM": "7:00 PM",
    "Calgary Flames": "Pittsburgh Penguins",
    "Edmonton Oilers": "New York Rangers"
  }
]