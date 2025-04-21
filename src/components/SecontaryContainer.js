import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecontaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.tvShows);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-72 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Populer"} movies={movies.PopularMovies} />
          <MovieList title={"Tv Shows"} movies={movies.PopularMovies} />
        </div>
      </div>
    )
  );
};

export default SecontaryContainer;

/*
MovieList - popular
    Moviecard*n

MovieList -Now playing
MovieList - Trending 
MovieList - Horror    
*/
