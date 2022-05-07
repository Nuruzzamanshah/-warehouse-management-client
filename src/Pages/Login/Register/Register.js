import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';

const Register = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/login')
    }
    
    if(user){
      
  }

    const handleRegister = async (event) =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const name     = event.target.name.value;
        const email    = event.target.email.value;
        const password = event.target.password.value;


       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name});
       console.log('Updated profile');
       navigate('/');
    }
    return (
        <div>
            <div className="container">
              <section id="content">
                <form action="" onSubmit={handleRegister}>
                  <h1>Register Form</h1>
                  <div>
                    <input  type="text" placeholder="username" required="" id="name" />
                  </div>
                  <div>
                    <input  type="text" placeholder="Email" required="" id="email" />
                  </div>
                  <div>
                    <input type="password" placeholder="Password" required="" id="password" />
                  </div>
                  <div>
                    <input type="submit" value="Register" />
                    <a href="#">Lost your password?</a>
                    <a href="#" onClick={handleLogin}>Login</a>
                  </div>
                </form>
                <SocialLogin></SocialLogin>
                
              </section>
            </div>
        </div>
    );
};

export default Register;