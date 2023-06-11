import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import LoaderSpinner from "../pages/Shared/LoaderSpinner/LoaderSpinner";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  
  return (
    <>
      {!isLoading ? (
        <>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer></>
      ): (
        <LoaderSpinner></LoaderSpinner>
      )}
    </>
  );
};

export default Main;
