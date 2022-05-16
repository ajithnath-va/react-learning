import React, { useState } from "react";
import AddUser from "./MiniProjectComponents/AddUser/AddUser";
import ListUser from "./MiniProjectComponents/ListUser/ListUser";

const AppMiniProject = () => {
  const [userList, setUserList] = useState([]);
  return (
    <>
      <AddUser setUserList={setUserList} userList={userList} />
      <ListUser userList={userList} />
    </>
  );
};

export default AppMiniProject;
