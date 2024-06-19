import React from 'react'
import {Link} from 'react-router-dom'
import stackicon from '../assets/stackicon.png';
import searchicon from '../assets/searchicon.png';
import  Avatar from './Avatar/Avatar.jsx'
import Button from './Button/Button.jsx'
import './Navbar.css'
//import User from '../pages/Users/User.jsx';
//<Link to='/' style={{color:'white',textDecoration:'none'}}>Manoj</Link>

const Navbar=()=>{
    var User=JSON.parse(localStorage.getItem('profile'))
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

