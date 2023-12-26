"use client";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.css";
import { InputData } from "../../types";

type UserDetailsProps = {};

const UserDetails: FC<UserDetailsProps> = () => {
  const params = useParams();

  const [userDetails, setUserDetails] = useState<any>("");

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("usersList") || "[]"
    ) as InputData[];

    const userDetailObj = storedData.find((item) => item.id === params.id);

    setUserDetails(userDetailObj);
  }, [params]);

  return (
    <div>
      <h1 className={classes.title}>More information about user</h1>
      <ul className={classes.list}>
        <li className={classes.li}>
          <span className={classes.title_li}>First Name</span>
          {userDetails.firstName}
        </li>
        <li className={classes.li}>
          <span className={classes.title_li}>Last Name</span>
          {userDetails.lastName}
        </li>
        <li className={classes.li}>
          <span className={classes.title_li}>Email</span>
          {userDetails.email}
        </li>
        <li className={classes.li}>
          <span className={classes.title_li}>Country</span>
          {userDetails.country}
        </li>
        <li className={classes.li}>
          <span className={classes.title_li}>Age</span>
          {userDetails.age}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
