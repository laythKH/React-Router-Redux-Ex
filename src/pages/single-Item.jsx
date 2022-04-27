import image from '../poster-image.jpg'


import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { addItem } from '../features/userWatchList'

function SingleItem({ title }) {
   // console.log(title)
   let { movieId } = useParams();
   const content = useSelector((state) => state.info.value);
   // console.log(content)
   const isLogged = useSelector((state) => state.users.value.isLogged);
   const watchList = useSelector((state) => state.watchList.value);
   const contentHolder = title === 'movies' ? content.movies : content.series
   // const movies = content.movies;
   const selectedMovie = contentHolder.find((s) => `${s.id}` === movieId);
   const { name, description, rate } = selectedMovie;
   const dispatch = useDispatch()


   // console.log(contentHolder)
   // console.log(isLogged)
   // console.log(selectedMovie)

   const addItemtoWatchList = () => {
      if (!isLogged) {
         return
      }
      // check if the movie is in the watch list
      const findMovie = watchList.find((s) => `${s.id}` === movieId)
      if (findMovie === undefined || watchList === []) {
         dispatch(addItem({ ...selectedMovie }))
         console.log('---------------------')
         console.log('------ ADDED TO Watch List ---------')
         console.log('---------------------')
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
               <div>
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