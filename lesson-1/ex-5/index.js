const moment = require('moment');

function isItFriday(date) {
    return moment(date).format('dddd') === 'Friday' ? true : false;
}

module.exports = {
    isItFriday: isItFriday
};