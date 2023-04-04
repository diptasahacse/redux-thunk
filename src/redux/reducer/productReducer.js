import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DELETE_PRODUCT,
  LOAD_PRODUCT,
  QUANTITY_DECREMENT,
  QUANTITY_INCREMENT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case ADD_TO_CART:
      const productIsThere = state.cart.find(
        (element) => element._id === action.payload._id
      );

      if (productIsThere) {
        productIsThere.quantity = productIsThere.quantity + 1;
        const newCart = state.cart.filter(
          (product) => product._id != action.payload._id
        );

        return {
          ...state,
          cart: [...newCart, productIsThere],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    case QUANTITY_INCREMENT:
      const proId = action.payload._id;
      const targetedCartProduct = state.cart.find(
        (product) => product._id === proId
      );
      targetedCartProduct.quantity = targetedCartProduct.quantity + 1;

      const newCart = state.cart.filter((product) => product._id !== proId);

      return { ...state, cart: [...newCart, targetedCartProduct] };
    case QUANTITY_DECREMENT:
      const pId = action.payload._id;
      const targetCartProduct = state.cart.find(
        (product) => product._id === pId
      );
      const currentQuantity = targetCartProduct.quantity;
      const newCartArray = state.cart.filter((proId) => proId._id !== pId);
      if (currentQuantity === 1) {
        return { ...state, cart: [...newCartArray] };
      }
      targetCartProduct.quantity = targetCartProduct.quantity - 1;
      return { ...state, cart: [...newCartArray, targetCartProduct] };

    default:
      return state;
  }
};
export default productReducer;
