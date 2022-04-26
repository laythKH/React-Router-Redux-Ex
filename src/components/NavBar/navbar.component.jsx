import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo.component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from '../../features/users'
import './navbar.style.css'

function Navbar() {
   const isLogged = useSelector((state) => state.users.value.isLogged)
   const dispatch = useDispatch()

   return (
      <div className="navbar">
         <Logo />
         <nav className="static-nav">
            <NavLink to='/' className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>
            <NavLink to='Movies' className={({ isActive }) => isActive ? "link active" : "link"}>Movies</NavLink>
            <NavLink to='tvshows' className={({ isActive }) => isActive ? "link active" : "link"}>TvShows</NavLink>
         </nav>
         {isLogged && <NavLink to='dashboard' className={({ isActive }) => isActive ? 'link account active' : 'link account'}><span>MyContent</span></NavLink>}
         {!isLogged ? <NavLink to='login' className={({ isActive }) => isActive ? "link account active" : "link account"}>Login</NavLink> :
            <NavLink to='/' className={({ isActive }) => isActive ? "link account active" : "link account"} onClick={() => dispatch(logout())}>logout</NavLink>}

      </div>
   )
}


export default Navbar;