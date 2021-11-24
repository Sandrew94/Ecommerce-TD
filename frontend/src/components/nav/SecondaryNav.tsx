import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  WrapperPages,
  WrapperSecondaryNav,
} from "../../styles/pages-style/Nav.style";
import SpanContainer from "../smallComponents/SpanContainer";
import HektoLogo from "../../assets/images/HektoLogo.png";
import { isActiveClass } from "../../utils/isActiveClass";

interface ISecondaryNavProps {}

const SecondaryNav: React.FunctionComponent<ISecondaryNavProps> = (props) => {
  return (
    <WrapperSecondaryNav>
      <img src={HektoLogo} alt="Logo-Hekto" />
      <WrapperPages>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#0D0E43" })
          }
        >
          <SpanContainer>Home</SpanContainer>
        </NavLink>
        <NavLink
          to="/pages"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#0D0E43" })
          }
        >
          <SpanContainer>Pages</SpanContainer>
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#0D0E43" })
          }
        >
          <SpanContainer>Products</SpanContainer>
        </NavLink>
        <NavLink
          to="/Blog"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#0D0E43" })
          }
        >
          <SpanContainer>Blog</SpanContainer>
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) =>
            isActiveClass({ isActive, color: "#0D0E43" })
          }
        >
          <SpanContainer>Shop</SpanContainer>
        </NavLink>
      </WrapperPages>
      <span>Serch Bar</span>
    </WrapperSecondaryNav>
  );
};

export default SecondaryNav;
