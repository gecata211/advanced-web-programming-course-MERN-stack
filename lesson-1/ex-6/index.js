const moment = require('moment');
require('moment-timezone');

function isItFriday(date) {
    return moment(date).format('dddd') === 'Friday' ? true : false;
}

function currentTimeDK() {
    console.log(`Today is ${moment().format('D MMM YYYY')} and the time is: ${moment().format('HH:mm:ss')}`)
}

function daysUntilChristmasEve() {
    let now = moment();
    let xmasEve = moment('2020-12-24');
    console.log(`Days until Christmas: ${Math.floor(xmasEve.diff(now) / 1000 / 60 / 60 / 24)}`)
}

function currentTimeAround() {
    console.log(`
New York: ${moment.tz(moment(), 'America/New_York').format('HH:mm:ss')}
Tokyo: ${moment.tz(moment(), 'Asia/Tokyo').format('HH:mm:ss')}
London: ${moment.tz(moment(), 'Europe/London').format('HH:mm:ss')}
        `)
}

module.exports = {
    isItFriday: isItFriday,
    currentTimeAround: currentTimeAround,
    currentTimeDK: currentTimeDK,
    daysUntilChristmasEve: daysUntilChristmasEve
};