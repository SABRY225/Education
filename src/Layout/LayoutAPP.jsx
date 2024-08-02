import { Outlet } from "react-router-dom";
import { Offline } from "react-detect-offline";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";

export default function LayoutAPP() {
  const notifyOffline = () => {
    toast.error("You are currently offline", {
      position: "top-right",
    });
  };

  return (
    <>
      <Navbar />
      <Offline>{notifyOffline()}</Offline>
      <Outlet />
      <Footer />

    </>
  );
}
