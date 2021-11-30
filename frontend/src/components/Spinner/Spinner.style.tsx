import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  width: 200px;
  height: 200px;
`;

export const LsdRingDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 120px;
  height: 120px;
  margin: 12px;
  border: 12px solid #35a0ee;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #35a0ee transparent transparent transparent;

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
