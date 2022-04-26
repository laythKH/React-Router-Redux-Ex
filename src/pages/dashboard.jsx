import Footer from "../components/footer/footer.component";
import SingleCard from '../components/SingleCard/singleCard.component'

import { useSelector } from "react-redux";


function Dashboard() {

   const watchList = useSelector((state) => state.watchList.value)
   console.log(watchList)

   const checktheList = watchList.length > 0
   console.log(checktheList)

   const displayWatchList = () => {

      if (checktheList === false) {
         return <h4 className="nothing-inbag"> you have nothing in your bag</h4>
      }
      if (checktheList) {
         let a = watchList.map((item) => <SingleCard key={item.id} oneMovie={item} />)
         return a
      }
   }



   return (
      <>
         <div className="dashboard">
            <div className="container">
               <h1 className="title">Dashboard</h1>
               <div className={checktheList ? "content-holder" : "nothing-inbag"}>
                  {displayWatchList()}
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}


export default Dashboard;