export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const CREATE_USERS_REQUEST = "CREATE_USERS_REQUEST";
export const CREATE_USERS_SUCCESS = "CREATE_USERS_SUCCESS ";
export const CREATE_USERS_FAILURE = "CREATE_USERS_FAILURE";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";

// Incerement action
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

// Fetch users action
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

// Create users action
interface CreateUsersRequestAction {
  type: typeof CREATE_USERS_REQUEST;
}

interface CreateUsersSuccessAction {
  type: typeof CREATE_USERS_SUCCESS;
}

interface CreateUsersFailureAction {
  type: typeof CREATE_USERS_FAILURE;
  payload: string;
}

//Delete User:
interface DeleteUserSuccessAction {
  type: typeof DELETE_USERS_SUCCESS;
}

export type UserActionTypes =
  | IncrementAction
  | DecrementAction
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | CreateUsersRequestAction
  | CreateUsersSuccessAction
  | CreateUsersFailureAction
  | DeleteUserSuccessAction;

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
}
