import React from "react";
import QuickQuoteTitle from "../QuickQuote/QuickQuoteTitle";
import "./realquickquote.css";

const HeaderQuickQuote = () => {
  return (
    <div>
      <div>
        <div className="StyledSession">
          <strong>SESSION ID:</strong>2edcc7fa-da7d-473d-89f3-0094d520a8be
        </div>
        <nav className="navStyle">
          <button className="default">Quick Quote</button>
        </nav>
        <div class="flex-container">
          <div>
            <button className="ant-btn ant-btn-primary">Home</button>
          </div>
          <div>
            <button className="ant-btn ant-btn-primary">Save</button>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <QuickQuoteTitle titlename="Comcast Business Mobile" />
        </div>
        <div class="grid-item">2</div>
      </div>
    </div>
  );
};

export default HeaderQuickQuote;
