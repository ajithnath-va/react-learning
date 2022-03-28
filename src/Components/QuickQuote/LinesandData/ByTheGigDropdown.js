import React from "react";
import QuantityDropDown from "../Quantity";

const ByTheGig = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <select className="quickquotebythegig">
            <option value="0">By the Gig</option>
          </select>
        </div>
        <div class="col-md-6" style={{ "padding-top": "20px" }}>
          <QuantityDropDown classname="quickquotequantity" />
        </div>
      </div>
    </div>
  );
};

export default ByTheGig;
