import axios from "axios";

export const addDepartment = (department) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "//127.0.0.1:5000/addDepartment",
        department
      );
      dispatch({ type: "ADD_DEPARTMENT", payload: response.data });
    } catch (e) {
      dispatch({
        type: "DEPARTMENT_NOT_ADDED",
        payload: "Error in inserting data",
      });
    }
  };
};

export const getDepartment = () => {
  console.log("ok here");
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/getDepartment");
      dispatch({ type: "GET_DEPARTMENT", payload: response.data });
    } catch (e) {
      console.log("err", e);
      dispatch({ type: "DEPARTMENT_INVALID" });
      alert("error");
    }
  };
};

export const deleteDepartment = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("//127.0.0.1:5000/deleteDepartment/" + id);
      dispatch({ type: "DELETE_DEPARTMENT", payload: id });
    } catch (e) {
      dispatch({
        type: "DEPARTMENT_NOT_DELETED",
        payload: "Error in deleting Department!",
      });
    }
  };
};
