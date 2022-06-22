import {
  BackgroundImage,
  Container,
  ImageDiv,
  Main,
  MovieCategory,
  MovieDescription,
  MovieTitle,
  PlayButton,
  PlayIcon,
  Rating,
  RatingBrand,
  Section,
  Votes,
} from "./AppStyles";

import Header from "./components/Header";
import imdbLogo from "./assets/logo-imdb.png";
import playIcon from "./assets/icon-play.png";
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [movieId, setMovieId] = useState("99861");

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const fetchData = async () => {
    try {
      const response = await api.get(
        `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const changeMovie = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return (
    <Container image={imageUrl + data?.backdrop_path}>
      <ImageDiv>
        <BackgroundImage
          src={imageUrl + data?.backdrop_path}
          alt="Background image"
          loading="lazy"
        />
      </ImageDiv>

      <Header changeMovie={(id) => changeMovie(id)} activeMovie={movieId} />

      <Main>
        <Section>
          <Rating>
            <RatingBrand src={imdbLogo} alt="logo-imdb" />

            <Votes> {data?.vote_average} </Votes>
          </Rating>

          <MovieCategory>
            {/* {data?.release_date?.split("-")[0]} - {data?.genres[0]?.name} -
            Movie */}
          </MovieCategory>

          <MovieTitle> {data?.title} </MovieTitle>

          <MovieDescription>{data?.overview}</MovieDescription>

          <PlayButton type="button">
            <PlayIcon src={playIcon} alt="play" />
            Watch Now
          </PlayButton>
        </Section>
      </Main>
    </Container>
  );
}

export default App;
