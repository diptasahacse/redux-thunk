import React, { useEffect, useState } from "react";
import PorductListItem from "../../components/PorductListItem";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/thunk/products/fetchProducts";

const ProductList = () => {
  const {
    product: { products },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Products</h5>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">In Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <PorductListItem item={item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
