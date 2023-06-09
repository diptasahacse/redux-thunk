import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

const CartProductTable = () => {
  const { product:{cart} } = useSelector((state) => state);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">#</th>
            <th scope="col" className="text-center">Product</th>
            <th scope="col"  className="text-center">Price</th>
            <th scope="col"  className="text-center">Quantity</th>
            <th scope="col"  className="text-center">Total</th> 
            <th scope="col"  className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart
            .sort((a, b) => a.cartPosition - b.cartPosition)
            .map((product, index) => (
              <CartProductCard key={index} index={index} product={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProductTable;
