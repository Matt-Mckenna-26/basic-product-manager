import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main';
import ProductDetail from './views/ProductDetail'
import Update from './views/Update'
import React, {useState} from 'react'


function App() {
  return (
    <div className="App">
    <Router>
      <Main  path="/"/>
      <ProductDetail path="product/:id" />
      <Update path ="product/:id/edit"/>
    </Router>
    </div>
  );
}

export default App;
