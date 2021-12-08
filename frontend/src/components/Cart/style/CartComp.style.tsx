import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". . . . ";
  width: 100%;
  border-bottom: 1px solid #000;
`;

////////////////////////////////////////////////////////////////

export const ContainerDivider = styled.div`
  width: 75%;
`;

export const ContainerCartTotals = styled.div`
  width: 25%;
`;

export const TitleSections = styled.h1`
  color: #1d3178;
  font-size: 2rem;
  line-height: 2.3rem;
`;
