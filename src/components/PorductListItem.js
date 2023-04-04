import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/actionCreators/productsActions";
import removeProductData from "../redux/thunk/products/removeProduct";

const PorductListItem = ({ item }) => {
  const { _id, title, stock, price, category } = item;
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">
        <input className="form-check-input" type="checkbox" />
      </th>
      <td>{title.slice(0, 10)}</td>
      <td>{category}</td>
      <td>
        {stock ? (
          <p className="text-success">Available</p>
        ) : (
          <p className="text-danger">Stock Out</p>
        )}
      </td>
      <td>${price}</td>
      <td>
        <button
          onClick={() => dispatch(removeProductData(item))}
          className="item-remove-button"
        >
          <span className="text-danger">
            <i className="ri-delete-bin-6-line"></i>
          </span>
        </button>
        <button className="item-remove-button">
          <span className="text-secondary">
            <i className="ri-edit-box-line"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default PorductListItem;
