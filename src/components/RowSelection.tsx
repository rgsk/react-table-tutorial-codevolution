import {
  useTable,
  useRowSelect,
  TableInstance,
  UseRowSelectInstanceProps,
} from "react-table";
import { COLUMNS, Person } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
import Checkbox from "./Checkbox";
import { useEffect, useMemo } from "react";
export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseRowSelectInstanceProps<T>;

interface IRowSelectionProps {}
const RowSelection: React.FC<IRowSelectionProps> = ({}) => {
  // first 10 rows
  const data = useMemo(() => MOCK_DATA.slice(0, 10), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns: COLUMNS,
      data: data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }: any) => {
              return <Checkbox {...getToggleAllRowsSelectedProps()} />;
            },
            Cell: ({ row }: any) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  ) as TableInstanceWithHooks<Person>;
  useEffect(() => {
    console.log(selectedFlatRows);
  }, [selectedFlatRows]);
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default RowSelection;
