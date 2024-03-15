import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import './App.css';
import Header from './Header';
import Login from './Login';
import { auth } from './firebase';





function App() {
  useEffect(()=>{

    auth.onAuthStateChanged((authUser)=>{
      console.log("THE USER IS >>> ",authUser);
  
      if(authUser){
        dispatchEvent({
          type:"SET_USER",
          user:null,
        });
      }
    });
  
  },[]);
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path="/login">
          <Login/>

        </Route>
        <Route path="/">
          <Header />
          <Home />
           
          
        </Route>
      </Switch>
     </Router>
    </div>
  );
}



export default App;
