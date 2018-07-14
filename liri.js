var needed = require("dotenv").config();

var Twitter = require('keys');
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


 
var params = {screen_name: ''};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});