import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  toggleCategory,
  toggleStock,
} from "../redux/actionCreators/filterActions";
import { loadProduct } from "../redux/actionCreators/productsActions";
import fetchProducts from "../redux/thunk/products/fetchProducts";

const Products = () => {
  

  const {
    product: { products },
    filter: {
      filters: { category, stock },
    },
  } = useSelector((state) => state);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let content;

  if (products.length) {
    content = (
      <div className="row g-3">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    );
  }
  if (products.length && (stock || category.length)) {
    content = (
      <div className="row g-3">
        {products
          .filter((product) => {
            if (stock) {
              return product.stock === true;
            }
            return product;
          })
          .filter((product) => {
            if (category.length) {
              return category.includes(product.category);
            }
            return product;
          })
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
                className={`filter-box ${
                  category.includes("men's clothing") && "active"
                }`}
                onClick={() => dispatch(toggleCategory("men's clothing"))}
              >
                Men
              </div>
              <div
                className={`filter-box ${
                  category.includes("women's clothing") && "active"
                }`}
                onClick={() => dispatch(toggleCategory("women's clothing"))}
              >
                Women
              </div>
              <div
                className={`filter-box ${
                  category.includes("jewelery") && "active"
                }`}
                onClick={() => dispatch(toggleCategory("jewelery"))}
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
