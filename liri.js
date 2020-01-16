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

function mySwitch() {
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
    }
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

var getSongs = function (songName) {
    if (songName === undefined) {
        songName = "Payphone";
    }
    spotify.search(
        {
            type: "track",
            query: userCommand
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                //console.log(i);
                console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("Preview Song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
            }
        }
    );
};
