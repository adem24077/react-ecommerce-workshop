import React from "react";

export default function ProductDelete() {
  const id = prompt("Ürün id");
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return <div>Ürün Silindi.</div>;
}
