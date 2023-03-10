import styled from "styled-components";

export const Content = styled.div`
display: flex;
justify-content: center;
`

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

export const Trending = styled.div`
margin: 230px 20px;
display: flex;
flex-direction: column;
width: 301px;
height: 406px;
background: #171717;
border-radius: 16px;
padding: 20px;
  h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin: 0px 0px 20px 0px;
  }
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }

  @media (max-width: 720px) {
  display: none;
}
`;