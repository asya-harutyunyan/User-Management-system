"use client";
import { FC, useContext } from "react";
import classes from "./index.module.css";
import MyContext from "../../context";
import { MyContextType } from "../../types";
import User from "../User";

type FormProps = {};

const Form: FC<FormProps> = () => {
  const { handleSubmit, handleChange, formData, dataArray, openModal } =
    useContext<MyContextType>(MyContext);

  return (
    <div className={classes.users_page}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className={classes.submit_button}>
          Submit
        </button>
      </form>
      <ul>
        {dataArray.map((user) => (
          <User key={user.id} item={user} onDelete={openModal} />
        ))}
      </ul>
    </div>
  );
};

export default Form;
