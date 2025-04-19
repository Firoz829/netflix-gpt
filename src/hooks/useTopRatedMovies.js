import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addTopRatedMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    // fetchinig the data and puting inside movieSlice store
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
