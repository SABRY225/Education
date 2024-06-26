import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";

export default function JustFirst() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}
