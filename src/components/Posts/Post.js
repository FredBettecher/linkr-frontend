import {
    PostStyle, PostLeftBar, PostUserImg, LikeIcon, LikesNumber,
    PostRightBar, UserName, PostPhrase, HashTagName,
    Content, ContentDescBox, ContentTitle, ContentSubTitle,
    ContentLink, ContentImg
} from "./PostStyle.js";

import { userMock } from "../../mock/mock.js";

export default function Post() {
    return (
        <PostStyle>
            <PostLeftBar>
                <PostUserImg src={userMock.pictureUrl} />
                <LikeIcon src={userMock.pictureUrl} />
                <LikesNumber>13 likes</LikesNumber>
            </PostLeftBar>
            <PostRightBar>
                <UserName>{userMock.username}</UserName>
                <PostPhrase>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</PostPhrase>
                <Content>
                    <ContentDescBox>
                        <ContentTitle>Como aplicar o Material UI em um projeto React</ContentTitle>
                        <ContentSubTitle>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</ContentSubTitle>
                        <ContentLink>https://medium.com/@pshrmn/a-simple-react-router</ContentLink>
                    </ContentDescBox>
                    <ContentImg src={userMock.pictureUrl} />
                </Content>
            </PostRightBar>
        </PostStyle>
    )
}