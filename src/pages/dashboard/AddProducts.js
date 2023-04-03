import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actionCreators/productsActions";
import addProductData from "../../redux/thunk/products/addProduct";
const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const {
      imageLink,
      productCategory,
      productDescription,
      productPrice,
      productTitle,
      ratingCount,
      ratingRate,
      stock,
    } = data;

    let imageFile = imageLink[0];
    const productImageformData = new FormData();
    productImageformData.append("image", imageFile);

    let productData = {
      title: productTitle,
      price: Number(productPrice),
      stock,
      description: productDescription,
      category: productCategory,
      image: productImageformData,
      rating: {
        rate: Number(ratingRate),
        count: Number(ratingCount),
      },
    };

    dispatch(addProductData(productData));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Title</label>
            <input
              {...register("productTitle")}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Image link</label>
            <input
              {...register("imageLink")}
              type="file"
              className="form-control"
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Category</label>
            <select {...register("productCategory")} className="form-select">
              <option selected>Choose...</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Price</label>
            <input
              {...register("productPrice")}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Rating Rate</label>
            <input
              {...register("ratingRate")}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Rating Count</label>
            <input
              {...register("ratingCount")}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Description</label>
            <textarea
              {...register("productDescription")}
              className="form-control"
            ></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                {...register("stock")}
                type="checkbox"
              />
              <label className="form-check-label">Stock</label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
