import * as api from "../api";
import authReducer from "../reducers/auth";
import { setCurrentUser } from "./currentUser";
//import { fetchAllUsers } from "./users";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    console.log("im dispatching signup")
    const { data } = await api.signUp(authData);
    console.log("API response data:", data);

    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    //dispatch(fetchAllUsers());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    console.log("Dispatching login action with authData:", authData);
    const response = await api.logIn(authData);
    console.log("API response:", response);
    const { data } = response;
    console.log("Extracted data:", data);
    dispatch({ type: "AUTH", data });
    console.log("Dispatched AUTH action with data:", data);
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log("Login action error:", error);
  }
};


/*export const login = (authData, navigate) => async (dispatch) => {
  try {
    console.log("im dispatching login")
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};*/