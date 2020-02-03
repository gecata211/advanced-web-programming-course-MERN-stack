const dayCheck = require('./index');
if (dayCheck.isItFriday(new Date())) {
  console.log("Today is friday!");
} else {
  console.log("Today is not friday.");
}

dayCheck.currentTimeAround();
dayCheck.currentTimeDK();
dayCheck.daysUntilChristmasEve();