import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
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