import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addNowPlayingMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayigMovies = () => {
  // fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    // fetchinig the data and puting inside movieSlice store
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayigMovies;
