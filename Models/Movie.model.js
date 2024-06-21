const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    Title: String,
    Year: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    imdbRating: String,
    imdbID: String,
    Poster: String,
    Watched: Boolean,
    Review: String,
    YourRating: String,
  },
  
  {
    versionKey: false,
  }
);

const MovieModel = mongoose.model("movies", movieSchema);

module.exports = {
  MovieModel,
};
