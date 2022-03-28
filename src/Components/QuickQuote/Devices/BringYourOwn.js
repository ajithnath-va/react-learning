import React from "react";
import QuantityDropDown from "../Quantity";
import QuickQuoteSection from "../QuickQuoteSection";

const BringYourOwn = () => {
  return (
    <div class="col-md-6">
      <QuickQuoteSection sectionname="Bring Your Own" />
      <div class="row">
        <div class="col-md-2">
          <div style={{ "margin-top": "5px" }}>Phone</div>
        </div>
        <div class="col-md-6">
          <QuantityDropDown classname="quickquotequantity" />
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  );
};

export default BringYourOwn;
