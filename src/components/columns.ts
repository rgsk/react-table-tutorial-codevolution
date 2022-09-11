import { Column } from "react-table";
type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  age: number;
  country: string;
  phone: string;
};
export const COLUMNS: Column<Person>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Date Of Birth",
    accessor: "dateOfBirth",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];
