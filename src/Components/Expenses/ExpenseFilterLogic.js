import ExpenseItem from "./ExpenseItem";
import './ExpenseFilterLogic.css';
import React from 'react';

const ExpenseFilterLogic = (props) => {
  let itemList = props.result.map((e, i) => {
    return <ExpenseItem singleRecord={e} key={e.id} />;
  });

  let filteredContent = (
    <p className="expenses-list__fallback">
      No item available for the year {props.selectedYear}.
    </p>
  );
  if (props.result.length > 0) {
    filteredContent = <ul className="expenses-list">{itemList}</ul>;
  }

  return filteredContent;
};

export default ExpenseFilterLogic;
