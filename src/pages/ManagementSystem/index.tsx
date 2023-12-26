import { FC } from "react";
import Form from "../../components/Form";
import FindUsers from "../../components/FindUsers";

type ManagementSystemProps = {};

const ManagementSystem: FC<ManagementSystemProps> = () => {
  return (
    <>
      <FindUsers />
      <Form />
    </>
  );
};

export default ManagementSystem;
