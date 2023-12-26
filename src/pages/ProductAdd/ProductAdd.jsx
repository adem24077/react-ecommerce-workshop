import React from "react";

export default function ProductAdd() {
  //   const [product, setProduct] = useState({
  //     title: "",
  //     description: "",
  //     brand: "",
  //     price: "",
  //   });

  //   const onChangeProduct = (e) => {
  //     setProduct({ ...product, [e.target.name]: e.target.value });
  //   };

  //   const addProduct = async (product) => {
  //     let response = await axios.post(
  //       "https://dummyjson.com/products/add",
  //       {
  //         brand: product.brand,
  //         title: product,
  //         description: product.description,
  //         price: product.price,
  //       },
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     );
  //     console.log(response.data);
  //   };

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: "BMW Pencil",
  //       description: "Amazing",
  //       brand:"BMW",
  //       price:
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  const title = prompt("Ürün Adı: ");
  const description = prompt("Ürün Açıklama");
  const brand = prompt("Ürün Markası");
  const price = prompt("Ürün Fiyatı");
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      brand: brand,
      price: price,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, " ürünü eklendi. ");
    });

  return (
    <div>
      <h1> Ürün eklendi</h1>
    </div>
  );
}
