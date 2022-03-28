import React from "react";

const QuickQuoteTitle = (props) => {
  return (
    <div>
      <div className="quickquotetitle">{props.titlename}</div>
      <div className="quickquotehorizontal"></div>
    </div>
  );
};

export default QuickQuoteTitle;
