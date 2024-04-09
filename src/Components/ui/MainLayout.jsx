import Navbar from "./Navbar";
import Banner from "../../pages/Banner";
import Menu from "../../pages/Menu";
import Footer from "../../pages/footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Menu />
      <Footer />
    </div>
  );
};

export default MainLayout;
