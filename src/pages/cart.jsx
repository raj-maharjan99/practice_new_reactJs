import React from "react";
import { useSelector } from "react-redux";

const Cart = ({ cartItems, totalQuantity, totalPrice }) => {
  console.log(cartItems);

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <h3>Cart Items</h3>
        <div>
          {cartItems?.map((item) => (
            <>
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "center",
                }}
              >
                {" "}
                <img src={item.thumbnail} alt="" /> <p>Qty : {item.quantity}</p>
                <p>price: {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <h3>Total AMount: ${totalPrice.toFixed(2)}</h3>
        <h3>Tax 10% : ${((totalPrice * 10) / 100).toFixed(2)}</h3>
        <h3>
          Total Price: ${(totalPrice + (totalPrice * 10) / 100).toFixed(2)}
        </h3>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
