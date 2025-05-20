import { Outlet } from "react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
