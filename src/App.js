// Import pages And Component
import Home from './pages/homePage';
import Dashboard from './pages/dashboard';
import Login from './pages/loginPage';
import Movies from './pages/MoviesPage';
import TvShow from './pages/TvShowPage';
import SharedMovisLayout from './pages/sharedMovieLayout';
import SharedTVshowLayout from './pages/sharedTVshowLayout';
import SharedLayout from './pages/sharedLayout';
import SingleItem from './pages/single-Item';
// import the data 



import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';



// const initialStore = {
//   movies: data.movies,
//   series: data.series,
//   name: '',
//   email: '',
//   isLoggedIn: false
// }




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<SharedMovisLayout />}>
            <Route index element={<Movies />} />
            <Route path=':movieId' element={<SingleItem />} />
          </Route>
          <Route path='tvshows' element={<SharedTVshowLayout />}>
            <Route index element={<TvShow />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
