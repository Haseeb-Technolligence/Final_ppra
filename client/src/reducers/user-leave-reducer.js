export const leaveReducer = (
  state = {
    leaveList: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_LEAVE":
      return { leaveList: action.payload };
    case "INSERT_LEAVE":
      return { leaveList: [...state.leaveList, action.payload] };
    case "UPDATE_LEAVE":
      const copyLeaveList = [...state.leaveList];
      const indexToUpdate = copyLeaveList.findIndex(
        (leave) => leave._id === action.payload.id
      );
      const newCopyLeaveList = {
        ...copyLeaveList[indexToUpdate],
        status: action.payload.status,
      };

      return {
        leaveList: [
          ...copyLeaveList.slice(0, indexToUpdate),
          newCopyLeaveList,
          ...copyLeaveList.slice(indexToUpdate + 1),
        ],
      };
    case "DELETE_LEAVE":
      const copyLeaveListForDelete = [...state.leaveList];
      const indexToDelete = copyLeaveListForDelete.findIndex(
        (leave) => leave._id === action.payload
      );
      return {
        leaveList: [
          ...copyLeaveListForDelete.slice(0, indexToDelete),
          ...copyLeaveListForDelete.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
