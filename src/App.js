import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import './App.css';
import Header from './Header';




function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
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
