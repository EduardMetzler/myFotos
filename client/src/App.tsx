import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";


import './App.scss';
import { Navbar } from './components/navbar/navbar';
import { configureStore } from './store/store';

import { RegisterPage } from "./page/Register.page";
import { LoginPage } from './page/Login.page';



function App() {
  
  return (
    <Provider store={configureStore()}>
    <Router>
      <Navbar />
     

    </Router>
  </Provider>
  );
}

export default App;
