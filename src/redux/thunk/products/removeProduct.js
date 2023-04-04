import { toast } from "react-toastify";
import { removeProduct } from "../../actionCreators/productsActions";

const removeProductData = (product) => {

  return async (dispatch, getState) => {
    const res = await fetch(
      `${process.env.REACT_APP_API}/product/${product._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeProduct(product._id));
      toast("Data successfully remove.");
    }
  };
};
export default removeProductData;
