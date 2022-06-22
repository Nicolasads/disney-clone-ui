import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 48px;
  column-gap: 24px;
  padding-right: 60px;
  margin-top: 28px;

  @media (max-width: 650px) {
    padding-right: 0px;
  }
`;

export const Input = styled.input`
  border: 0;
  height: 100%;
  flex: 1;
  border-radius: 6px;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;

  ::placeholder {
    color: #fff;
  }
`;

export const SubmitButton = styled.button`
  background: var(--linear);
  width: 48px;
  border: 0;
  border-radius: 6px;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ImageLogo = styled.img``;

export const NavButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  z-index: 1;

  width: 46px;

  background: transparent;

  &.active {
    span:first-child {
      transform: rotate(-45deg) translateY(18px);
    }

    span:last-child {
      width: 100%;
      transform: rotate(45deg) translateY(-17px);
    }

    span:nth-child(even) {
      opacity: 0;
    }
  }
`;

export const Span = styled.span`
  width: 100%;
  height: 3px;
  display: block;
  border-radius: 6px;
  background: ${(props) => props.theme.primary};

  transition: all 0.5s;

  :last-child {
    width: 45%;
  }
`;

export const Navigation = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  position: fixed;
  top: 0;
  right: -660px;
  width: 660px;
  height: 100%;
  background: rgba(11, 46, 91, 0.92);
  backdrop-filter: blur(5.5px);
  overflow: auto;

  padding: 66px 60px 32px 54px;

  transition: all 0.5s;

  &.active {
    transform: translateX(-660px);
  }

  @media (max-height: 750px) {
    padding: 70px 40px 40px;
    overflow: scroll;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    width: 100vw;
    right: -100vw;

    &.active {
      transform: translateX(-100vw);
    }
  }

  @media (max-width: 768px) {
    padding: 65px 16px 40px;
  }
`;

export const MoviesText = styled.h2`
  font-size: 1.75rem;
  line-height: 2.125rem;
  font-weight: 700;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 16px;
  margin-top: 48px;
  margin-right: 60px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    margin-right: 0;
  }
`;

export const PlayIcon = styled.img``;

export const Li = styled.li.attrs((props) => ({
  className: props.className,
}))`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;

  background-image: linear-gradient(
    180deg,
    rgba(14, 23, 47, 0.0001) 11.72%,
    #0e172f 100%
  );

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  /* width: 265px; */
  height: 150px;

  position: relative;
  padding-bottom: 16px;
  padding-left: 10px;

  &.movie_active {
    button {
      display: none;
      visibility: hidden;
    }

    img {
      filter: grayscale(100);
      opacity: 0.4;
      transition: all 0.5s;
    }
  }

  :hover {
    button {
      opacity: 1;

      transform: translateY(0);
    }
  }
`;

export const MovieCategoryList = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  margin-bottom: 6px;
`;

export const MovieNameList = styled.strong`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 600;
`;

export const PlayButtonList = styled.button`
  position: absolute;
  inset: 0;
  margin: auto;
  background: transparent;

  width: 40px;
  height: 40px;

  opacity: 0;
  transition: all 0.6s;
  transform: translateY(40px);
`;

export const Icon = styled.img``;

export const MovieImageDiv = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
