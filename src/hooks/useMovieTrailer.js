import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addTrailerVideo } from "../components/utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    //if the more the one trailer i want only first one... if no trailer then take first one in obj may be its tesear
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    // putting trailer data into redux movie store
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
