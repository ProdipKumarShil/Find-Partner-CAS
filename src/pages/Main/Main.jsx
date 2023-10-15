import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  const homePage = window.location.pathname == '/'
  return (
    <div>
      {!homePage && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;