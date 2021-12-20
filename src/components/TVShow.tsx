import { motion } from "framer-motion";
import styled from "styled-components";
import { imageBaseUrl } from "api";

type Props = {
  id: number;
  name: string;
  poster_path: string;
  first_air_date: string;
};

export default function TVShow({
  id,
  name,
  poster_path,
  first_air_date,
}: Props) {
  return (
    <StyledTVShow>
      <h3>{name}</h3>
      <p>{first_air_date}</p>
      <img src={`${imageBaseUrl}${poster_path}`} alt={name} />
    </StyledTVShow>
  );
}

const StyledTVShow = styled(motion.div)`
  padding-top: 1rem;
  min-height: 30vh;
  text-align: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
