"use client";
import React, { FC, useCallback, useContext } from "react";
import classes from "./index.module.css";
import { InputData, MyContextType } from "../../types";
import { Link } from "react-router-dom";
import MyContext from "../../context";

type UserProps = {
  item: InputData;
  onDelete: (id: string) => void;
};

const User: FC<UserProps> = ({ onDelete, item }) => {
  const { storedData, setFormData, setDataArray } =
    useContext<MyContextType>(MyContext);

  const editUserInformation = useCallback(() => {
    const userDetailIndex = storedData.findIndex((i) => i.id === item.id);

    if (userDetailIndex !== -1) {
      const updatedDataArray = [...storedData];
      updatedDataArray[userDetailIndex] = {
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        country: item.country,
        age: item.age,
      };

      setDataArray(updatedDataArray);
      setFormData({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        country: item.country,
        age: item.age,
      });

      localStorage.setItem("usersList", JSON.stringify(updatedDataArray));
    }
  }, [item, setFormData, storedData, setDataArray]);

  return (
    <div>
      <li className={classes.list_item}>
        <div>
          <span className={classes.title}>First Name</span>
          {item.firstName}
          <br />
          <span className={classes.title}>Last Name</span>
          {item.lastName}
          <br />
          <span className={classes.title}>Email</span>
          {item.email}
        </div>
        <div className={classes.buttons}>
          <Link to={`/users/${item.id}`} className={classes.link}>
            See user details
          </Link>
          <button className={classes.button} onClick={editUserInformation}>
            Edit
          </button>
          <button className={classes.button} onClick={() => onDelete(item.id)}>
            Delete user
          </button>
        </div>
      </li>
    </div>
  );
};

export default User;
