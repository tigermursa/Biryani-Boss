import Navbar from "./Navbar";
import Banner from "../../pages/Banner";
import Menu from "../../pages/Menu";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Menu/>
    </div>
  );
};

export default MainLayout;
