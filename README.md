# liri-bot-app

ABOUT THE APP:

LIRI is a Language Interpretation and Recognition Interface. It is a command line node app that takes on four commands and returns the relative data.

The four commands are:

"concert-this", "spotify-this-song", "movie-this", and "do-what-it-says"

REQUIRED TECH:

APIs:

Spotify (https://developer.spotify.com/)
OMDB (http://www.omdbapi.com)
Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)

NPM Packages:

Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
Axios (https://www.npmjs.com/package/axios)
Moment (https://www.npmjs.com/package/moment)
DotEnv (https://www.npmjs.com/package/dotenv)

APP COMMANDS:

1) "CONCERT-THIS" - PLEASE REFER TO IMAGE GALLERY

Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (using the format "MM/DD/YYYY")

2) "SPOTIFY-THIS-SONG" - PLEASE REFER TO IMAGE GALLERY

Displays the following information about the selected song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album containing the song

3) "MOVIE-THIS" - PLEASE REFER TO IMAGE GALLERY

This will output the following movie information to your terminal/bash window:

  * Title
  * Year movie was released
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie
  
4) "DO-WHAT-IT-SAYS" - PLEASE REFER TO IMAGE GALLERY

- Runs "spotify-this-song" for "I Want it That Way"
