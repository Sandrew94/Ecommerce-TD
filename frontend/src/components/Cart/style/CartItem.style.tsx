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

export const ProductSection = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 40%;
`;

export const PriceTextStyle = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #15245e;
`;

///

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  background-color: #f0eff2;
  border: none;
  cursor: pointer;
  padding: 0rem 0.5rem;
`;

export const TextQuantityStyle = styled.span`
  padding: 0.3rem 0.7rem;
  background-color: #e7e7ef;
`;
