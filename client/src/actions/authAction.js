import authReducer from "../reducers/authReducer";
import { setToken } from "./setToken";
import axios from "axios";

export const loadUser = () => async (dispatch) => {
  console.log("localstoreage", localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
  }
  else{
    console.log("no token present");
  }
  try {
    const response = await axios.get("//127.0.0.1:5000/xyz");
    dispatch({
      type: "LOAD_USER",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_ERROR",
      payload: error,
    });
    alert('Login failed. Enter valid credentials');
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    const response = await axios.post("//127.0.0.1:5000/login", body, config);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });
    await dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_FAIL", payload: error });
    alert('Login failed. Enter valid credentials');

  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
