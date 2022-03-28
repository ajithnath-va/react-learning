import React from "react";
import QuantityDropDown from "../Quantity";

const DevicesDropdown = (props) => {
  return (
    <div class="container" style={{ "padding-left": "0px" }}>
      <div class="row">
        <div class="col-md-6">
          <select className="quickquotedevicesearch">
            <option value="0">Typehead Search</option>
            <option value="1">Recurring Payment</option>
          </select>

          <select className="quickquotedevicesearch" style={{ "margin-top": "20px" }}>
            <option value="0">Payment Options</option>
            <option value="1">Full Payment</option>
            <option value="2">Recurring Payment</option>
          </select>
        </div>
        <div class="col-md-6">
          <QuantityDropDown classname="quickquotequantity" />
        </div>
      </div>
      
    </div>
  );
};

export default DevicesDropdown;
