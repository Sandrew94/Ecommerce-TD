import * as React from "react";
import {
  WrapperPages,
  WrapperSecondaryNav,
} from "../../styles/pages-style/Nav.style";
import SpanContainer from "../smallComponents/SpanContainer";
import HektoLogo from "../../assets/images/HektoLogo.png";
import NavLinkComponents from "./NavLinkComponents";

interface ISecondaryNavProps {}

const SecondaryNav: React.FunctionComponent<ISecondaryNavProps> = (props) => {
  return (
    <WrapperSecondaryNav>
      <img src={HektoLogo} alt="Logo-Hekto" />
      <WrapperPages>
        <NavLinkComponents to="/" color="0D0E43">
          <SpanContainer>Home</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/pages" color="0D0E43">
          <SpanContainer>Pages</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/products" color="0D0E43">
          <SpanContainer>Products</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/Blog" color="0D0E43">
          <SpanContainer>Blog</SpanContainer>
        </NavLinkComponents>
        <NavLinkComponents to="/shop" color="0D0E43">
          <SpanContainer>Shop</SpanContainer>
        </NavLinkComponents>
      </WrapperPages>
      <span>Serch Bar</span>
    </WrapperSecondaryNav>
  );
};

export default SecondaryNav;
