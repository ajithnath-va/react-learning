import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const onYearChange = (e) => {
        props.onExpenseFilter(e.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onYearChange} value={props.selectedFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;