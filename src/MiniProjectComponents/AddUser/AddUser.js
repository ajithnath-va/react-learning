import React, { useRef, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import Validations from "../Validations/Validations";
import "./AddUser.css";

const AddUser = ({ setUserList, userList }) => {
  const aboutUserRef = useRef();
  const [usernameText, setUserNameText] = useState("");
  const [userAge, setUserAge] = useState("");
  const [errorList, setErrorList] = useState([]);

  const setUserName = (e) => {
    setUserNameText(e.target.value);
  };

  const setAge = (et) => {
    setUserAge(et.target.value);
  };
  const buttonOnclick = (e) => {
    e.preventDefault();

    const errLocal = [];
    if (usernameText.trim().length <= 0) {
      const err = {
        id: "USERNAME",
        ERRORTEXT: "Username is missing",
      };
      errLocal.push(err);
    }

    if (userAge == "" || userAge === 0) {
      const errAge = {
        id: "AGE",
        ERRORTEXT: "Age is missing",
      };
      errLocal.push(errAge);
    }

    if (+userAge < 0) {
      const errAge = {
        id: "AGE-NEGATIVE",
        ERRORTEXT: "Age should not be in negative",
      };
      errLocal.push(errAge);
    }

    if (aboutUserRef.current.value.trim() == "") {
      const errAboutUser = {
        id: "ABOUT-USER",
        ERRORTEXT: "About User is missing",
      };
      errLocal.push(errAboutUser);
    }

    setErrorList(errLocal);

    if (errLocal.length === 0) {
      const buildUserArray = {
        name: usernameText,
        age: userAge,
        aboutuser: aboutUserRef.current.value,
        id: Math.random().toString(),
      };
      console.log(userList);

      setUserList([...userList, buildUserArray]);

      setUserNameText("");
      setUserAge("");
    }
  };
  return (
    <>
      <Validations errorList={errorList} setErrorList={setErrorList} />
      <Card className="input">
        <label>Username</label>
        <input type="text" value={usernameText} onChange={setUserName} />
        <br />
        <label>Age (Years)</label>
        <input type="number" onChange={setAge} value={userAge} />
        <br />
        <label>About User</label>
        <input type="text" ref={aboutUserRef} />
        <Button buttonOnclick={buttonOnclick}>Add User</Button>
      </Card>
    </>
  );
};

export default AddUser;
