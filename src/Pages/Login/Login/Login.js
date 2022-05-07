import React, { useRef } from 'react';
import './Login.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef     = useRef('');
  const passwordRef  = useRef('');
  const navigate     = useNavigate()
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    // navigate('/');
    navigate(from, { replace: true });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email    = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  }

  const handleRegister = event =>{
    navigate('/register')
  }
    return (
        <div>
            {/* <h2>Please login</h2> */}
            <div className="container">
              <section id="content">
                <form action="" onSubmit={handleSubmit}>
                  <h1>Login Form</h1>
                  <div>
                    <input ref={emailRef} type="text" placeholder="Email" required="" id="email" />
                  </div>
                  <div>
                    <input ref={passwordRef} type="password" placeholder="Password" required="" id="password" />
                  </div>
                  <div>
                    <input type="submit" value="Login" />
                    <a href="#">Lost your password?</a>
                    <a href="#" onClick={handleRegister}>Register</a>
                  </div>
                </form>
                <SocialLogin></SocialLogin>
                
              </section>
            </div>
         </div>
    );
};

export default Login;