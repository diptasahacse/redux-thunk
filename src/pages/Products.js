import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  toggleCategory,
  toggleStock,
} from "../redux/actionCreators/filterActions";

const Products = () => {
  // console.log(products)

  const {
    filter: {
      filters: { category, stock },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let content;

  if (products.length > 0) {
    content = (
      <div className="row g-3">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    );
  }
  if (products.length > 0 && stock) {
    content = (
      <div className="row g-3">
        {products
          .filter((product) => product.stock === true)
          .map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="filter mb-4 ">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="m-0">Filter</h4>
            </div>
            <div className="d-flex gap-3 ">
              <div
                onClick={() => dispatch(toggleStock())}
                className={`filter-box ${stock && "active"}`}
              >
                In Stock
              </div>
              <div
                className={`filter-box ${category.includes("men") && "active"}`}
                onClick={() => dispatch(toggleCategory("men"))}
              >
                Men
              </div>
              <div
                className={`filter-box ${
                  category.includes("women") && "active"
                }`}
                onClick={() => dispatch(toggleCategory("women"))}
              >
                Women
              </div>
              <div
                className={`filter-box ${
                  category.includes("jewellery") && "active"
                }`}
                onClick={() => dispatch(toggleCategory("jewellery"))}
              >
                Jewellery
              </div>
            </div>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Products;
