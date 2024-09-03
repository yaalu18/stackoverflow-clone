import React from "react";
import './LeftSidebar.css'
import '../../App.css'
import { NavLink } from "react-router-dom";
import Globe from '../../assets/globe.png'
//const LeftSidebar=()=>{
const LeftSidebar=({slideIn, handleSlideIn} )=>{
    const slideInStyle = {
        transform: "translateX(0%)",
      };
    
      const slideOutStyle = {
        transform: "translateX(-100%)",
      };
    return(
        <div className='Left-sidebar' style={slideIn ? slideInStyle : slideOutStyle}>
            <nav className='side-nav'>
                <button onClick={() => handleSlideIn()} className="nav-btn">
                <NavLink to='/' className='side-nav-links' activeClassName='active'>
                    <p>Home</p>
                </NavLink>
                </button>
                <div className='side-nav-div' className='side-nav-links' activeClassName='active'>
                    <div><p>PUBLIC</p></div>
                <button onClick={() => handleSlideIn()} className="nav-btn">
                <NavLink to='/Question'>
                    <img src={Globe} alt='Globe' width='50px'/>
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                </button>
                <button onClick={() => handleSlideIn()} className="nav-btn">
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                    <p>Tags</p>
                </NavLink>
                </button>
                <button onClick={() => handleSlideIn()} className="nav-btn"></button>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                    <p>Users</p>
                </NavLink>
               
                
                </div>
            </nav>
        </div>
    )
}
export default LeftSidebar;