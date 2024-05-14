import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  User,
} from "../action/types";

export interface UserState {
  listUser: User[];
  isLoading: boolean;
  isError: boolean;
  isCreating: boolean;
}
const INITIAL_STATE: UserState = {
  listUser: [],
  isLoading: false,
  isError: false,
  isCreating: false,
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

    case CREATE_USERS_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };

    case CREATE_USERS_FAILURE:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
};

export default userReducers;
