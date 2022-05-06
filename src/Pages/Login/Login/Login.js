import React, { useRef } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef     = useRef('');
  const passwordRef  = useRef('');
  const navigate     = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    const email    = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
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
                
              </section>
            </div>
         </div>
    );
};

export default Login;