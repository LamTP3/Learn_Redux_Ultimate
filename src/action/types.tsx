export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

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

export type UserActionTypes =
  | IncrementAction
  | DecrementAction
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;

export interface User {
  id: number;
  email: string;
  username: string;
}
