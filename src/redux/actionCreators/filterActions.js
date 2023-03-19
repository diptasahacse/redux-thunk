import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const toggleCategory = (categoryName) => {
  return { type: TOGGLE_CATEGORY, payload: categoryName };
};
export const toggleStock = () => {
  return { type: TOGGLE_STOCK };
};
