import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const RegisteArea = () => {
   const { registerUser, googleSignIn } = useAuth();

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
      // console.log(data)
      const name = data.name;
      const email = data.email;
      const password = data.password;
      if (password.length <= 6) {
         return Swal.fire({
            icon: 'error',
            // title: 'Oops...',
            text: 'Kata sandi minimal harus 6 karakter',
         })
      }
      registerUser(email, password, name, reset)
   };
   return (
      <>
         <section className="login-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Registrasi Disini</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="name" className='mb-2' >Username <span>**</span></label>
                           <input {...register("name")} required id="name" type="text" placeholder="Masukkan Username" />

                           <label htmlFor="email-id" className='mb-2'>Alamat Email <span>**</span></label>
                           <input {...register("email")} required id="email-id" name="email" type="text"
                              placeholder="Masukkan Email" />

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input {...register("password")} required id="pass" name="password" type="password"
                              placeholder="Masukkan Password" />

                           <div className="mt-10"></div>
                           <button type='submit' className="primary_btn theme-btn-2 w-100">Registrasi Sekarang</button>
                           <div className="or-divide"><span>atau</span></div>
                           <Link to="/login"><button className="primary_btn btn-icon-green w-100">Login Sekarang</button></Link>
                        </form>
                        <div className="or-divide or-login"><span>or login with </span></div>
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

export default RegisteArea;