export const NoticeReducer = (state = { notice: [] }, action) => {
  switch (action.type) {
    case "ADD_NOTICE":
      return { notice: [...state.notice, action.payload] };
    case "GET_NOTICE":
      return { notice: action.payload };
    case "DELETE_NOTICE":
      const copyList = [...state.notice];
      const indexToDelete = copyList.findIndex(
        (notice) => notice._id === action.payload
      );
      return {
        notice: [
          ...copyList.slice(0, indexToDelete),
          ...copyList.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
