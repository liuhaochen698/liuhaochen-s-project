import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
  Redirect
 } from "react-router-dom";
import Test1 from "./components/Test1.js";
import Test2 from './components/Test2.js';
function App() {
  return (
    <div className="App">
     <Router>
       <Link to="/test1">test1</Link>
       <Link to="/test2">test2</Link>
       <Route path="/test1" component={Test1}></Route>
       <Route path="/test2" component={Test2}></Route>
     </Router>
    </div>
  );
}

export default App;
