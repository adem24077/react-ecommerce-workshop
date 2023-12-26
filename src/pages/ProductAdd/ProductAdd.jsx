import React, { useEffect } from "react";

export default function ProductAdd() {
  useEffect(() => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        description: "Amazing",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <h1>Ürün eklendi</h1>
    </div>
  );
}
