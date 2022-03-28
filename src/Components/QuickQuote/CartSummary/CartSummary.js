import React from "react";

const CartSummaryBuild = (props) => {
  return (
    <div>
      {Object.keys(props.cartSummaryHandler.unlimited).map((key, i) => (
        <p key={i}>
          <span>Unlimited Lines: {props.cartSummaryHandler.unlimited[key]}</span>
        </p>
      ))}
    </div>
  );
};

export default CartSummaryBuild;
