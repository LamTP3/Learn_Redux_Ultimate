import { Reducer, combineReducers } from "redux";
import counterReducer, { CounterState } from "./counterReducer";
import userReducer, { UserState } from "./userReducer";

export interface RootState {
  counter: CounterState;
  user: UserState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
