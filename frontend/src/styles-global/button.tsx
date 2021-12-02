import styled from "styled-components";

interface ButtonType {
  readonly isActivePadding: boolean;
}

export const ButtonStyle = styled.button<ButtonType>`
  background: #fb2e86;
  border-radius: 3px;
  padding: ${(props) => (props.isActivePadding ? "1rem 16.5rem" : "1rem 4rem")};
  color: #fff;
  border: none;
  margin: 2rem 0;
  cursor: pointer;
`;
