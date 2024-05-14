import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  User,
} from "../action/types";

export interface UserState {
  listUser: User[];
  isLoading: boolean;
  isError: boolean;
}
const INITIAL_STATE: UserState = {
  listUser: [],
  isLoading: false,
  isError: false,
};

const userReducers = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      console.log(`FETCH_USERS_REQUEST : `, action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USERS_SUCCESS:
      console.log(`FETCH_USERS_SUCCESS : `, action);
      return {
        ...state,
        listUser: [...action.payload],
        isLoading: false,
        isError: false,
      };
    case FETCH_USERS_FAILURE:
      console.log(`FETCH_USERS_FAILURE: `, action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default userReducers;
