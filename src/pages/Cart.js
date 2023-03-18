import React from "react";
import { useSelector } from "react-redux";
import CartDetails from "../components/CartDetails";
import CartProductCard from "../components/CartProductCard";
import CartProductTable from "../components/CartProductTable";
import EmptyCart from "../components/EmptyCart";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart)

  return (
    <div className="py-5">
      <div className="container">
        <div className="row g-5">
          <div className={`col-12 ${cart.length == 0 || "col-md-9"}`}>
            {cart.length > 0 ? <CartProductTable /> : <EmptyCart />}
          </div>

          {cart.length > 0 && (
            <div className="col-12 col-md-3">
              <CartDetails />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
