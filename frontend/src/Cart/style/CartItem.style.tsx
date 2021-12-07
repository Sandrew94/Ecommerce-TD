import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". . . . ";
  border-bottom: 1px solid #000;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 40%;
`;
