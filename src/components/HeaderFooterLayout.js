import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";

export default function HeaderFooterLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
