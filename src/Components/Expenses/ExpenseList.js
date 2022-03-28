import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React,{ useState } from "react";
import ExpenseFilterLogic from "./ExpenseFilterLogic";

const ExpenseList = (props) => {
  document.body.classList.remove('quickquotebody');
  document.body.classList.add('reactcomplete');

  const [expensefilter, setExpenseFilter] = useState("2020");
  const onExpFilter = (expFilterValue) => {
    setExpenseFilter(expFilterValue);
  };

  console.log(expensefilter);

  const filters = [
    (x) => x.date.getFullYear().toString().includes(expensefilter),
  ];

  const results = props.items.filter((o) => filters.every((fn) => fn(o)));
  // const result = props.items.filter(exp => {
  //   return exp.date.getFullYear().toString() ===  expensefilter;
  // });
  console.log(results.length);

  return (
    <div>
      <Card className="expenses">
        {/* <Link to="/quickquote" style={{color:"white"}}>Quick Quote</Link> */}
        <ExpensesFilter
          selectedFilter={expensefilter}
          onExpenseFilter={onExpFilter}
        />

        {/* {filteredContent} */}
        <ExpenseFilterLogic result={results} selectedYear={expensefilter} />
      </Card>
    </div>
  );
};

export default ExpenseList;
