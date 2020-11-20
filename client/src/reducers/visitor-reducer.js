export const visitorReducer = (
  state = {
    visitorList: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_VISITOR":
      return { visitorList: action.payload };
    case "INSERT_VISITOR":
      return { visitorList: [...state.visitorList, action.payload] };
    default:
      return state;
  }
};
