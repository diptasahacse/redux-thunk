import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  // console.log(products)

  const state = useSelector(state => state)
  // console.log(state)

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
        {products.length > 0 && (
          <div className="row g-3">
            {products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
