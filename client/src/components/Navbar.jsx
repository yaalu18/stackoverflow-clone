import React from 'react'
import {Link} from 'react-router-dom'
import stackicon from '../assets/stackicon.png';
import searchicon from '../assets/searchicon.png';
import  Avatar from './Avatar/Avatar.jsx'
import Button from './Button/Button.jsx'
import './Navbar.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentUser } from '../actions/currentUser';
const Navbar=()=>{
    //var User=JSON.parse(localStorage.getItem('profile'))
    //console.log(User?.result?.id);

        var User = useSelector(state => state.currentUserReducer); // Correct usage
        const dispatch = useDispatch(); // Correct usage

        //const [User, setUser] = useState(null); 
        console.log('User',User)
        console.log('profile:',JSON.parse(localStorage.getItem('profile')))
        useEffect(() => {
            dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        }, [dispatch]);
        
        /*useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem('profile'));
            setUser(storedUser);
            console.log('storedUser',storedUser)
        }, []);
    
        useEffect(() => {
            console.log('User updated:', User); // Log whenever User changes
           //console.log('storedUser',storedUser)
            // Log user ID when User is not null and has result.id defined
            if (User && User.result && User.result._id) {
                console.log('finally the users id is:', User.result._id);
            }
        }, [User]); // This effect runs whenever User changes
    
    
        
        // Rest of your component code*/
    
    
    return(
        <nav className='main-nav'>
            <div className="navbar"> 
                <Link to='/' className='nav-item nav-btn'>
                    
                    <img src={stackicon} alt='logo'></img>
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Product</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                
            <form>
                <input type="text" placeholder="Search../"/>
                <img src={searchicon} alt="search" width="18" className='search-icon'/>
               
            </form>
       
            {User === null ? (
                    <>
                        <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
                    </>
                ) : (
                    <>
                        <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
                            <Link  to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                            {User.result.name.charAt(0).toUpperCase()}
                            </Link>
                        </Avatar>
                        <button className='nav-item nav-link' onClick={handleLogout}>Log out</button>
                    </>
                   
                )}
            </div>
        </nav>
    )   
}
export default Navbar;

