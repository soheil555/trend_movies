import { motion } from "framer-motion";
import styled from "styled-components";
import { imageBaseUrl } from "api";

type Props = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({ id, title, poster_path, release_date }: Props) {
  return (
    <StyledMovie>
      <h3>{title}</h3>
      <p>{release_date}</p>
      <img src={`${imageBaseUrl}${poster_path}`} alt={title} />
    </StyledMovie>
  );
}

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
