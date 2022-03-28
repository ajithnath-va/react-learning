import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React, { useState } from "react";
import ExpenseData from "./Components/Expenses/ExpenseList";
import { expenses } from "./Components/Expenses/Expenses";
import CreateExpenses from "./Components/NewExpenses/CreateExpense";
import './Components/QuickQuote/css/quickquote.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import QuickQuote from "./Components/QuickQuote/QuickQuote";

const AppQuickQuote = () => {
  const [expenseList, setExpenseList] = useState(expenses);

  const saveExpenseData = (props) => {
    console.log(props);
    setExpenseList([props, ...expenseList]);
  };

  return (
    <div>
      {
        <Router>
          <Routes>
            {/* <Route
              path="/"
              element={
                <div>
                  <ExpenseData items={expenseList} />
                  <CreateExpenses onSaveExpenses={saveExpenseData} />
                </div>
              }
            /> */}
            <Route path="/" element={<QuickQuote />} />
          </Routes>
        </Router>
      }
    </div>
  );
};

export default AppQuickQuote;
