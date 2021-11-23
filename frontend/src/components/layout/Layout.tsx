import * as React from "react";
import NavPage from "../../pages/NavPage";
import Footer from "./Footer";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <NavPage />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
