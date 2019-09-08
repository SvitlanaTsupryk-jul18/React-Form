import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEND_REGISTATION":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
