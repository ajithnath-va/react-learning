import React from "react";
import QuickQuoteSection from "../QuickQuoteSection";
import DevicesDropdown from "./DevicesDropdown";

const SearchForNewDevices = () => {
  return (
    <div class="col-md-6">
      <QuickQuoteSection sectionname="Search for New Devices" />
      <DevicesDropdown />
    </div>
  );
};

export default SearchForNewDevices;