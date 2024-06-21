//import { useNavigate } from 'react-router-dom';


const authReducer = (state = { data: null },action) => {
    switch (action.type) {
      case "AUTH":
        console.log('am i dispatching auth')
        console.log("this is the thing",action?.data)
        console.log("this is the thing stringified", JSON.stringify({ ...action?.data.result }))
        localStorage.setItem("Profile", JSON.stringify({ ...action?.data.result }));
        console.log('why its not moving forward')
        return { ...state, data: action?.data };
      case "LOGOUT":
        localStorage.clear();
        return { ...state, data: null };
      default:
        return state;
    }
  };
  
  export default authReducer;