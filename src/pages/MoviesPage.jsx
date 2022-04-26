import Footer from '../components/footer/footer.component';

import { useSelector } from 'react-redux'
import ContentHolder from "../components/mo-OR-se-Holder/contentHolder.component";

function Movies() {
   const movies = useSelector((state) => state.info.value.movies)

   return (
      <>
         <ContentHolder info={movies} />
         <Footer />
      </>
   )
}


export default Movies;