import SectionTitle from "../sectionTitle/sectionTitle.component"
import SingleCard from "../SingleCard/singleCard.component"


import './contentHolder.style.css'

function ContentHolder({ info, title, pathAdd }) {

   return (
      <div className="content-holder-margin">
         {title ? <SectionTitle title={title} /> : null}
         <div className="container">
            <div className="content-holder">
               {
                  info.map((oneSeries) => <SingleCard key={oneSeries.id} oneMovie={oneSeries} pathAdd={pathAdd} />)
               }
            </div>
         </div>
      </div>
   )
}

export default ContentHolder;