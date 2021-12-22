import { motion } from "framer-motion";
import styled from "styled-components";
import { getImageUrl } from "api";
import { useDispatch } from "react-redux";
import { fetchDetails } from "actions/moviesAction";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({ id, title, poster_path, release_date }: Props) {
  const dispatch = useDispatch();

  const loadMovieDetail = () => {
    dispatch({ type: "LOADING_DETAIL" });
    dispatch(fetchDetails(id));
  };

  return (
    <StyledMovie onClick={loadMovieDetail}>
      <Link to={`/movies/${id}`}>
        <h3>{title}</h3>
        <p>{release_date}</p>
        <motion.img
          // layoutId={`img ${poster_path}`}
          src={getImageUrl(poster_path, 500)}
          alt={title}
        />
      </Link>
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  cursor: pointer;
  padding-top: 1rem;
  min-height: 30vh;
  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
