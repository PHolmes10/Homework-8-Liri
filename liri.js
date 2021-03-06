require("dotenv").config();

var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var userChoice = process.argv[2];
var userOption = process.argv[3];

switch (userChoice) {
    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + userOption + "/events?app_id=" + process.env.BANDSINTOWN_ID).then(
            function (response) {
                console.log(response.data[0].venue.name);
                console.log(`${response.data[0].venue.city}, ${response.data[0].venue.country}`);
                console.log(moment(response.data[0].datetime).format('L'));
            }
        );
        break;
    case "spotify-this-song":
        if (userOption === undefined) {
            spotify
                .search({ type: 'track', query: "The Sign Ace of Base", limit: 1 })
                .then(function (response) {
                    console.log(response.tracks.items[0].artists[0].name);
                    console.log(response.tracks.items[0].name);
                    console.log(response.tracks.items[0].preview_url);
                    console.log(response.tracks.items[0].album.name);
                })
                .catch(function (err) {
                    console.log(err);
                });
        } else {
            spotify
                .search({ type: 'track', query: userOption, limit: 1 })
                .then(function (response) {
                    console.log(response.tracks.items[0].artists[0].name);
                    console.log(response.tracks.items[0].name);
                    console.log(response.tracks.items[0].preview_url);
                    console.log(response.tracks.items[0].album.name);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };
        break;
    case "movie-this":
        if (userOption === undefined) {
            axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=" + process.env.OMDB_ID).then(
                function (response) {
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.Ratings[1].Value);
                    console.log(response.data.Country);
                    console.log(response.data.Language);
                    console.log(response.data.Plot);
                    console.log(response.data.Actors);
                }
            );
        } else {
            axios.get("http://www.omdbapi.com/?t=" + userOption + "&y=&plot=short&apikey=" + process.env.OMDB_ID).then(
                function (response) {
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.Ratings[1].Value);
                    console.log(response.data.Country);
                    console.log(response.data.Language);
                    console.log(response.data.Plot);
                    console.log(response.data.Actors);
                }
            );
        };
        break;
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            };
            var dataArr = data.split(",");
            userChoice = dataArr[0];
            userOption = dataArr[1];

            console.log(userChoice);
            console.log(userOption);

            switch (userChoice) {
                case "concert-this":
                    axios.get("https://rest.bandsintown.com/artists/" + userOption + "/events?app_id=" + process.env.BANDSINTOWN_ID).then(
                        function (response) {
                            console.log(response.data[0].venue.name);
                            console.log(`${response.data[0].venue.city}, ${response.data[0].venue.country}`);
                            console.log(moment(response.data[0].datetime).format('L'));
                        }
                    );
                    break;
                case "spotify-this-song":
                    if (userOption === undefined) {
                        spotify
                            .search({ type: 'track', query: "The Sign", limit: 1 })
                            .then(function (response) {
                                console.log(response.tracks.items[0].artists[0].name);
                                console.log(response.tracks.items[0].name);
                                console.log(response.tracks.items[0].preview_url);
                                console.log(response.tracks.items[0].album.name);
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    } else {
                        spotify
                            .search({ type: 'track', query: userOption, limit: 1 })
                            .then(function (response) {
                                console.log(response.tracks.items[0].artists[0].name);
                                console.log(response.tracks.items[0].name);
                                console.log(response.tracks.items[0].preview_url);
                                console.log(response.tracks.items[0].album.name);
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    };
                    break;
                case "movie-this":
                    if (userOption === undefined) {
                        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=" + process.env.OMDB_ID).then(
                            function (response) {
                                console.log(response.data.Title);
                                console.log(response.data.Year);
                                console.log(response.data.imdbRating);
                                console.log(response.data.Ratings[1].Value);
                                console.log(response.data.Country);
                                console.log(response.data.Language);
                                console.log(response.data.Plot);
                                console.log(response.data.Actors);
                            }
                        );
                    } else {
                        axios.get("http://www.omdbapi.com/?t=" + userOption + "&y=&plot=short&apikey=" + process.env.OMDB_ID).then(
                            function (response) {
                                console.log(response.data.Title);
                                console.log(response.data.Year);
                                console.log(response.data.imdbRating);
                                console.log(response.data.Ratings[1].Value);
                                console.log(response.data.Country);
                                console.log(response.data.Language);
                                console.log(response.data.Plot);
                                console.log(response.data.Actors);
                            }
                        );
                    };
                    break;
                default:
                    console.log("please enter valid input");
                    break;
            };
        });
        break;
    default:
        console.log("please enter valid input");
        break;
};





