require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

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

function getSongs(songName) {
    spotify.search({type:"track", query:songName}, function(err, data) {
        if (err) {
          return console.log("Error occurred: " + err);
        }
        console.log(
          "\n_Track Info_" +
          "\nArtist: " + data.tracks.items[0].artists[0].name +
          "\nSong: " + data.tracks.items[0].name +
          "\nLink: " + data.tracks.items[0].external_urls.spotify +
          "\nAlbum: " + data.tracks.items[0].album.name
        );
    });
}


function getMovies (movieName) {
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
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
        if (err) {
            return console.log("Error occurred: " + err);
          }
      data = data.split(",");
      var value = data[1]
      getSongs(value)
    });
}