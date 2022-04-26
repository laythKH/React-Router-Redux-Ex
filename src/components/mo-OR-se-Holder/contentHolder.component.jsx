import SectionTitle from "../sectionTitle/sectionTitle.component"
import SingleCard from "../SingleCard/singleCard.component"


import './contentHolder.style.css'

function ContentHolder({ info, title }) {

   return (
      <div className="content-holder-margin">
         {title ? <SectionTitle title={title} /> : null}
         <div className="container">
            <div className="content-holder">
               {
                  info.map((oneMovie) => <SingleCard key={oneMovie.id} oneMovie={oneMovie} />)
               }
            </div>
         </div>
      </div>
   )
}

export default ContentHolder;