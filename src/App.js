import React from 'react';
import Header from './Header.js';
import Login from './Login.js';
import Join from './Join';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/login" component={Login}></Route>
        <Route path="/join" component={Join}></Route>
      </Router>
    </div>
  );
}

export default App;
