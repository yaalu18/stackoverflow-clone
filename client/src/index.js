import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import {Provider} from 'react-redux'; 
 import {createRoot} from 'react-dom/client'
<<<<<<< HEAD
 import Reducers from './reducers'
=======
 import combineReducers from './reducers'
>>>>>>> 6c8295d3abfce5b9dd86fb81e1c7d230047ae650
import {createStore,applyMiddleware,compose} from 'redux'; 
import {thunk} from 'redux-thunk'; 
//import store from './reducers'
//import rootReducer from './reducers';
const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
const store=createStore(Reducers,compose(applyMiddleware(thunk)));
=======
const store=createStore(combineReducers,compose(applyMiddleware(thunk)));
>>>>>>> 6c8295d3abfce5b9dd86fb81e1c7d230047ae650
root.render( 
  <Provider store={store}> 
    <React.StrictMode> 
      <App /> 
    </React.StrictMode>
  </Provider> 
);
 // If you want to start measuring performance in your app, pass a function 
// to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();

