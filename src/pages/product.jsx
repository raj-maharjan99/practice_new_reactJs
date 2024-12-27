import React from "react";
import { useGetProductApiQuery } from "../createApi/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import Cart from "./cart";
// import Cart from "./cart";

const Product = () => {
  const { data, isLoading, isError } = useGetProductApiQuery();
  const dispatch = useDispatch();
  // add to cart function
  const addTocartFunction = (product) => {
    dispatch(addToCart(product));
  };

  const cart = useSelector((state) => state.cart);

  const products = data?.products;
  if (isLoading) {
    return <div>Loading ........</div>;
  }

  return (
    <div>
      <h3>Total Quantity : {cart.totalQuantity}</h3>
      <h2>Product Page</h2>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            style={{
              border: "1px solid zinc",
              minWidth: "200px",
              minHeight: "300px",
              padding: "2px",
              boxShadow: "5px 5px 10px gray",
            }}
            key={product.id}
          >
            {" "}
            <img style={{ width: "100%" }} src={product.thumbnail} alt="" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "12px",
                gap: "4px",
              }}
            >
              <button>Details</button>
              <button onClick={() => addTocartFunction(product)}>
                Add to Cart
              </button>
              <button>Price: ${product.price}</button>
            </div>
          </div>
        ))}
      </div>
      {cart.cartItems.length > 0 && (
        <div>
          <Cart
            cartItems={cart.cartItems}
            totalQuantity={cart.totalQuantity}
            totalPrice={cart.totalPrice}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
