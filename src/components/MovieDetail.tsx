import { useSelector } from "react-redux";
import { MOVIE } from "reducers/detailReducer";
import { RootState } from "store";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getImageUrl } from "api";
import React from "react";
import { useNavigate } from "react-router-dom";
import yellowStar from "img/yellowstar.png";

type Props = {
  id: string;
};

export default function MovieDetail({ id }: Props) {
  const stars: JSX.Element[] = [];
  const getVoteStar = (vote: number) => {
    vote = Math.floor(vote);

    for (let i = 0; i < vote; i++) {
      stars.push(<img src={yellowStar} key={i} />);
    }

    return stars;
  };

  const navigate = useNavigate();

  const { detail, images, isLoading } = useSelector<RootState, MOVIE>(
    (state) => state.detailMovie
  );

  document.body.style.overflow = "hidden";

  const exitHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  return (
    <ShadowCard className="shadow" onClick={exitHandler}>
      {!isLoading && (
        <ContentCard>
          <HeaderSection>
            <Info>
              <h3>{detail.title}</h3>
              <p>{detail.release_date}</p>

              <Stars>
                {detail.vote_average ? getVoteStar(detail.vote_average) : ""}
              </Stars>
            </Info>

            <div>
              <p>
                {detail.genres?.map(
                  (genre, i) =>
                    `${genre.name}${
                      i !== detail.genres?.length! - 1 ? "," : ""
                    }  `
                )}
              </p>
              <CompanyLogos>
                {detail.production_companies?.map((company) => {
                  if (company.logo_path) {
                    return (
                      <div key={company.logo_path} className="logo">
                        <img src={getImageUrl(company.logo_path, 300)} />
                      </div>
                    );
                  }
                })}
              </CompanyLogos>
            </div>
          </HeaderSection>

          <OverView>
            <motion.img
              // layoutId={`img ${detail.poster_path}`}
              src={getImageUrl(detail.poster_path!)}
              alt={detail.poster_path}
            />
            <p>{detail.overview}</p>
          </OverView>

          <h3>Image gallery</h3>

          <Gallery>
            {images.backdrops?.map((backdrop) => {
              return (
                <div key={backdrop.file_path}>
                  <img
                    src={getImageUrl(backdrop.file_path, 780)}
                    alt={backdrop.file_path}
                  />
                </div>
              );
            })}
          </Gallery>
        </ContentCard>
      )}
    </ShadowCard>
  );
}

const ShadowCard = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #eef2ff;
  }

  &::-webkit-scrollbar-thumb {
    background: #676fa3;
  }
`;

const ContentCard = styled(motion.div)`
  width: 70%;
  position: absolute;
  background: white;
  padding: 3rem 10rem;
  left: 15%;
  border-radius: 1rem;

  img {
    width: 100%;
  }
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const OverView = styled(motion.div)`
  img {
    height: 100%;
    width: 100%;
  }

  p {
    margin: 2rem 0;
  }
`;

const Gallery = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const CompanyLogos = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30rem;

  .logo {
    height: 4.5rem;
    width: 4.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Stars = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 1.2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
