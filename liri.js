var needed = require("dotenv").config();
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var keys = require('./keys.js');
var moment = require('moment');
moment().format();


var text;
var command = process.argv[2];

switch (command){
  case "my-tweets":
    twitter();
    break;

    case "spotify-this-song":
    spotify();
    break;

    case "movie-title":
    movie();
    break;

    case "do-what-it-says":
    textfile();
    break;
}

function twitter(){
var client = new Twitter(keys.twitter);
var count = 20;
client.get('statuses/user_timeline', { screen_name: 'WWE', count: count },function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {

      console.log('Tweet number: ' + ( i + 1 ) + '\n' + "Creation date & time: " +  tweets[i].created_at + '\n' + "Text: " + tweets[i].text + '\n');

      fs.appendFile('log.txt',  "\r\n" +
      "Data creation: " + moment().format('MMMM Do YYYY, h:mm:ss a') + 
      "\r\n-----------------------\r\n" +
      'Tweet number: ' + ( i + 1 ) + '\n' +
      "Creation date & time: " +  tweets[i].created_at + '\n' + 
      "Text: " + tweets[i].text +'\n', function(err) {

      });
 
    }
  
   }
   else{
      console.log("Sorry, there was an error.");
    }
    
  });
}
  

function spotify(x){
var spotify = new Spotify(keys.spotify);

if (x){
now = x;}
else{
var now = process.argv[3];
}

    spotify.search({ type: 'track', query: now }, function(err, data) {
        if (!err) {
         
          
            var spotifyData = data.tracks.items[0];
            console.log("\n-----------------------")
            console.log("Artist: " + spotifyData.artists[0].name);
            console.log("Song: " + spotifyData.name)
            console.log("Album: " + spotifyData.album.name);
            console.log("Preview URL: " + spotifyData.preview_url  + " *")
            console.log("\n-----------------------")
            console.log("\n*Note - some songs do not provide a preview URL")
        }
        else {
          console.log("Sorry, there was an error.");
        }
        fs.appendFile('log.txt',  "\r\n" +
        "Data creation: " + moment().format('MMMM Do YYYY, h:mm:ss a') + 
        "\r\n-----------------------\r\n" +
          "Artist: " + spotifyData.artists[0].name + '\n' +
          "Song: " + spotifyData.name + '\n' +
          "Album: " + spotifyData.album.name + '\n' +
          "Preview URL: " + spotifyData.preview_url  + " *" + '\n' +
          "*Note - some songs do not provide a preview URL" +  '\n', function(err) {

            console.log("Content added to log.txt");
  
          });
          

});

}

function movie(){
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
        )
        }
        else{
          console.log("Sorry, there was an error.");
        }
        fs.appendFile('log.txt', "\r\n" +
        "Data creation: " + moment().format('MMMM Do YYYY, h:mm:ss a') + 
        "\r\n-----------------------\r\n" +
        "Title: " + JSON.parse(body).Title + '\n' +
        "Release Year: " + JSON.parse(body).Year + '\n' +
        "IMDb Rating: " + JSON.parse(body).imdbRating + '\n'+
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + '\n'+
        "Production Studio & Country: " + JSON.parse(body).Production + ", " + JSON.parse(body).Country+ '\n'+
        "Language: " + JSON.parse(body).Language + '\n' +
        "Plot Summary: " + JSON.parse(body).Plot + '\n' +
        "Cast: " + JSON.parse(body).Actors + '\n' , function(err) {

          console.log("Content added to log.txt");

        });

      });
}

function textfile(){
 
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (!error) {
      var textData = data.split(",");
    
switch(textData[0]){
    case "spotify-this-song":
    spotify(textData[1]);
    break;
}
    }
    else{
      console.log("Sorry, there was an error.");
    }
  
  });
}
