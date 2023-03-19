import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  // console.log(products)

  const state = useSelector((state) => state);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  return (
    <div className="py-5">
      <div className="container">
        <div className="filter mb-4 ">
          <div className="d-flex justify-content-between align-items-center">
            <div><h4 className="m-0">Filter</h4></div>
            <div className="d-flex gap-3 ">
              <div className="filter-box active">In Stock</div>
              <div className="filter-box">Men</div>
              <div className="filter-box">Women</div>
              <div className="filter-box">Jewellery</div>
            </div>
          </div>
        </div>
        <div>
          {products.length > 0 && (
            <div className="row g-3">
              {products.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
