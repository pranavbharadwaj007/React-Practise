import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './indexproj.css';

import * as serviceWorker from './serviceWorker';
import App from './App';
import Proj from './Proj';


ReactDOM.render(
  
//  <App/>
 <Proj/> 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
