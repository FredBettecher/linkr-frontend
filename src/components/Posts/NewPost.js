import { useEffect, useState } from "react";
import styled from "styled-components";

export default function NewPost() {
  const [isPublishing, setIsPublishing] = useState(false);

  return (
    <StyledContainer>
      <h3>What are you going to share today?</h3>
      <StyledForm>
        <input type="url" placeholder="http://..." disabled={isPublishing} required />
        <textarea
          type="text"
          placeholder="Awesome article about #javascript"
          disabled={isPublishing}></textarea>
        <StyledButton type="submit" disabled={isPublishing}>
          {isPublishing ? "Publishing..." : "Publish"}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100vw;
  margin: 19px 0 16px;
  padding: 3% 5%;

  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  h3 {
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    color: #707070;

    text-align: center;
  }

  @media (min-width: 720px) {
    width: 611px;
  }
  @media (max-width: 720px) {
    border-radius: 0px;
  }
`;

const StyledForm = styled.form`
  input,
  textarea {
    width: 100%;
    background: #efefef;
    border-radius: 5px;
    margin-top: 8px;
    padding: 10px;

    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #333;
  }

  & ::placeholder {
    color: #949494;
  }
`;

const StyledButton = styled.button`
  width: 112px;
  height: 22px;

  display: block;
  margin: 10px 0 0 auto;

  background: #1877f2;
  border-radius: 5px;

  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #fff;
  text-align: center;
`;
