import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addPopularMovies, addTvShows } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useTvShows = () => {
  // fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    // fetchinig the data and puting inside movieSlice store
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    getTvShows();
  }, []);
};

export default useTvShows;
