import styled from "styled-components";


export const PostStyle = styled.div`
    width: 611px;
    height: 276px;    
    background: #171717;
    border-radius: 16px;
    padding: 10px;
    display: flex;

    @media (max-width: 720px) {
    width: 100vw;
    height: 232px; 
    border-radius: 0px;
  }
`  

export const PostLeftBar = styled.div`
width: 20%;
padding: 1px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 720px) {
    width: 35%;
  }
`

export const PostUserImg = styled.img`
width: 50px;
height: 50px;
border-radius: 26px;
margin: 0px 0px 20px 0px;
@media (max-width: 720px) {
    width: 40px;
height: 40px;
margin: 0px 0px 10px 0px;}
`

export const LikeIcon = styled.img`
width: 18px;
height: 20px;
background: #FFFFFF;
margin: 0px 0px 8px 0px;
@media (max-width: 720px) {
    width: 15px;
height: 17px;
margin: 0px 0px 10px 0px;}
`

export const LikesNumber = styled.p`
font-family: 'Lato';
font-size: 11px;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
@media (max-width: 720px) {
    font-size: 9px;
line-height: 11px;}
`

export const PostRightBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 5px;
`

export const UserName = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #FFFFFF;
@media (max-width: 720px) {
    font-size: 17px;
line-height: 20px;}
`

export const PostPhrase = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #B7B7B7;
@media (max-width: 720px) {
    font-size: 15px;
line-height: 18px;}
`

export const HashTagName = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
@media (max-width: 720px) {
    font-size: 15px;
line-height: 18px;
}
`

export const Content = styled.div`
box-sizing: border-box;
width: 503px;
height: 155px;
border: 1px solid #4D4D4D;
border-radius: 11px;
display: flex;
@media (max-width: 720px) {
    width: 275px;
    height: 115px;
}
`

export const ContentDescBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px;
@media (max-width: 720px) {
    padding: 5px;
}
`

export const ContentTitle = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #CECECE;
@media (max-width: 720px) {
    font-size: 11px;
line-height: 13px;
}
`

export const ContentSubTitle = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #9B9595;
@media (max-width: 720px) {
    font-size: 9px;
line-height: 11px;
}
`

export const ContentLink = styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #CECECE;
@media (max-width: 720px) {
    font-size: 9px;
line-height: 11px;
}
`

export const ContentImg = styled.img`
width: 153px;
height: 155px;
border-radius: 0px 12px 13px 0px;
`