import React, { useState } from "react";
import QuickQuoteSection from "../QuickQuoteSection";
import QuickQuoteTitle from "../QuickQuoteTitle";
import QuantityDropDown from "../Quantity";
import ByTheGig from "./ByTheGigDropdown";
import QuickQuoteCard from "../QuickQuoteCard";

const LinesAndData = (props) => {

  // const quantityUnlimitedHandler = (event) => {
  //   props.UnlimitedValue(event);
  // };
 console.log('linesanddata', props);
  return (
    <div style={{ margin: "25px" }}>
      <QuickQuoteTitle titlename="Lines and Data" />
      <QuickQuoteSection sectionname="Lines" />

      <QuickQuoteCard classname="quickquotediv">
        <div class="container">
          <div class="row">
            <div className="col-md-6">
              <h4 className="quickquoteunlimited">Unlimited</h4>
            </div>
            <div className="col-md-6">
              <QuantityDropDown
                classname="quickquotequantity"
                setcartSummaryResponse={props.setcartSummaryResponse}
              />
            </div>
          </div>
        </div>
      </QuickQuoteCard>
      <ByTheGig />
    </div>
  );
};

export default LinesAndData;
