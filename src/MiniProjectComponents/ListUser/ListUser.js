import React from "react";
import Card from "../Card";
import "./ListUser.css";

const ListUser = ({ userList }) => {
  console.log(userList);
  let ls = userList.map((x, i) => {
    return (
      <li key={i}>
        {x.name} ({x.age} years old)
      </li>
    );
  });
  return (
    userList.length > 0 && (
      <Card className="users">
        <ul>{ls}</ul>
      </Card>
    )
  );
};

export default ListUser;
