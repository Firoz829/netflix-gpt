import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addUpcomingMovies } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // fetch data from TMDB API and update the store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    // fetchinig the data and puting inside movieSlice store
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
