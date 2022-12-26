import React, { useState } from 'react'
import './Loginscreen.css'
import SignInscreen from './SignInscreen';

function Loginscreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
            className='loginScreen__logo'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt='Loginscreen logo'
        />
        <button 
            className='loginScreen__button' 
            onClick={() => setSignIn(true)}>
            Sign In
        </button>

        <div className='loginScreen__gradient'>

        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignInscreen />
            ) : (
                <>
                <h1>
                    Unlimited films, TV programmes and more.
                </h1>
                <h2>
                    Watch anywhere. Cancel at any time.
                </h2>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>

                <div className='loginScreen__input'>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button className='loginScreen__getStarted'
                        onClick={() => setSignIn(true)}
                        >
                            GET STARTED
                        </button>
                    </form>
                </div>
                </>
            )}
            
        </div>
        
      </div>
    </div>
  )
}

export default Loginscreen
