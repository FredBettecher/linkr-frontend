import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";
const StyledHeader = styled.header`
  width: 100vw;
  height: 4.5rem;
  background: #151515;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    font: 700 45px/50px "Passion One", cursive;
    letter-spacing: 0.05em;
    color: #fff;
    cursor: default;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;

const Arrow = styled(IoChevronDown)`
  color: #fff;
  font-size: 30px;
  margin-left: auto;

  transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? "180deg" : "0deg")});
  transition: all 300ms;
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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 14rem;
  position: relative;
`;

const Input = styled.input`
  width: 35.1875rem;
  height: 2.8125rem;
  border-radius: 0.5rem;
  background-color: #FFF;
  font-size: 1.1875rem;
  padding-left: 1rem;
  z-index: 1;
  ::placeholder {
    color: #C6C6C6;
  }
`;

const SearchResult = styled.div`
  background-color: #E7E7E7;
  width: 35.1875rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  overflow: hidden;
  overflow-y: auto;
`;

export { StyledHeader, Arrow, StyledMenu, InputContainer, Input, SearchResult };
