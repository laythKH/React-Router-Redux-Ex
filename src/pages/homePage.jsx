import Footer from "../components/footer/footer.component";

import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "../components/landing-page/landingPage.component";
import ContentHolder from "../components/mo-OR-se-Holder/contentHolder.component";

function Home() {
   const user = useSelector((state) => state.info.value)

   const { movies, series } = user

   const movie = movies.filter((singleMovie) => singleMovie.id < 5)
   const serie = series.filter((singleSeries) => singleSeries.id < 5)

   // console.log(serie)

   return (
      <>
         <LandingPage />
         <ContentHolder info={movie} title={'Movies'} />
         <ContentHolder info={serie} title={'series'} />
         <Footer />
      </>
   )
}


export default Home;