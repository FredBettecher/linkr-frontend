import styled from "styled-components"

export const New = styled.div
`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-context: center;
flex-direction: column;
> img {
    width: 147px;
    height: 50px;
    margin-bottom: 25px;
}
> input {
    width: 330px;
    height: 55px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 6px;
    margin: 7.5px;
    cursor: pointer;
    padding-left: 15px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #9F9F9F;
}
> button {
    width: 330px;
    height: 55px;
    box-sizing: border-box;
    background: #1877F2;
    border-radius: 6px;
    border: none;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 3px;
    cursor: pointer;
    justify-context: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
}
> a {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-decoration-line: underline;
    text-align: center;
    color: #fff;
    margin: 22px;
    cursor: pointer;
}
> section {
    width: 100%;
    height: 100%;
    top: 0;
    margin-bottom: 40px;
    padding: 27px;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-context: center;
    flex-direction: column;
    > h1 {
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 76px;
        line-height: 84px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    > p {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
}
`