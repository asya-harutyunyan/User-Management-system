"use client";
import { FC, useContext } from "react";
import { MyContextType } from "../../types";
import User from "../User";
import MyContext from "../../context";
import classes from "./index.module.css";

type FindUsersProps = {};

const FindUsers: FC<FindUsersProps> = () => {
  const { openModal, setSearchTerm, searchTerm, filteredUsers } =
    useContext<MyContextType>(MyContext);

  return (
    <div>
      <h1 className={classes.title}>Search users</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      {filteredUsers.map((user) => (
        <User key={user.id} item={user} onDelete={openModal} />
      ))}
    </div>
  );
};

export default FindUsers;
