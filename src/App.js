import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';

import Header2 from './Header2';
import Body2 from './Body2';
import Footer2 from './Footer2';

import SignUp from './SignUp';
import MyAccount from './MyAccount' ;



function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (

    
    <Router>
      <div className="app">

        <Switch> 

            <Route exact path='/'>

              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

              {isMenuOpen && <Menu/>}

              <HeaderBlock />

            </Route>



            <Route exact path='/Login2'>

              <Header2 />

              <Body2 />
          
              <Footer2 />

            </Route>



            <Route exact path='/signup'>

              <Header2 />

              <SignUp />

              <Footer2 />
          
            </Route>


            <Route exact path='/MyAccount'>

              <Header2 />

              <MyAccount />
          
              <Footer2 />

            </Route>


        </Switch>

      </div>
    </Router>

  );
}

export default App;
