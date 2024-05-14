import { Dispatch } from "redux";
import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
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
  return async (dispatch: Dispatch<UserActionTypes>) => {
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
