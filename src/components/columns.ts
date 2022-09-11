import { format } from "date-fns";
import { Column, UseFiltersColumnOptions } from "react-table";
import ColumnFilter from "./ColumnFilter";
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
export const COLUMNS: (Column<Person> & UseFiltersColumnOptions<Person>)[] = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "firstName",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "lastName",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Date Of Birth",
    Footer: "Date Of Birth",
    accessor: "dateOfBirth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy") as any;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
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
