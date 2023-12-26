import React, { useEffect } from "react";

export default function ProductDelete() {
  useEffect(() => {
    const fetchProduct = async () => {
      fetch("https://dummyjson.com/products/1", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(console.log);
    };
  }, []);

  return <div>Ürün Silindi.</div>;
}
