import axios from "axios";

export const fetchLeaveType = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/leavetype");
      dispatch({ type: "FETCH_LEAVE_TYPE", payload: response.data });
    } catch (e) {
      dispatch({ type: "FETCH_LEAVE_TYPE_REJECTED" });
    }
  };
};

export const insertLeaveType = (leaveType) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "//127.0.0.1:5000/leavetype",
        leaveType
      );
      dispatch({ type: "INSERT_LEAVE_TYPE", payload: response.data });
    } catch (e) {
      dispatch({
        type: "INSERT_LEAVE_TYPE_REJECTED",
        payload: "Error in inserting data",
      });
    }
  };
};

export const deleteLeaveType = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("//127.0.0.1:5000/leavetype/" + id);
      dispatch({ type: "DELETE_LEAVE_TYPE", payload: id });
    } catch (e) {
      dispatch({
        type: "DELETE_LEAVE_TYPE_REJECTED",
        payload: "Error in deleting data",
      });
    }
  };
};
