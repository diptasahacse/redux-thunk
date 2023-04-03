import React, { useEffect, useState } from "react";
import PorductListItem from "../../components/PorductListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div class="card">
        <h5 class="card-header">Products</h5>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <input class="form-check-input" type="checkbox" />
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
