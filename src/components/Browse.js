import useNowPlayigMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecontaryContainer from "./SecontaryContainer";

const Browse = () => {
  //custome hooks
  useNowPlayigMovies();
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
//       */}
