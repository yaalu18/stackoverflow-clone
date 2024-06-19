import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import usersReducer from "./users";

export default combineReducers({
  authReducer,
  currentUserReducer,
  usersReducer
});




//import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
//import {thunk} from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import authReducer from './auth'; // Adjust the path based on your actual file structure

// Combine all reducers//
//const rootReducer= combineReducers({
    //auth:authReducer,
    // Add other reducers here if needed//
//});
//export default Reducers
//Create the Redux store and apply middleware
//const store = createStore(
  //  rootReducer,
  //  composeWithDevTools(applyMiddleware(thunk))
//);
//const store=createStore(rootReducer,compose(applyMiddleware(thunk)))

//export default store;