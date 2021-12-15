import * as React from "react";
import loginLogo from "../../../public/images/loginLogo.png";

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
  const [isLogin, setIsLogin] = React.useState(true);

  const switchAuthModeHandler = () => {
    //Switch between login and register
    setIsLogin((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <WrapperLogin>
        <LoginTitle> {isLogin ? "Login" : "Sign Up"}</LoginTitle>
        <LoginDesc>
          {isLogin
            ? "Please login using account detail below."
            : "Please sign up using account detail below."}
        </LoginDesc>
        <InputLogin
          isLogin={isLogin}
          switchAuthModeHandler={switchAuthModeHandler}
        />
      </WrapperLogin>
      <ImgLogo src={loginLogo} alt="LoginLogo" />
    </Wrapper>
  );
};

export default LoginComp;
