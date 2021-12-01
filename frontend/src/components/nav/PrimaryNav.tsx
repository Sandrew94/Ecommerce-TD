import * as React from "react";
import NavLinkComponents from "./NavLinkComponents";
import {
  EmailPhoneContainer,
  LoginCartLangContainer,
  PhoneWrapper,
  Wrapper,
} from "./style/Nav.style";
import Mailto from "../smallComponents/Mailto";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/loginAction";
import { SpanWrapper } from "./style/SpanStyle.style";

const PrimaryNav: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.login);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <EmailPhoneContainer>
        <Mailto
          email="santi_andrea@hotmail.it"
          subject="Test email"
          body="Test email"
        >
          santi_andrea@hotmail.it
        </Mailto>
        <PhoneWrapper>(12345)67890</PhoneWrapper>
      </EmailPhoneContainer>
      <LoginCartLangContainer>
        <span>English</span>
        <span>USD</span>
        <NavLinkComponents to="/login" color="F1F1F1">
          <SpanWrapper onClick={handleLogout}>
            {!isLoggedIn ? "Login" : "Logout"}
          </SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/wishlist" color="F1F1F1">
          <SpanWrapper>Wishlist</SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/cart" color="F1F1F1">
          <SpanWrapper>Cart</SpanWrapper>
        </NavLinkComponents>
      </LoginCartLangContainer>
    </Wrapper>
  );
};

export default PrimaryNav;
