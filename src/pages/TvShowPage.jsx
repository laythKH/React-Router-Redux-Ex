import ContentHolder from "../components/mo-OR-se-Holder/contentHolder.component";
import Footer from "../components/footer/footer.component";

import { useSelector } from "react-redux";


function TvShow() {

   const tvShows = useSelector((state) => state.info.value.series)

   return (
      <>
         <ContentHolder info={tvShows} />
         <Footer />
      </>
   )
}


export default TvShow;