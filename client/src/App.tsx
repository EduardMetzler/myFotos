import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";


import './App.scss';
import { Navbar } from './components/navbar/navbar';
import { configureStore } from './store/store';

function App() {
  return (
    <Provider store={configureStore()}>
    <Router>
      <Navbar />
     
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2 xl8 offset-xl2">
          {/* <Routes /> */}
        </div>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
