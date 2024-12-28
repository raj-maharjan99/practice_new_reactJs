import React from "react";
import { useGetProductsDetailsQuery } from "../createApi/productApi";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data } = useGetProductsDetailsQuery(id);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2>ProductsDetail</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div>
          <img width={200} src={data?.thumbnail} alt="" />
        </div>
        <div>
          <h2>Description</h2>
          <p style={{ fontFamily: "monospace", fontSize: "20px" }}>
            {data?.description}
          </p>
          <p>Price: ${data?.price}</p>
          <button onClick={() => nav("/product")}>Back to Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
