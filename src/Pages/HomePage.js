import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footerr/Footer";
import Pages from "./Pages";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
}

export default HomePage;
