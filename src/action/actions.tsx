import { INCREMENT, DECREMENT } from "./types";
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
