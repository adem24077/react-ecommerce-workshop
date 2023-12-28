import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
  //const location = useLocation(); //query string
  const params = useParams<{ id: string }>(); // location => Veri her zamman string gelir.
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if (params.id) {
      ProductService.getById(parseInt(params.id)).then((response) => {
        setProduct(response.data);
      });
    }
  }, []);

  return (
    <div className="container mt-10">
      <div className="row">
        <h3>Ürün Detayları</h3>
        <img src={product?.thumbnail} className="rounded" alt="..." />
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ürün id: {product?.id}</li>
            <li className="list-group-item">Ürün Adı: {product?.title}</li>
            <li className="list-group-item">
              Ürün Açıklaması: {product?.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
