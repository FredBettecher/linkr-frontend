import styled from "styled-components";

  
export const StyledSection = styled.section`
margin: 91px 0px;

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

/*
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7.8125rem;
    margin-left: 15rem;
`;

export const Title = styled.h1`
    font-size: 2.6875rem;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
`;

export const InnerContainer = styled.div`
    
`;*/

export const Trending = styled.div`
    display: flex;
    flex-direction: column;
`;