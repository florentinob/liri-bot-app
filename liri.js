require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var axios = require("axios");
var Spotify = require('node-spotify-api');

//var defaultMovie = "The Hangover";

var action = process.argv[2];
var value = process.argv[3];


    switch (action) {
        case "concert-this":
            getBands(value)
            break;
        case "spotify-this-song":
            getSongs(value)
            break;
        case "movie-this":
            getMovies(value)
            break;
        case "do-what-it-says":
            doWhatItSays()
            break;
            default:
            break;
    }


function getBands(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
        console.log("Name of the venue:", response.data[0].venue.name);
        console.log("Venue location:", response.data[0].venue.city);
        var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Date of the Event:", eventDate);
    })
    .catch(function (error) {
        console.log(error);
    });
}

var spotify = new Spotify(keys.spotify);

function getSongs (songName) {
    if (songName === "") {
        songName = "Payphone";
    }
    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            //var songs = data.tracks.items;

            //for (var i = 0; i < songs.length; i++) {
                //console.log(i);
            console.log("Artist(s): ", data.tracks.items[0].album.artists[0].name);
            console.log("Preview Song: ", data.tracks.items[0].preview_url);
            console.log("Album: ", data.tracks.items[0].album.name);
        }
    );
}

function getMovies (movieName) {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=c21b7b7e=" + movieName)
    .then(function (data) {
        var results = `
        Title of the movie: ${data.data.Title}
        Year the movie came out: ${data.data.Year}
        IMDB Rating of the movie: ${data.data.Rated}
        Rotten Tomatoes Rating of the movie: ${data.data.Ratings[1].Value}
        Country where the movie was produced: ${data.data.Country}
        Language of the movie: ${data.data.Language}
        Plot of the movie: ${data.data.Plot}
        Actors in the movie: ${data.data.Actors}`;
        console.log(results)
    })
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
      data = data.split(",");
      var action = data[0]
      var value = data[1]
      // getSongs(value)
      switch (action) {
        case "concert-this":
          getBands(value)
          break;
        case "spotify-this-song":
          getSongs(value)
          break;
        case "movie-this":
          getMovies(value)
          break;
          default:
          break;
      }
    });
  }