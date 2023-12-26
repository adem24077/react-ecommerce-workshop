import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to={`/products/${props.product.id}`} className="btn btn-info">
          Detay
        </Link>
        <Link to={`/products/delete`} className="btn btn-danger">
          Sil
        </Link>
        <Link to={`/products/add`} className="btn btn-success">
          Ekle
        </Link>
      </div>
    </div>
  );
}
