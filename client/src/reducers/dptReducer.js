export const dptReducer = (
  state = {
    departments: [],
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DEPARTMENT":
      return { departments: payload };
    case "ADD_DEPARTMENT":
      return { departments: [...state.departments, payload] };
    case "DELETE_DEPARTMENT":
      const copydepartments = [...state.departments];
      const indexToDelete = copydepartments.findIndex(
        (dpt) => dpt._id === payload
      );
      return {
        departments: [
          ...copydepartments.slice(0, indexToDelete),
          ...copydepartments.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
