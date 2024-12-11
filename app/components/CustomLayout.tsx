import React, { ReactNode } from "react";
import Footer from "./Footer";
import CustomNavBar from "./CustomNavBar";

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <>
      <CustomNavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CustomLayout;
