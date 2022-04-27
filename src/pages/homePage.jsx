import Footer from "../components/footer/footer.component";

import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "../components/landing-page/landingPage.component";
import ContentHolder from "../components/mo-OR-se-Holder/contentHolder.component";

function Home() {
   const webData = useSelector((state) => state.info.value);
   const { movies, series } = webData;

   // here i reduce the number of element that i want to show
   const movie = movies.filter((singleMovie) => singleMovie.id < 5);
   const serie = series.filter((singleSeries) => singleSeries.id < 105);

   return (
      <>
         <LandingPage />
         <ContentHolder info={movie} title={'Movies'} pathAdd={'movies'} />
         <ContentHolder info={serie} title={'series'} pathAdd={'tvshows'} />
         <Footer />
      </>
   )
}


export default Home;