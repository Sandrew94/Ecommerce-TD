import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputStyle = styled.input`
  border: 1px solid #c2c5e1;
  border-radius: 2px;
  padding: 1rem 20rem 1rem 2rem;
`;

export const InputError = styled.p`
  color: #e95d3eb2;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export const LabelStyle = styled.label`
  padding-top: 1rem;

  &:nth-child(2) {
    margin-bottom: 20px;
  }
`;

export const ForgotPasswordStyle = styled.div`
  width: 100%;
  color: #9096b2;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonStyle = styled.button`
  background: #fb2e86;
  border-radius: 3px;
  padding: 1rem 16.5rem;
  color: #fff;
  border: none;
  margin: 2rem 0;
  cursor: pointer;
`;

export const CreateAccountTextStyle = styled.span`
  padding-top: 1rem;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  color: #9096b2;
  cursor: pointer;

  :hover {
    color: #fb2e86;
  }
`;
