const isItFriday = require('./index');
if (isItFriday.isItFriday(new Date('Thu Feb 06 2020 11:00:06 GMT+0100'))) {
  console.log("Today is friday!");
} else {
  console.log("Today is not friday.");
}