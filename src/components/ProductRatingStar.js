import React from "react";

const ProductRatingStar = ({ star }) => {
  let starCount;

  if (Math.round(star) === 1) {
    starCount = "⭐";
  }
  if (Math.round(star) === 2) {
    starCount = "⭐⭐";
  }
  if (Math.round(star) === 3) {
    starCount = "⭐⭐⭐";
  }
  if (Math.round(star) === 4) {
    starCount = "⭐⭐⭐⭐";
  }
  if (Math.round(star) === 5) {
    starCount = "⭐⭐⭐⭐⭐";
  }
  return <span>{starCount}</span>;
};

export default ProductRatingStar;
