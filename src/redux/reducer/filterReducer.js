import { TOGGLE_CATEGORY, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    category: [],
    stock: false,
  },
  keyword: "",
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      const exist = state.filters.category.includes(action.payload);

      if (!exist) {
        return {
          ...state,
          filters: {
            ...state.filters,
            category: [...state.filters.category, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            category: state.filters.category.filter(
              (category) => category !== action.payload
            ),
          },
        };
      }

    case TOGGLE_STOCK:
      return {
        ...state, filters: {...state.filters, stock: !state.filters.stock}
      };

    default:
      return state;
  }
};
export default filterReducer;
