import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  height: 100vh;
  padding: 45px 130px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 1080px) {
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

export const ImageDiv = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  ::after {
    position: absolute;
    inset: 0;
    content: "";
    background: linear-gradient(
      90.18deg,
      rgba(13, 22, 46, 0.65) 23.21%,
      rgba(13, 22, 46, 0.0001) 96.69%
    );
  }

  @media (max-width: 650px) {
    ::after {
      background: linear-gradient(
        90.18deg,
        rgba(13, 22, 46, 0.65) 50%,
        rgba(13, 22, 46, 0.2) 96.69%
      );
    }
  }
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 12px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const RatingBrand = styled.img``;

export const Votes = styled.strong`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const MovieCategory = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3.25rem;
  }
`;

export const MovieDescription = styled.p`
  width: 100%;
  max-width: 800px;
  font-size: 1.125rem;
  line-height: 2rem;
  font-weight: 400;

  @media (max-width: 650px) {
    font-size: 1rem;
    line-height: 1.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 250px;
  height: 70px;
  background: var(--linear);
  padding: 0 42px 0;

  border-radius: 70px;
  box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.160784);
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;

  margin-top: 20px;

  transition: filter 0.6s;

  :hover {
    filter: brightness(0.85);
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 240px;

    img {
      width: 16px;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    height: 48px;
    width: 200px;
    font-size: 0.875rem;

    padding: 0 32px;

    img {
      width: 16px;
      height: auto;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const MoviesContainer = styled.div`
  height: 640px;
  overflow: auto;

  padding-right: 44px;

  ::-webkit-scrollbar {
    width: 0.2rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 0.375rem;
  }
`;

export const PlayIcon = styled.img``;
