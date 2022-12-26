import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../firebase';
import "./SignInscreen.css";
import { signInAnonymously } from 'firebase/auth';

function SignInscreen() {

    const emailRef = useRef("guest@guest.com");
    const passwordRef = useRef("guest1");


    const register = (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then( (authUser) => {
            console.log(authUser);
        })
        .catch((error) =>
        {
            alert(error.message);
        });
        
    };

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then( (authUser) => {
            console.log(authUser);
        })
        .catch((error) =>
        {
            alert(error.message);
        });
        
    };

    const signInAnon = (e) => {
        e.preventDefault();
        signInAnonymously(auth)
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

  return (
    <div className='signInScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type="email" />
            <input ref={passwordRef} placeholder='Password' type="password" />
            <div className='signInScreen__buttons'>
                <button type="submit" onClick={signIn}>Sign In</button>
                <button type="submit" onClick={signInAnon}>Login as Guest</button>
            </div>
            <h4>
                <span className='signInScreen__gray'>New to Netflix? </span>
                <span className='signInScreen__link' onClick={register}>Sign Up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInscreen
