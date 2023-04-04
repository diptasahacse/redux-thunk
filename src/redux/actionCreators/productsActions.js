import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DELETE_PRODUCT,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
export const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};

export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};
export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const removeProduct = (_id) => {
  return {
    type: DELETE_PRODUCT,
    payload: _id,
  };
};
