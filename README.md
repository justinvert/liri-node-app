
# LIRI Node App

LIRI - Language Interpretation and Recognition Interface

### Objective
Create a node command line app that takes in certain commands, returning the data (Tweets, a Spotify Song and Movie Information) in a readable format. Additionally, once that data is generated, it is placed into the log.txt file, with the appropriate Date and Time it was created at.

### Commands
After doing an <a href="https://docs.npmjs.com/cli/install">npm install</a>, the command line will be able to work.

The format for these commands is
```
node liri.js [command name] [additional information if needed]
```
or in other terms:
```
node liri.js [2] [3]
```
*  `my-tweets`

Displays 20 tweets from the username provided.
 
*  `spotify-this-song`

In order for this command to work, the user must provide a song name after typing in 'spotify-this-song'. They are able to do so by putting in it quotes, such as "Tearin' Up My Heart"

*  `movie-this`

 Similar to the command above, the user must provide the name of a movie when using this command. Example: "Ready Player One"

*  `do-what-it-says`

Upon running this command, the random.txt file is read, which contains the command 'spotify-this-song' for "I Want It That Way".

### Resources
* <a href="https://nodejs.org/en/">Node.js</a>

* <a href="https://momentjs.com/">Moment.js</a>

* <a href="https://developer.spotify.com/documentation/web-api/">Spotify Web API</a>

* <a href="http://www.omdbapi.com/">OMDb API</a>

* <a href="https://developer.twitter.com/en/docs.html">Twitter API</a>