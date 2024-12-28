import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartItem, removeFromCart } from "../slice/cartSlice";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCart = () => {
    dispatch(clearCartItem());
  };
  return (
    <div>
      {" "}
      <h2 style={{ textAlign: "center" }}>
        {" "}
        <button onClick={() => nav("/product")}>Product Page </button>
        <button onClick={clearCart}>Clear Cart </button>
      </h2>
      <h2 style={{ textAlign: "center", fontFamily: "cursive" }}>Cart Page</h2>
      <div>
        {data.totalQuantity >= 1 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {data?.cartItems?.map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  justifyItems: "center",
                }}
                key={item.id}
              >
                <h4 style={{ color: "blue" }}>{item.title}</h4>
                <img
                  style={{ border: "1px solid black" }}
                  width={100}
                  src={item.thumbnail}
                  alt=""
                />
                <p>Qty{item.cartQuantity}</p>
                <p>{item.price}</p>
                <p>{item.cartQuantity * item.price}</p>
                <div>
                  <button onClick={() => deleteItem(item.id)}>remove</button>
                </div>
              </div>
            ))}

            <div>
              {" "}
              <h2>Total Price : ${data.totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center", color: "blue" }}>
            {" "}
            Empty Cart ........{" "}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
