import { INCREMENT, DECREMENT } from "../action/types";
export interface CounterState {
  count: number;
  name: string;
}
const INITIAL_STATE: CounterState = {
  count: 0,
  name: "Phuc Lam",
};

const counterReducers = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
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
