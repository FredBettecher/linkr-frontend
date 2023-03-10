import Header from "../../components/Header/Header";
import { Content, StyledSection, Trending } from "./styles";
import NewPost from "../../components/Posts/NewPost";
import Posts from "../../components/Posts/Posts";

export default function Timeline() {
  return (
    <>
      <Header />
      <Content>
        <StyledSection aria-labelledby="timeline">
          <h2 id="timeline">timeline</h2>
          <NewPost />
          <Posts />
        </StyledSection>
        <Trending>
          <h2 id="trending"> trending</h2>
          <p># javascript</p>
          <p># react</p>
          <p># react-native</p>
          <p># material</p>
          <p># web-dev</p>
          <p># mobile</p>
          <p># css</p>
          <p># html</p>
          <p># node</p>
          <p># sql</p>
        </Trending>
      </Content>

    </>
  );
}
