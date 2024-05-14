import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  DELETE_USERS_SUCCESS,
  UserActionTypes,
  User,
} from "./types";

// Action creators
export const increaseCount = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCount = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch: any) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get<User[]>("http://localhost:8080/users/all");
      dispatch(fetchUsersSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersFailure("Error fetching users"));
    }
  };
};

export const fetchUsersRequest = (): UserActionTypes => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users: User[]): UserActionTypes => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error: string): UserActionTypes => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const createNewUserRedux = (user: User) => {
  return async (dispatch: any, getState: any) => {
    dispatch(createUsersRequest());
    try {
      await axios.post<User>("http://localhost:8080/users/create", user);
      dispatch(createUsersSuccess());
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
      dispatch(createUsersFailure("Error fetching users"));
    }
  };
};

export const createUsersRequest = (): UserActionTypes => {
  return {
    type: CREATE_USERS_REQUEST,
  };
};

export const createUsersSuccess = (): UserActionTypes => {
  return {
    type: CREATE_USERS_SUCCESS,
  };
};

export const createUsersFailure = (error: string): UserActionTypes => {
  return {
    type: CREATE_USERS_FAILURE,
    payload: error,
  };
};

export const deleteUserRedux = (id: number) => {
  return async (dispatch: any, getState: any) => {
    try {
      await axios.post(`http://localhost:8080/users/delete/${id}`);
      dispatch(deleteUserSuccess());
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserSuccess = (): UserActionTypes => {
  return {
    type: DELETE_USERS_SUCCESS,
  };
};
