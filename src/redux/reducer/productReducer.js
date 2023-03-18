import {
  ADD_TO_CART,
  QUANTITY_DECREMENT,
  QUANTITY_INCREMENT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productIsThere = state.cart.find(
        (element) => element.id === action.payload.id
      );
      // console.log(typeof action.payload.id);
      if (productIsThere) {
        console.log("Product is there");
        productIsThere.quantity = productIsThere.quantity + 1;
        const newCart = state.cart.filter(
          (product) => product.id != action.payload.id
        );

        return {
          ...state,
          cart: [...newCart, productIsThere],
        };
      } else {
        console.log("Product is not there");
        // console.log("not there")
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case QUANTITY_INCREMENT:
      const proId = action.payload.id;
      const targetedCartProduct = state.cart.find(
        (product) => product.id === proId
      );
      targetedCartProduct.quantity = targetedCartProduct.quantity + 1;

      const newCart = state.cart.filter((product) => product.id !== proId);

      return { ...state, cart: [...newCart, targetedCartProduct] };
    case QUANTITY_DECREMENT:
  
      const pId = action.payload.id;
      const targetCartProduct = state.cart.find(
        (product) => product.id === pId
      );
      const currentQuantity = targetCartProduct.quantity;
      const newCartArray = state.cart.filter((proId) => proId.id !== pId);
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
