import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

{/* Determines the way that webpages are layed out through route router*/}
function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Nav />
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;