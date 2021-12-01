import * as React from "react";
import { WrapperPages, WrapperSecondaryNav } from "./style/Nav.style";
import HektoLogo from "../../assets/images/HektoLogo.png";
import NavLinkComponents from "./NavLinkComponents";
import { SpanWrapper } from "./style/SpanStyle.style";

interface ISecondaryNavProps {}

const SecondaryNav: React.FunctionComponent<ISecondaryNavProps> = (props) => {
  return (
    <WrapperSecondaryNav>
      <img src={HektoLogo} alt="Logo-Hekto" />
      <WrapperPages>
        <NavLinkComponents to="/" color="0D0E43">
          <SpanWrapper>Home</SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/pages" color="0D0E43">
          <SpanWrapper>Pages</SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/products" color="0D0E43">
          <SpanWrapper>Products</SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/Blog" color="0D0E43">
          <SpanWrapper>Blog</SpanWrapper>
        </NavLinkComponents>
        <NavLinkComponents to="/shop" color="0D0E43">
          <SpanWrapper>Shop</SpanWrapper>
        </NavLinkComponents>
      </WrapperPages>
      <span>Serch Bar</span>
    </WrapperSecondaryNav>
  );
};

export default SecondaryNav;
