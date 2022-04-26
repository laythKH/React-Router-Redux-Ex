import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/users"
// import { useSelector } from "react-redux";
const Login = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const navigate = useNavigate()
   // const data = useSelector((state) => state.info.value);
   const dispatch = useDispatch()

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!name || !email) {
         return
      }
      dispatch(login({ name: name, email: email, isLogged: true }))
      navigate('/dashboard');
   }





   return (
      <section className="login-form">
         <div className="container">
            <form onSubmit={handleSubmit}>
               <h5 className="form-title">Login</h5>
               <div>
                  <label className="lable-name">name</label>
                  <input
                     type='name'
                     id='name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Input Your Name'
                     className="input-name"
                  />
               </div>
               <div>
                  <label className="lable-email">email</label>
                  <input
                     type='email'
                     id='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder='xyz@blalba.com...'
                     className="input-email"
                  />
               </div>
               <button type="submit" className="submit-login">login</button>
            </form>
         </div>
      </section>
   )
}

export default Login;