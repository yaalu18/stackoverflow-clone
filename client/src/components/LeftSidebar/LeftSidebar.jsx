import React from "react";
import './LeftSidebar.css'
import '../../App.css'
import { NavLink } from "react-router-dom";
import Globe from '../../assets/globe.png'
const LeftSidebar=()=>{
    return(
        <div className='Left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div' className='side-nav-links' activeClassName='active'>
                    <div><p>PUBLIC</p></div>
                <NavLink to='/Question'>
                    <img src={Globe} alt='Globe' width='50px'/>
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
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