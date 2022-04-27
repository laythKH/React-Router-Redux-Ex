import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/users";


const Login = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!name || !email) {
         return
      }
      dispatch(login({ name: name, email: email, isLogged: true }))
      navigate('/');
   }





   return (
      <section className="login-form">
         <div className="container">
            <form onSubmit={handleSubmit} className="form">
               <h5 className="form-title">Login</h5>
               <div className="field">
                  <label className="lable-name">name</label>
                  <input
                     type='name'
                     id='name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Name'
                     className="input-form"
                  />
               </div>
               <div className="field">
                  <label className="lable-name">email</label>
                  <input
                     type='email'
                     id='email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder='welwelwel@blalba.com...'
                     className="input-form"
                  />
               </div>
               <button type="submit" className="submit-login">login</button>
            </form>
         </div>
      </section>
   )
}

export default Login;