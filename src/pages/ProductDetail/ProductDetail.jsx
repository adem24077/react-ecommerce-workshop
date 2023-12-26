import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      console.log(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container mt-10">
      <div className="row">
        <h3>Ürün Detayları</h3>
        <div className="card" styleName={"width:18 rem"}>
          <img src={product.thumbnail} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ürün id: {id}</li>
            <li className="list-group-item">Ürün Adı: {product.title}</li>
            <li className="list-group-item">
              Ürün Açıklaması: {product.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
