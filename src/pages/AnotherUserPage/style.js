import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 8.25rem;
    margin-left: 15.0625rem;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 3rem;
`;

export const UserImg = styled.img`
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
`;

export const UserTitle = styled.h1`
    color: #FFFFFF;
    font-size: 2.6875rem;
    font-weight: bold;
    margin-left: 1.125rem;
    font-family: 'Oswald', sans-serif;
    cursor: default;
`;

export const PostContainer = styled.div`
    width: 38.1875rem;
    height: 17.25rem;
    background-color: #171717;
    border-radius: 0.75rem;
    display: flex;
`;

export const PostLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5.125rem;
    margin-top: 1rem;
`;

export const Likes = styled(IoHeartOutline)`
    font-size: 1.8rem;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 1.1875rem;
    cursor: pointer;
`;

export const LikesCount = styled.p`
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-size: 0.6875rem;
    margin-top: 0.25rem;
    cursor: default;
`;

export const PostRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.1875rem;
`;

export const PostUsername = styled.p`
    font-size: 1.1875rem;
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    margin-bottom: 0.4375rem;
`;

export const PostContent = styled.p`
    font-size: 1.0625rem;
    margin-bottom: 0.5rem;
    color: #B7B7B7;
`;

export const PostLink = styled(Link)``;