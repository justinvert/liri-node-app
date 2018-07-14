var needed = require("dotenv").config();
var Twitter = require('twitter');
var keys = require('./keys.js');

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

if (command = "my-tweets"){
 

client.get('statuses/user_timeline', { screen_name: '', count: 20 },function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});}

else if(command = "spotify-this-song"){

}