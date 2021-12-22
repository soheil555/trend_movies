import { useSelector } from "react-redux";
import { MOVIE } from "reducers/detailReducer";
import { RootState } from "store";
import styled from "styled-components";
import { motion } from "framer-motion";
import { imageBaseUrl } from "api";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDetail() {
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
            <div>
              <h3>{detail.title}</h3>
              <p>{detail.release_date}</p>
            </div>

            <div>
              <p>{detail.genres?.map((genre) => `${genre.name}, `)}</p>
              <p>
                {detail.production_companies?.map(
                  (company) => `${company.name}, `
                )}
              </p>
            </div>
          </HeaderSection>

          <p>{detail.overview}</p>
          <div>
            {images.posters?.map((poster) => {
              return (
                <img
                  src={`${imageBaseUrl}${poster.file_path}`}
                  alt={poster.file_path}
                  key={poster.file_path}
                />
              );
            })}
          </div>
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
  overflow-y: scroll;
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
  margin-bottom: 2rem;
`;
