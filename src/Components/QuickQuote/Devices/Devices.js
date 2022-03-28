import React from "react";
import QuickQuoteCard from "../QuickQuoteCard";
import QuickQuoteTitle from "../QuickQuoteTitle";
import BringYourOwn from "./BringYourOwn";
import SearchForNewDevices from "./SearchForNewDevices";

const Devices = () => {
  return (
    <div style={{ margin: "25px", "margin-top": "70px" }}>
      <QuickQuoteTitle titlename="Devices" />
      <QuickQuoteCard classname="quickquotediv">
        <div class="container">
          <div class="row">
            <BringYourOwn />
            <SearchForNewDevices />
          </div>
        </div>
      </QuickQuoteCard>
    </div>
  );
};

export default Devices;
