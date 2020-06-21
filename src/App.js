import React from 'react';
import Header from './Header.js';
import Login from './Login.js';
import Join from './Join';
import Gallery from './Gallery';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/login" component={Login}></Route>
        <Route path="/join" component={Join}></Route>
        <Route path="/gallery" component={Gallery}></Route>
      </Router>
    </div>
  );
}

export default App;
