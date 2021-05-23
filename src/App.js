import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <BrowserRouter>
    <div>
     <Switch>
       <Route exact path="/" component={HomePage}></Route>
       <Route path="/shop" component={ShopPage}></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
