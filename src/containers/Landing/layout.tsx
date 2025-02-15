import { Outlet } from "react-router-dom";
//import { ELLandingNavbar } from "../../components";
import { Header } from "./components/Header";

const LandingLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LandingLayout;
