const prompt = require('prompt');
const fetch = require('node-fetch');
prompt.start();


prompt.get('name', function (err, result) {
  fetch('https://api.genderize.io?name=' + result.name)
    .then(res => res.json()
      .then(body => console.log(body)));
});