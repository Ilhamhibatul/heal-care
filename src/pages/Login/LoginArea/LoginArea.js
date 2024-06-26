import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const LoginArea = () => {
   const { loginUser, passwordResetWithEmail, googleSignIn } = useAuth();
   const [email,setEmail] = useState('');

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
      // console.log(data)
      const email = data.email;
      setEmail(email)
      const password = data.password;

      loginUser(email, password,reset)
   };
   return (
      <>
         <section className="login-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Login Disini</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="name" className='mb-2'>Alamat Email<span>**</span></label>
                           <input {...register("email")} required id="name" type="text"
                           placeholder="Masukkan Email atau Username" />

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input {...register("password")} required id="pass" type="password" placeholder="Masukkan Password" />

                           <div className="login-action mb-20 fix">
                              <span className="log-rem f-left">
                                 <input id="remember" type="checkbox" />
                                 <label htmlFor="remember">Ingat Saya!</label>
                              </span>
                              <span className="forgot-login f-right">
                                 <span onClick={() => passwordResetWithEmail(email)}>Lupa Password?</span>
                              </span>

                           </div>
                           <button type="submit" className="primary_btn btn-icon-green w-100">Login Sekarang</button>
                           <div className="or-divide"><span>atau</span></div>
                           <Link to="/register"><button className="primary_btn theme-btn w-100">Registrasi Sekarang</button></Link>
                        </form>
                        <div className="or-divide or-login"><span>atau login dengan </span></div>
                        <button onClick={() => googleSignIn()} className="login_btn">
                           <img src="img/icon/google_icon.png" alt="" /> </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default LoginArea;