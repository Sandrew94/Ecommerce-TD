import * as React from "react";
import NavLinkComponents from "./NavLinkComponents";
import {
  EmailPhoneContainer,
  LoginCartLangContainer,
  PhoneWrapper,
  Wrapper,
} from "../../styles/pages-style/Nav.style";
import SpanContainer from "../smallComponents/SpanContainer";
import Mailto from "../smallComponents/Mailto";

const PrimaryNav: React.FunctionComponent = () => {
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
          <SpanContainer>Login</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/wishlist" color="F1F1F1">
          <SpanContainer>Wishlist</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/cart" color="F1F1F1">
          <SpanContainer>Cart</SpanContainer>
        </NavLinkComponents>
      </LoginCartLangContainer>
    </Wrapper>
  );
};

export default PrimaryNav;
