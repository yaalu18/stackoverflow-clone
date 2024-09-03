import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";
import {useLocation} from 'react-router-dom';

const Users = ({ slideIn, handleSlideIn }) => {
  const location=useLocation()
  console.log('here the location:',location)
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        {
          location.pathname==='/Users'
          
        }
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;