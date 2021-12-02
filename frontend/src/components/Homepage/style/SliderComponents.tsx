import styled from "styled-components";

export const WrapperBackgroud = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50vh;
  background: linear-gradient(
    90deg,
    rgba(235, 197, 255, 1) 65%,
    rgba(242, 240, 255, 1) 100%
  );
`;

//Wrapper for all style components

//Img left
export const WrapperLeftImg = styled.div`
  width: 20%;
`;
export const ImgLeft = styled.img`
  width: 100%;
  pointer-events: none;
`;

//Text

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const RedText = styled.span`
  color: #fb2e86;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  pointer-events: none;
`;

export const TitleText = styled.span`
  text-align: left;
  font-size: 5.3rem;
  line-height: 8.2rem;
  letter-spacing: 0.015em;
  color: #000;
  pointer-events: none;
`;

export const DescriptionText = styled.span`
  font-family: Lato;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  text-align: left;
  color: #8a8fb9;
  pointer-events: none;
`;

//Img right
export const WrapperRightImg = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;
export const ImgRight = styled.img`
  width: 100%;
  pointer-events: none;
`;

//Square bottom

export const SquareImgBool = styled.img`
  padding-left: 1rem;
`;
