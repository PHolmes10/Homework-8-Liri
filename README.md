# Homework-8-Liri

In this app, the user will be interacting with 3 different APIs, 1 for Spotify to search songs, 1 for Bands In Town to search concerts, and 1 for OMDB(open movie database) to search movies. 

The user can search for each by writing the following command into the terminal:

        node liri.js

followed by one of these three commands:

Spotify: spotify-this-song
Bands In Town: concert-this
OMDB: movie-this

followed by the name of the song, artist, or movie you are looking for.

Here is an example of each.

* Spotify:

By entering the command, node liri.js spotify-this-song song-name, this app will show you the following information:

   * Artist(s)
   * The song's name
   * A preview link of the song from Spotify
   * The album that the song is from

![](spotify-this-song.gif)

If you perform the command with no song-name (node liri.js spotify-this-song) the app will print the above information for the song, "The Sign" by Ace of Base.

![](spotify-this-song-no-input.gif)

* Bands In Town: 

By entering the command, node liri.js concert-this artist-name, this app will show you the following information:

   * Name of the venue
   * Venue location
   * Date of the Event (in "MM/DD/YYYY" format)

![](concert-this.gif)

* OMDB:

By entering the command, node liri.js movie-this movie-name, this app will show you the following information:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

![](movie-this.gif)

If you perform the command with no movie-name (node liri.js movie-this) the app will print the above information for the movie, "Mr. Nobody".

![](movie-this-no-input.gif)

In addition, by using the following command:

      node liri.js do-what-it-says

you can search the song, movie, or concert for whichever command is written in the random.txt file. 

![](do-what-it-says.gif) 
