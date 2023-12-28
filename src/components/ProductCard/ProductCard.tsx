import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import { HttpStatusCode } from "axios";

type Props = {
  product: ProductModel;
  onDelete: (id: number) => void;
};

const ProductCard = (props: Props) => {
  const deleteProduct = async () => {
    try {
      let response = await ProductService.delete(props.product.id);
      if (response.status == HttpStatusCode.Ok) {
        props.onDelete(props.product.id);
        alert("Veri başarıyla silindi.");
      }
    } catch (e) {
      alert("Veri silinemedi");
    }
  };

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p>{props.product.price}£</p>
        <Link to={`/products/${props.product.id}`} className="btn btn-info">
          Detay
        </Link>
        <button
          onClick={() => {
            deleteProduct();
          }}
          className="btn btn-danger"
        >
          Sil
        </button>
        <Link to={`/products/add`} className="btn btn-success">
          Ekle
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
