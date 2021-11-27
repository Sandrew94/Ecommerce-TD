import * as React from "react";
import * as CSS from "csstype";
import { NavLink } from "react-router-dom";

interface INavLinkComponentsProps {
  color: CSS.Properties["color"];
  to: string;
  children: React.ReactNode;
}

type isActive = { isActive: boolean };

const NavLinkComponents: React.FunctionComponent<INavLinkComponentsProps> = ({
  color,
  children,
  to,
}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }: isActive) => ({
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "#FB2E86" : `#${color}`,
      })}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkComponents;
