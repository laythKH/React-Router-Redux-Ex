import { Outlet } from "react-router-dom";
import SectionTitle from "../components/sectionTitle/sectionTitle.component";

function SharedMovisLayout() {
   return (
      <>
         <SectionTitle title={'movies'} />
         <Outlet />
      </>
   )
}


export default SharedMovisLayout;