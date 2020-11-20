const initialState = {
  token: localStorage.getItem("token"),
  loggedInUser: {},
  isLoggedIn: false,
  errors: {},
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
      };
    case "LOAD_USER":
      localStorage.getItem("token");
      console.log("login success", payload);
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: action.payload,
      };
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
        error: payload,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
