import { Outlet } from "react-router-dom";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import Sidebar from "./common/components/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
