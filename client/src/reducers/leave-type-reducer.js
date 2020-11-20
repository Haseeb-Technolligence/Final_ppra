export const leaveTypeReducer = (
  state = {
    leaveTypeList: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_LEAVE_TYPE":
      return { leaveTypeList: action.payload };
    case "INSERT_LEAVE_TYPE":
      return { leaveTypeList: [...state.leaveTypeList, action.payload] };
    case "DELETE_LEAVE_TYPE":
      const copyLeaveTypeList = [...state.leaveTypeList];
      const indexToDelete = copyLeaveTypeList.findIndex(
        (leave) => leave._id === action.payload
      );
      return {
        leaveTypeList: [
          ...copyLeaveTypeList.slice(0, indexToDelete),
          ...copyLeaveTypeList.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
