import React from "react";
import { UseSelector } from "react-redux";
import User from "./User";
import './Users.css';
const UsersList=()=>{
    const users=useSelector((state)=>state.usersReducer)
    console.log('finally the users:',users)
    return(
        <div className="user-List-container">
            {users.map((user)=>(
                <User user={user} key={user?._id}/>
            ))}
        </div>
    )
}
export default UsersList;