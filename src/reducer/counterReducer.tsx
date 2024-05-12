import { INCREMENT, DECREMENT } from "../action/types";

const INITIAL_STATE = {
  count: 0,
  name: "Phuc Lam",
};

const counterReducers = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      //merge state
      console.log(`I'm running Increment`);
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducers;
