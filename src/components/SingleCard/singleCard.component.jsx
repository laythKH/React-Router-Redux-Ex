import './singleCard.style.css'
import image from '../../poster-image.jpg'
import { Link, useLocation } from 'react-router-dom'
function SingleCard({ oneMovie, pathAdd }) {

   // here i make the description text smaller that all the movies description in the card
   // take the same amount off words
   const description = oneMovie.description.split(" ")
   const smallText = description.filter((word) => description.indexOf(word) < 20).join(" ")
   // urlGuide decide if the path is tvshows or movies
   let urlGuide = pathAdd ? `${pathAdd}/` : ""
   // we used location to see if the we are in deshboard 
   // if we are in dashboard we need to change the Link 
   // so i create bool variable that decide if we are in dashboard
   let location = useLocation()
   let inLocation = location.pathname.split('').slice(1, 10).join("")
   let bool = inLocation === "dashboard"


   return (
      <div className='card'>
         <img src={image} className='card-image' alt='image1' />
         <div className='contentBox'>
            <h5>{oneMovie.name}</h5>
            <p>{smallText}</p>
            {
               bool ?
                  <Link to={`/${oneMovie.title}/${oneMovie.id}`}> Navigate </Link>
                  :
                  <Link to={`${urlGuide}${oneMovie.id}`} className="link-single-movie">More Info</Link>
            }
         </div>
      </div>
   )
}

export default SingleCard
