import React from 'react';
import ReactDOM from 'react-dom';
import {TabBar, Icon } from 'antd-mobile';
import Home from './routes/Home'
import Cart from './routes/Cart'
import List from './routes/List'
import Tabs from './components/Tabs'
import {Router,Route,hashHistory,IndexRoute} from "react-router"


const App = ()=>{
  return <Router history={hashHistory}>
    <Route path="/" component={Tabs}>
      <IndexRoute component={Home} />
      <Route path="cart" component={Cart} />
      <Route path="list" component={List} />
    </Route>

   
  </Router>
}




ReactDOM.render(
  <div>
    <App /> 
    
  </div>
, document.getElementById("root"));

