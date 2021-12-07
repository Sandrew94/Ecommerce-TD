import styled, { keyframes } from "styled-components";

export const WrapperItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5rem 0px;
  grid-template-areas:
    ". . "
    ". ."
    ". .";
`;

export const WrapperSingleItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const ImgProduct = styled.img`
  width: 80%;
`;

export const WrapperTextProduct = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const TextName = styled.span`
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #151875;
`;

export const TextActualPrice = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #151875;
`;

export const TextPreviousPrice = styled.span`
  padding-left: 1rem;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-decoration-line: line-through;
  color: #fb2448;
`;

//// cart icon

export const CartIconPosition = styled.div`
  position: absolute;
  left: 15%;
  display: flex;
  flex-direction: column;
`;

const fadeOut = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const IconInteractive = styled.img`
  margin: 0.5rem 0;
  border-radius: 50%;
  color: #2f1ac4;
  transition: 0.5s ease-out 100ms;
  display: none;
  cursor: pointer;

  ${WrapperSingleItem}:hover & {
    display: block;
    animation: ${fadeOut} 1s ease-out;
  }

  :hover {
    transform: scale(2);
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;
