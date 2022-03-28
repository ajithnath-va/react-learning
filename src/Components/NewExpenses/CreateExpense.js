import React, { useState } from "react";
import "./CreateExpense.css";
import ExpenseForm from "./ExpenseForm";

const CreateExpense = (props) => {

  const [showNewExpense, setShowNewExpense] = useState(false);

  const onShowNewExpense = () => {
    setShowNewExpense(true);
  }

  const cancelbuttonHideExpense = (event) =>{
    setShowNewExpense(event);
  }

  const saveFormData = (saveExpenseProps) => {
    const fromChildData = {
      ...saveExpenseProps,
      id: Math.random().toString(),
    };

    props.onSaveExpenses(fromChildData);
    // console.log(fromChildData);
  };

  return (
    <div className="new-expense">
      {showNewExpense ? <ExpenseForm onSaveExpenseForm={saveFormData} onCancelButtonClick={cancelbuttonHideExpense} /> : <button onClick={onShowNewExpense}>Show New Expense</button>}
    </div>
  );
};

export default CreateExpense;
