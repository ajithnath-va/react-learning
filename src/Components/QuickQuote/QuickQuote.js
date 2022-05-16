import React, { useState } from "react";
import CurrentMonthly from "./CurrentMonthlyBill/CurrentMonthlyBill";
import Devices from "./Devices/Devices";
import LinesAndData from "./LinesandData/LinesAndData";
import QuickQuoteTitle from "./QuickQuoteTitle";
import { cartSummaryState } from "./CartSummaryState";
import CartSummaryBuild from "./CartSummary/CartSummary";

const QuickQuote = () => {
  document.body.classList.add("quickquotebody");
  document.body.classList.remove("reactcomplete");
  const [cartSummaryResponse, setcartSummaryResponse] =
    useState(cartSummaryState);

  const unlimitedHandler = (resp) => {
    setcartSummaryResponse((prevState) => ({
      ...prevState,
      unlimited: {
        quantity: resp,
      },
    }));
  };

  console.log(cartSummaryResponse);
  return (
    <div>
      <button className="ant-btn ant-btn-primary">Welcome</button>

      <div class="container">
        <div class="row">
          <div style={{ padding: "10px" }} className="col-md-6">
            <QuickQuoteTitle titlename="Business Mobile" />
            <LinesAndData uval="1" setcartSummaryResponse={setcartSummaryResponse} />
            <Devices />
            <CurrentMonthly />
          </div>
          <div className="col-md-6">
            <h1>Cart Summary</h1>
            <CartSummaryBuild  cartSummaryHandler={cartSummaryResponse}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickQuote;
