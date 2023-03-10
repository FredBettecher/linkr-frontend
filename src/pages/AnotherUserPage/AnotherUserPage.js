import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Container, PostContainer, PostLeftContainer, UserImg, UserInfo, UserTitle, Likes, LikesCount, PostRightContainer, PostUsername, PostContent, PostLink } from "./style";

export default function AnotherUserPage() {
    const id = 5;
    const [user, setUser] = useState([]);

    useEffect(() => {
        const promise = axios.get(`http://localhost:5015/user/${id}`);
        promise.then(resp => setUser(resp.data));
        promise.catch(err => console.log(err.message));
    }, []);

    const renderPosts = () => {
        if (!user || user.length === 0) {
            return null;
        }

        return Object.values(user.posts).map(post => (
                <>
                <PostLeftContainer>
                    <UserImg src={user.pictureUrl} alt="user picture"/>
                    <Likes />
                    <LikesCount>13 Likes</LikesCount>
                </PostLeftContainer>
                <PostRightContainer>
                    <PostUsername>{user.username}</PostUsername>
                    <PostContent>{post.content}</PostContent>
                    <PostLink to={post.link}>{post.link}</PostLink>
                </PostRightContainer>
                </>
            ))
    };

    return(
        <>
        <Header />
        <Container>
            <UserInfo>
                <UserImg src={user.pictureUrl} alt="user picture"/>
                <UserTitle>{`${user.username}'s posts`}</UserTitle>
            </UserInfo>
            <PostContainer>{renderPosts()}</PostContainer>
        </Container>
        </>
    );
}