import React from "react";
import Navbar from "../Navbar/Navbar";

type LayoutProps = { children: React.ReactNode };

// here children represents the entire application in this case
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
