import Header from "../../components/Header/Header";
import { StyledSection, Trending } from "./styles";
import NewPost from "../../components/Posts/NewPost";
import Posts from "../../components/Posts/Posts";

export default function Timeline() {
    return (
      <>
        <Header />
        <StyledSection aria-labelledby="timeline">
          <h2 id="timeline">timeline</h2>
          <NewPost />
          <Posts />
        </StyledSection>
        <Trending></Trending>
      </>
    );
  }
