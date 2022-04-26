import Navbar from "../components/NavBar/navbar.component";

import { Outlet } from "react-router-dom";

function SharedLayout() {
   return (
      <>
         <Navbar />
         <Outlet />
      </>
   )
}


export default SharedLayout;