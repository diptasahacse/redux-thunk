import React from "react";

const PorductListItem = ({ item: { title, stock, price, category } }) => {
  return (
    <tr>
      <th scope="row">
        <input class="form-check-input" type="checkbox" />
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
        <button className="item-remove-button">
          <span className="text-danger">
            <i class="ri-delete-bin-6-line"></i>
          </span>
        </button>
        <button className="item-remove-button">
          <span className="text-secondary">
          <i class="ri-edit-box-line"></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default PorductListItem;
