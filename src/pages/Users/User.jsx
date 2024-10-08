import React from "react";
import { Link } from "react-router-dom";
//import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";


import "./Users.css";

const User =({ user }) => {
    console.log("User component props:", user); // Log the user object to check its content
    return(
    
    <Link to={`/Users/${user._id}`} className="user-profile-link">
      {/*<Link to={`/Users/${user._id}`} className="user-profile-link">*/}
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <h5>{user.name}</h5>
    </Link>
    )
};


export default User