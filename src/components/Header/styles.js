import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";
const StyledHeader = styled.header`
  width: 100vw;
  height: 72px;
  background: #151515;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    font: 700 45px/50px "Passion One", cursive;
    letter-spacing: 0.05em;
    color: #fff;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  @media (min-width: 720px) {
    padding: 0 2%;

    h1 {
      font-size: 49px;
      line-height: 54px;
    }

    img {
      width: 53px;
      height: 53px;
    }
  }
`;

const Arrow = styled(IoChevronDown)`
  color: #fff;
  font-size: 30px;
  margin-left: auto;

  transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? "180deg" : "0deg")});
  transition: all 300ms;

  @media (min-width: 720px) {
    font-size: 32px;
  }
`;

const StyledMenu = styled.div`
  width: 130px;
  height: 43px;

  background: #171717;
  border-bottom-left-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "72px" : "29px")};
  right: 0;

  transition: all 300ms;

  /* TODO: mudar isso pro link de logout */
  p {
    font: 700 15px/18px "Lato", sans-serif;
    letter-spacing: 0.05em;
    color: #fff;
  }

  @media (min-width: 720px) {
    width: 133px;
    height: 47px;
    top: ${({ isMenuOpen }) => (isMenuOpen ? "72px" : "25px")};
    p {
      font-size: 17px;
      line-height: 20px;
    }
  }
`;

export { StyledHeader, Arrow, StyledMenu };
