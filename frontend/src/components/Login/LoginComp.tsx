import * as React from "react";
import loginLogo from "../../assets/images/loginLogo.png";

import {
  ImgLogo,
  LoginDesc,
  LoginTitle,
  Wrapper,
  WrapperLogin,
} from "./LoginComp.style";
import InputLogin from "./InputLogin/InputLogin";

interface ILoginProps {}

const LoginComp: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <Wrapper>
      <WrapperLogin>
        <LoginTitle>Login</LoginTitle>
        <LoginDesc>Please login using account detail below.</LoginDesc>
        <InputLogin />
      </WrapperLogin>
      <ImgLogo src={loginLogo} alt="LoginLogo" />
    </Wrapper>
  );
};

export default LoginComp;
