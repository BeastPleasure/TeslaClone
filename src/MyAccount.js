import React, { useEffect, useState } from 'react';
import './MyAccount.css';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';


function Home() {

  const history = useHistory();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
    });
    return () => {
          listen();
        }
  })

  const logOut = () => {
    signOut(auth).then(() => {
      history.push('/');
      console.log('logged out Successfully');
    }).catch((error) => {
      alert('Could not log out!');
    });
  }
  
  return (
    <div>

        <h1> Home </h1>

        <p> What's Up Everyone! </p>
        
        <h2> Currently logged in as: { authUser?.email } </h2>

        <button 
          onClick={logOut}> Log Out </button>
    </div>
  );
}

export default Home;