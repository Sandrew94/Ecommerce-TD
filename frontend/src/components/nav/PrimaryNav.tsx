import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  EmailPhoneContainer,
  LoginCartLangContainer,
  PhoneWrapper,
  Wrapper,
} from "../../styles/pages-style/Nav.style";
import SpanContainer from "../smallComponents/SpanContainer";
import Mailto from "../smallComponents/Mailto";
import { isActiveClass } from "../../utils/isActiveClass";

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
        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#F1F1F1" })
          }
        >
          <SpanContainer>Login</SpanContainer>
        </NavLink>
        <NavLink
          to="/wishlist"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#F1F1F1" })
          }
        >
          <SpanContainer>Wishlist</SpanContainer>
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#F1F1F1" })
          }
        >
          <SpanContainer>Cart</SpanContainer>
        </NavLink>
      </LoginCartLangContainer>
    </Wrapper>
  );
};

export default PrimaryNav;
