import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Body2.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


function Body2() {

  const history = useHistory();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (x) => {
    x.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      history.push('/MyAccount');
       console.log(userCredential);
      })
     .catch((error) => {
      alert("Wrong Credentials Entered");
  })
  }

  return (
    <div className='body2'>

        <div className='login2__info'>
                
                <h1> Sign In </h1>

                <form className='login2__form' onSubmit={signIn}>

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

                    <div className='headerBlock2__actions'>
                        <button 
                            className='headerBlock2__buttonPrimary'
                            type='submit' 
                            onClick={signIn} > Sign In </button>

                            <div className='login2__divider'>
                                <hr/> <span> OR </span> <hr/>
                            </div>
                            
                        <button
                             className='headerBlock2__buttonSecondary'
                             type='button'
                             onClick={() => {history.push('/signup');}}> Create Account </button>
                    </div>

                </form>

            </div>

    </div>
  )
}

export default Body2;