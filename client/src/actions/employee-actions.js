import axios from "axios";

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/employee");
      dispatch({ type: "FETCH_EMPLOYEES", payload: response.data });
    } catch (e) {
      dispatch({ type: "FETCH_EMPLOYEES_REJECTED" });
    }
  };
};

export const fetchEmployeeById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("//127.0.0.1:5000/employee/" + id);
      dispatch({ type: "FETCH_EMPLOYEE_BY_ID", payload: response.data });
    } catch (e) {
      dispatch({ type: "FETCH_EMPLOYEE_BY_ID_REJECTED" });
    }
  };
};

export const insertEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("//127.0.0.1:5000/employee", employee);
      dispatch({ type: "INSERT_EMPLOYEE", payload: response.data });
    } catch (e) {
      return e;
    }
  };
};

export const updateEmployee = (id, employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch("//127.0.0.1:5000/employee/"+id, employee);
      // if(response.data) alert('Record Updated Successfully')
      dispatch({ type: "UPDATE_EMPLOYEE", payload: response.data });
    } catch (e) {
      return e;
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("//127.0.0.1:5000/employee/" + id);
      dispatch({ type: "DELETE_EMPLOYEE", payload: id });
    } catch (e) {
      dispatch({
        type: "DELETE_EMPLOYEE_REJECTED",
        payload: "Error in deleting data",
      });
    }
  };
};
