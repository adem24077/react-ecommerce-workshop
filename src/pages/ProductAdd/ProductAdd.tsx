import React from "react";

export default function ProductAdd() {
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
