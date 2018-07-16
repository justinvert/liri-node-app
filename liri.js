var needed = require("dotenv").config();
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');



var command = process.argv[2];

function start(){
if (command === "my-tweets"){
var client = new Twitter(keys.twitter);

client.get('statuses/user_timeline', { screen_name: 'WWE', count: 20 },function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {

      console.log('Tweet number: ' + ( i + 1 ) + '\n' + "Creation date & time: " +  tweets[i].created_at + '\n' + "Text: " + tweets[i].text + '\n');}
    }

    else{
      console.log(err);
    }
    

});}

else if (command === "spotify-this-song"){
var spotify = new Spotify(keys.spotify);
    
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        
console.log(data);
});}

else if(command = "movie-this"){
   var query = process.argv[3];
  request("http://www.omdbapi.com/?t=" + query + "&y=t&tomatoes=true&apikey=bbee064", function(error, response, body) {

    if (!error && response.statusCode === 200) {

          console.log("Title: " + JSON.parse(body).Title + '\n' +
          "Release Year: " + JSON.parse(body).Year + '\n' +
          "IMDb Rating: " + JSON.parse(body).imdbRating + '\n'+
          "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + '\n'+
          "Production Studio & Country: " + JSON.parse(body).Production + ", " + JSON.parse(body).Country+ '\n'+
          "Language: " + JSON.parse(body).Language + '\n' +
          "Plot Summary: " + JSON.parse(body).Plot + '\n' +
          "Cast: " + JSON.parse(body).Actors + '\n' 
        );
        }
      });

}

// else if(command = "do-what-it-says"){

// }
}
start();