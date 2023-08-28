import { Outlet } from "react-router-dom";
import Navbar from "../General/Navbar";
import Footer from "../General/Footer";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
