import { useTable, useBlockLayout } from "react-table";
import { useSticky } from "react-table-sticky";
import { COLUMNS } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
import { Styles } from "./TableStyles";
import { useMemo } from "react";
import { format } from "date-fns";
interface IStickyTableProps {}
const StickyTable: React.FC<IStickyTableProps> = ({}) => {
  const columns = useMemo(() => {
    return [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        disableFilters: true,
        sticky: "left",
      },
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "firstName",
        sticky: "left",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "lastName",
        sticky: "left",
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
        Cell: ({ value }: any) => {
          return <span style={{ wordWrap: "break-word" }}>{value}</span>;
        },
      },
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "dateOfBirth",
        Cell: ({ value }: any) => {
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
        sticky: "right",
      },
    ] as any;
  }, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: MOCK_DATA,
      },
      useBlockLayout,
      useSticky
    );

  return (
    <Styles>
      <div
        {...getTableProps()}
        className="table sticky"
        style={{ width: 1000, height: 500 }}
      >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render("Cell")}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};
export default StickyTable;
