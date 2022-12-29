import './SignUp.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function SignUp() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (y) => {
    y.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      history.push('/MyAccount');
       console.log(userCredential);
      })
     .catch((error) => {
      alert("Wrong Credentials Entered");
  })
  }


  return (
    <div className='signup'>

        <div className='signup__info'>
                
                <h1> Account Creation </h1>

                <form className='signup__form' onSubmit={signUp}>

                    <label htmlFor='email'> Email Address </label>
                    <input 
                      type='email'
                      value={email}
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor='email'> Password </label>
                    <input 
                        type='password'
                        value={password}
                         id='password'
                         onChange={(p) => setPassword(p.target.value)}
                    />

                    <div className='signupblock__actions'>
                        <button 
                            className='signupblock__buttonPrimary' 
                            type='submit' 
                            > Register </button>

                            <div className='signupblock__divider'>
                                <hr/> <span> OR </span> <hr/>
                            </div>
                            
                        <button
                             className='signupblock__buttonSecondary'
                             type='button'
                             onClick={() => {history.push('/');}}> Home </button>
                    </div>

                </form>

            </div>

    </div>
  );
};

export default SignUp;
