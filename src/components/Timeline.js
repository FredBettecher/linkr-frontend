import styled from "styled-components";
import Header from "./Header/Header";
import NewPost from "./Posts/NewPost";
import Posts from "./Posts/Posts";

export default function Timeline() {
  return (
    <>
      <Header />
      <StyledSection aria-labelledby="timeline">
        <h2 id="timeline">timeline</h2>
        <NewPost />
        <Posts />
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 91px 0;

  h2 {
    color: #fff;
    font: 700 33px/49px "Oswald", sans-serif;
    margin: 0 5%;
  }

  @media (min-width: 720px) {
    max-width: 611px;
    margin: 150px auto 100px;

    h2 {
      font-size: 43px;
      line-height: 64px;
      margin: 0;
    }
  }
`;
