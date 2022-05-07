import React, { useRef } from 'react';
import './Login.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef     = useRef('');
  const passwordRef  = useRef('');
  const navigate     = useNavigate()
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(user){
    // navigate('/');
    navigate(from, { replace: true });
  }

  if (error) {  
    errorElement=<p className='text-danger'>Error: {error.message}</p>
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

  const lostPassword = async() =>{
    const email    = emailRef.current.value;
    await sendPasswordResetEmail(email);
          alert('Sent email');
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
                    <a href="#" onClick={lostPassword}>Lost your password?</a>
                    <a href="#" onClick={handleRegister}>Register</a>
                  </div>
                </form>
                {errorElement}
                <SocialLogin></SocialLogin>
                
              </section>
            </div>
         </div>
    );
};

export default Login;