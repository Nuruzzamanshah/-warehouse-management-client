import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h2>Please login</h2>
            <div class="container">
  <section id="content">
    <form action="">
      <h1>Login Form</h1>
      <div>
        <input type="text" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="password" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" value="Log in" />
        <a href="#">Lost your password?</a>
        <a href="#">Register</a>
      </div>
    </form>
    
  </section>
</div>
        </div>
    );
};

export default Login;