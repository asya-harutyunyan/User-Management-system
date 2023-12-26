"use client";
import { FC, createContext, useEffect, useState } from "react";
import { InputData, MyContextType } from "../types";
import Modal from "../components/ModalForDelete";

const MyContext = createContext<MyContextType | any>(null);

export const MyProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<InputData[]>([]);
  const [formData, setFormData] = useState<InputData>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    age: "",
  });
  const [dataArray, setDataArray] = useState<InputData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
      id: dataArray.length.toString(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDataArray((prevDataArray) => [...prevDataArray, formData]);
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      age: "",
    });
  };

  useEffect(() => {
    if (dataArray.length) {
      localStorage.setItem("usersList", JSON.stringify(dataArray));
    }
  }, [dataArray]);

  useEffect(() => {
    const userList = localStorage.getItem("usersList");
    if (userList) {
      const parsedData = JSON.parse(userList);
      setDataArray(Array.isArray(parsedData) ? parsedData : []);
    }
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredUsers(
        dataArray.filter(
          (user) =>
            user.firstName.includes(searchTerm) ||
            user.lastName.includes(searchTerm) ||
            user.email.includes(searchTerm)
        )
      );
    }
  }, [searchTerm, dataArray]);

  const openModal = (id: string) => {
    setConfirmDelete(true);
    setUserIdToDelete(id);
  };

  const closeModal = () => {
    setConfirmDelete(false);
  };

  const deleteConfirmation = (idToDelete: string) => {
    const updatedDataArray = dataArray.filter((item) => item.id !== idToDelete);

    setDataArray(updatedDataArray);

    const updatedFilteredUsers = filteredUsers.filter(
      (item) => item.id !== idToDelete
    );
    setFilteredUsers(updatedFilteredUsers);

    if (updatedDataArray.length === 0) {
      localStorage.removeItem("usersList");
    }

    closeModal();
    setUserIdToDelete(null);
  };

  const storedData = JSON.parse(
    localStorage.getItem("usersList") || "[]"
  ) as InputData[];

  return (
    <MyContext.Provider
      value={{
        handleSubmit,
        handleChange,
        formData,
        dataArray,
        openModal,
        setDataArray,
        setSearchTerm,
        searchTerm,
        filteredUsers,
        confirmDelete,
        closeModal,
        userIdToDelete,
        storedData,
        setFormData,
      }}
    >
      {children}
      {confirmDelete && (
        <Modal
          confirm={deleteConfirmation}
          modalClose={closeModal}
          userId={userIdToDelete}
        />
      )}
    </MyContext.Provider>
  );
};

export default MyContext;
