import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement=<p className='text-danger'>Error: {error.message}</p>
      }

      if(user){
        navigate('/');
      }
    return (
        <div>
            <p>Or</p>
            {errorElement}
            <button onClick={() => signInWithGoogle()}>
                Google Sign In
            </button>
        </div>
    );
};

export default SocialLogin;