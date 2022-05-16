import React from "react";
import Card from "../Card";
import Button from "../Button";
import "./Validations.css";

const Validations = ({ errorList, setErrorList }) => {
  let errLs = errorList.map((y, i) => {
    return (
      <div key={i}>
        <label key={i}>{y.ERRORTEXT}</label>
        <br />
      </div>
    );
  });

  const buttonOnclick = () => {
    setErrorList([]);
  };
  return (
    errLs.length > 0 && (
      <div className="backdrop">
        <Card className="modal">
          <header className="header">
            <h2>Errors!</h2>
          </header>
          <div className="content">{errLs}</div>
          <footer className="actions">
            <Button buttonOnclick={buttonOnclick}>Okay</Button>
          </footer>
        </Card>
      </div>
    )
  );
};

export default Validations;
