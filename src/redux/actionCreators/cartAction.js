import { QUANTITY_DECREMENT, QUANTITY_INCREMENT } from "../actionTypes/actionTypes";

export const quantityIncrement = (product) => {
    return { type: QUANTITY_INCREMENT, payload: product };
  };
export const quantityDecrement = (product) => {
    return { type: QUANTITY_DECREMENT, payload: product };
  };