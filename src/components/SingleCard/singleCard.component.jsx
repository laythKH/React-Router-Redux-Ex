import './singleCard.style.css'
import image from '../../poster-image.jpg'
import { Link } from 'react-router-dom'
function SingleCard({ oneMovie }) {

   return (
      <div className='card'>
         <img src={image} className='card-image' alt='image1' />
         <div className='contentBox'>
            <h5>{oneMovie.name}</h5>
            <p>{oneMovie.description}</p>
            <Link to={`${oneMovie.id}`} className="link-single-movie">More Info</Link>
         </div>
      </div>
   )
}

export default SingleCard