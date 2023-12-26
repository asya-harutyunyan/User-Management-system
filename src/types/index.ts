export type InputData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  age: string;
};

export type MyContextType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openModal: (id: string) => void;
  formData: InputData;
  dataArray: InputData[];
  filteredUsers: InputData[];
  searchTerm: string;
  confirmDelete: boolean;
  setDataArray: (data: InputData[]) => void;
  setSearchTerm: any;
  userDetails: InputData;
  editUserInformation: () => void;
  storedData: InputData[];
  setUserDetails: any;
  setFormData: any;
};
