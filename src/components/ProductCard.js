import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actionCreators/productsActions";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/actionTypes/actionTypes";
import ProductRatingStar from "./ProductRatingStar";
const ProductCard = ({ item }) => {
  const {
    title,
    price,
    image,
    description,
    rating: { rate, count },
  } = item;

  const dispatch = useDispatch();

  const {cart} = useSelector(state => state)
  // console.log(cart)

  const {pathname} = useLocation();
  // console.log(pathname.includes("products"))

  return (
    <div className="col-12 col-md-4, col-lg-3">
      <div className="card product-card p-3">
        <div className="product-image">
          <img src={image} alt="" />
        </div>
        <h5 className="mt-3">{title}</h5>
        <p>{description.slice(0, 100)}</p>

        <p className="d-flex align-items-center gap-1">
          <span>Rating: </span> <ProductRatingStar star={rate} />
        </p>
        <h5>Price : ${price}</h5>

        <div className="d-flex justify-content-between">
          {!pathname.includes('cart') && <button
            className="btn btn-primary mt-3"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>}
          {pathname.includes('cart') && <button onClick={()=> dispatch(removeFromCart(item))}
            className="bg-danger border-0 rounded text-white d-flex align-items-center"
            
          >
            <i className="ri-close-circle-fill"></i>
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
