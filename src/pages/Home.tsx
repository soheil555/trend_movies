import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "actions/moviesAction";
import { motion } from "framer-motion";
import styled from "styled-components";
import { RootState } from "store";
import Movie from "components/Movie";
import { MOVIES } from "reducers/moviesReducer";

export default function Home() {
  const dispatch = useDispatch();

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
      <h1>Trend Movies</h1>

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
    </MoviesList>
  );
}

const MoviesList = styled(motion.div)`
  padding: 0rem 5rem;
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
