import React, { useState } from "react";
import {
  Form,
  HeaderContainer,
  Icon,
  ImageLogo,
  Input,
  Li,
  MovieCategoryList,
  MovieImage,
  MovieImageDiv,
  MovieNameList,
  MoviesText,
  NavButton,
  Navigation,
  PlayButtonList,
  Span,
  SubmitButton,
  Ul,
} from "./styles";
import logo from "../../assets/logo.svg";
import movies from "../../json/movies.json";
import playButton from "../../assets/icon-play-button.png";

export default function Header({ changeMovie, activeMovie }) {
  const [open, setOpen] = useState(false);

  const imageUrlSmall = "https://image.tmdb.org/t/p/w500/";

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangeMovie = (movieId) => {
    changeMovie(movieId);
    handleOpen();
  };

  return (
    <HeaderContainer>
      <ImageLogo src={logo} alt="logo" />

      <NavButton
        onClick={handleOpen}
        type="button"
        className={open ? "active" : ""}
      >
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </NavButton>

      <Navigation className={open ? "active" : ""}>
        <MoviesText>Movies</MoviesText>

        <Form>
          <Input type="text" placeholder="Add movie" />
          <SubmitButton type="submit">+</SubmitButton>
        </Form>

        <Ul>
          {movies.map((movies) => (
            <Li
              key={movies.id}
              className={activeMovie === movies.id ? "movie_active" : ""}
            >
              <MovieCategoryList className="movie_title">
                {movies?.genres[0]?.name}
              </MovieCategoryList>
              <MovieNameList> {movies?.title} </MovieNameList>

              <PlayButtonList>
                <Icon
                  src={playButton}
                  alt="Play movie"
                  onClick={() => handleChangeMovie(movies?.id)}
                />
              </PlayButtonList>

              <MovieImageDiv>
                <MovieImage
                  src={imageUrlSmall + movies?.backdrop_path}
                  alt="Movie image"
                  loading="lazy"
                />
              </MovieImageDiv>
            </Li>
          ))}
        </Ul>
      </Navigation>
    </HeaderContainer>
  );
}
