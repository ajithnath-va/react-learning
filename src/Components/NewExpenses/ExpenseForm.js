import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const hideNewExpense = () => {
    props.onCancelButtonClick(false);
  };

  const [titleval, setTitle] = useState("");
  const [amountval, setAmount] = useState("");
  const [dateval, setDate] = useState("");

  // const [userFormInput, setFormInput] = useState({
  //   titleval: "",
  //   amountval: "",
  //   dateval: "",
  // });

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
    // setFormInput({
    //   ...userFormInput,
    //   titleval: e.target.value,
    // });
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
    // setFormInput({
    //   ...userFormInput,
    //   amountval: e.target.value,
    // });
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
    // setFormInput({
    //   ...userFormInput,
    //   dateval: e.target.value,
    // });
  };

  const getFormValues = (eve) => {
    eve.preventDefault();
    const expenseFormData = {
      title: titleval,
      amount: +amountval,
      date: new Date(dateval),
    };

    props.onSaveExpenseForm(expenseFormData);

    props.onCancelButtonClick(false);
    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <form onSubmit={getFormValues}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            className="new-expense__control input"
            onChange={onTitleChange}
            value={titleval}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            className="new-expense__control input"
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
            value={amountval}
          />
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={onDateChange}
            value={dateval}
          />
        </div>

        <div className="new-expense__actions" onClick={hideNewExpense}>
          <button>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
