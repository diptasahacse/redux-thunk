import { loadProduct } from "../../actionCreators/productsActions";

 const fetchProducts = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${process.env.REACT_APP_API}/products`);
    const data = await res.json();

    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default fetchProducts;