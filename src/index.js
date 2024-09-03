import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import {Provider} from 'react-redux'; 
 import {createRoot} from 'react-dom/client';
 import combineReducers from './reducers';
import {createStore,applyMiddleware,compose} from 'redux'; 
import {thunk} from 'redux-thunk'; 
//import store from './reducers'
//import rootReducer from './reducers';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(combineReducers,compose(applyMiddleware(thunk)));
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

 /*/*git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yaalu18/Videoplayer_Supports_Multipleresolutions2.git
git push -u origin main*/

