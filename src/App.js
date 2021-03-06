import React, { useState } from "react";
import ExpenseData from "./Components/Expenses/ExpenseList";
import { expenses } from "./Components/Expenses/Expenses";
import CreateExpenses from "./Components/NewExpenses/CreateExpense";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
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
            <Route
              path="/"
              element={
                <div>
                  <ExpenseData items={expenseList} />
                  <CreateExpenses onSaveExpenses={saveExpenseData} />
                </div>
              }
            />
            {/* <Route path="quickquote" element={<QuickQuote />} /> */}
          </Routes>
        </Router>
      }
    </div>
  );
};

export default App;
