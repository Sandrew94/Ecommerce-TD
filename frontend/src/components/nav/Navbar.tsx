import * as React from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
    </>
  );
};

export default Navbar;
