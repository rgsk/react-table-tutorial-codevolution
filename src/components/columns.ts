import { format } from "date-fns";
import { Column } from "react-table";
export type Person = {
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
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Date Of Birth",
    Footer: "Date Of Birth",
    accessor: "dateOfBirth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy") as any;
    },
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];
export const GROUPED_COLUMNS: Column<Person>[] = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
