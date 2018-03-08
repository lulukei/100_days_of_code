console.log('the bot is starting!');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var tweet = {
   status: 'Completed the #100daysofcode challenge today with Kevin Hosey and the support of the great @mimihearing team 😀 ♥️ '
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log("Something went wrong!")
  } else {
    console.log("It worked!")
  }
}
