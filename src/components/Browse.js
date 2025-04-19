import useNowPlayigMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTvShows from "../hooks/useTvShows";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecontaryContainer from "./SecontaryContainer";

const Browse = () => {
  //custome hooks..basicaly we are calling the function then they run and store the data
  //this hook is fetching the nowplayingmovies and upddating the store
  useNowPlayigMovies();
  //this hook is fetching the popularmovies and upddating the store
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTvShows();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecontaryContainer />
    </div>
  );
};

export default Browse;

// {/* in browse page component logic
//           MainContainer
//               -VideoBackground
//               -videoTitle
//           SecondartContainer
//               -MovieList *n
//               -carts *n
//  */}
