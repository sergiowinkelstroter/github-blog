import { Outlet } from "react-router-dom";
import Cover from "../assets/Cover.png";
import { Header } from "../components/Header";

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
