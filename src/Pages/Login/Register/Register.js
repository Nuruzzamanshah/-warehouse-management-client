import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const Register = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/login')
    }
    
    if(user){
      navigate('/');
  }

    const handleRegister = event =>{
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const name     = event.target.name.value;
        const email    = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            {/* <h2>Please Register</h2> */}
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
                
              </section>
            </div>
        </div>
    );
};

export default Register;