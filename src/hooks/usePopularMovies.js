import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addPopularMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    // fetchinig the data and puting inside movieSlice store
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
