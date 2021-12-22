import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "actions/moviesAction";
import { motion } from "framer-motion";
import styled from "styled-components";
import { RootState } from "store";
import Movie from "components/Movie";
import { MOVIES } from "reducers/moviesReducer";
import TVShow from "components/TVShow";
import MovieDetail from "components/MovieDetail";
import { useLocation } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const { trendMovies, trendTVShows, trendPeople } = useSelector<
    RootState,
    MOVIES
  >((state) => {
    return state.movies;
  });

  return (
    <MoviesList>
      {movieId && <MovieDetail />}

      <h2>Trend Movies</h2>

      <Movies>
        {trendMovies!.map(({ title, id, release_date, poster_path }) => {
          return (
            <Movie
              poster_path={poster_path}
              title={title}
              id={id}
              key={id}
              release_date={release_date}
            />
          );
        })}
      </Movies>

      <h2>Trend TV Shows</h2>

      <Movies>
        {trendTVShows!.map(({ name, id, first_air_date, poster_path }) => {
          return (
            <TVShow
              poster_path={poster_path}
              name={name}
              id={id}
              key={id}
              first_air_date={first_air_date}
            />
          );
        })}
      </Movies>
    </MoviesList>
  );
}

const MoviesList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    margin: 2rem 0;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
