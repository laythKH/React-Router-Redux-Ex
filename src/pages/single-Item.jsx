import image from '../poster-image.jpg'


import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { addItem } from '../features/userWatchList'

function SingleItem({ title }) {

   const dispatch = useDispatch()
   let { movieId } = useParams();
   const content = useSelector((state) => state.info.value);
   // boolean that tell us if the user login or not
   // and it will show paragraph tell the usre to login
   const isLogged = useSelector((state) => state.users.value.isLogged);
   const watchList = useSelector((state) => state.watchList.value);
   // here i use a variable that value depends on path we are in
   const contentHolder = title === 'movies' ? content.movies : content.series
   const selectedMovie = contentHolder.find((s) => `${s.id}` === movieId);
   const { name, description, rate } = selectedMovie;


   const addItemtoWatchList = () => {
      // if the user dont login it will not excute 
      if (!isLogged) {
         return
      }
      // check if the movie is in the watch-list
      const findMovie = watchList.find((s) => `${s.id}` === movieId)
      // find methods will return undefined if it not find the content
      // so if we dont find the element of the list empty that's mean the element not in the watchlist
      if (findMovie === undefined || watchList === []) {
         dispatch(addItem({ ...selectedMovie, title: title }))
      }
      else {
         console.log('it is already here')
         return
      }
   }

   return (
      <div className="section-single-movie">
         <div className="container">
            <div className='content-single-movie'>
               <h2 className='title-single-movie'>{name}</h2>
               <p className='rate-single-movie'>Rate: <span>{rate}</span></p>
               <p className='description-single-movie'>{description}</p>
               <div className='btn-holder'>
                  <button className={isLogged ? "activated" : ""}>Watch Now</button>
                  <button
                     className={isLogged ? "activated" : ""}
                     onClick={() => addItemtoWatchList()}
                  > ADD to watch later</button>
                  {isLogged ? null : <p className='login-first'>please login first or signup</p>}
               </div>
            </div>
            <div className='image-holder'>
               <img src={image} alt={image} />
            </div>
         </div>
      </div>
   )
}

export default SingleItem