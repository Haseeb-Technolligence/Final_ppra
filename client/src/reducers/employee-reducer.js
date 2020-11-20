export const employeesReducer = (
  state = {
    employees: [],
    oneEmployee:[],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return { employees: action.payload };
    case "INSERT_EMPLOYEE":
      return { employees: [...state.employees, action.payload] };
    case "UPDATE_EMPLOYEE":
      return state;
    case "FETCH_EMPLOYEE_BY_ID":
      return {
        employees: state.employees,
        oneEmployee: action.payload,
      };
    case "DELETE_EMPLOYEE":
      const copyEmployeesList = [...state.employees];
      const indexToDelete = copyEmployeesList.findIndex(
        (emp) => emp._id === action.payload
      );
      return {
        employees: [
          ...copyEmployeesList.slice(0, indexToDelete),
          ...copyEmployeesList.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
