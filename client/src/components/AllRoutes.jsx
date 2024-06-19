import React from 'react';
import { Routes,Route } from 'react-router-dom';
//import Home from '../Pages/Home/Home';
import Home from '../pages/Home/Home.jsx';
import Auth from '../pages/Auth/Auth.jsx';
import Questions from '../pages/Questions/Questions.jsx';
import AskQuestion from '../pages/AskQuestion/AskQuestion.jsx';
import DisplayQuestions from '../pages/Questions/DisplayQuestions.jsx';
import User from '../pages/Users/User.jsx'
const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Auth' element={<Auth/>}/>
            <Route path='/Questions' element={<Questions/>}/>
            <Route path='/AskQuestion' element={<AskQuestion/>}/>
            <Route path='/Questions/:id' element={<DisplayQuestions/>}/>
            <Route path='/User' element={<User/>}/>
        </Routes>
    )
}
export default AllRoutes