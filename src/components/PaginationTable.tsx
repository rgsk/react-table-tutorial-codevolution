import {
  TableInstance,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useTable,
} from "react-table";
import { COLUMNS, Person } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> & { state: UsePaginationState<T> };

interface IPaginationTableProps {}
const PaginationTable: React.FC<IPaginationTableProps> = ({}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns: COLUMNS,
      data: MOCK_DATA,
    },
    usePagination
  ) as TableInstanceWithHooks<Person>;
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
          {page.map((row) => {
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
      <div>
        <span>
          Page: {pageIndex + 1} of {pageOptions.length}{" "}
        </span>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          previous
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationTable;
