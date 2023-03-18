import React from "react";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const subTotal = cart.reduce(
    (total, currentValue, currentIndex, arr) =>
      currentValue.quantity * currentValue.price + total,
    0
  );
  const shippingFee = (subTotal * 2)/100;
  console.log(subTotal);
  return (
    <div className="cart-details">
      <div>
        <h3 className="mb-4">Cart details</h3>
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <strong>Subtotal</strong>
          <b>${subTotal.toFixed(1)}</b>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <strong>Shipping</strong>
          <b>${shippingFee.toFixed(1)}</b>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h3>Total:</h3>
          <b>${(shippingFee+subTotal).toFixed(1)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
