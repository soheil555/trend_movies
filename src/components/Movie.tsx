import { motion } from "framer-motion";
import styled from "styled-components";
import { imageBaseUrl } from "api";
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
    <Link to={`/movies/${id}`}>
      <StyledMovie onClick={loadMovieDetail}>
        <h3>{title}</h3>
        <p>{release_date}</p>
        <img src={`${imageBaseUrl}${poster_path}`} alt={title} />
      </StyledMovie>
    </Link>
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
