import Footer from "@/Components/partials/Footer";
import Navbar from "@/Components/partials/Navbar";
import React from "react";

const FrontLayout = ({ app, children, cartItems }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar cartItems={cartItems} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default FrontLayout;
