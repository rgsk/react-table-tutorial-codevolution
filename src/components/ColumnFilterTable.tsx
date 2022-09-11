import {
  useTable,
  TableInstance,
  useFilters,
  UseFiltersInstanceProps,
  HeaderGroup,
  UseFiltersColumnProps,
} from "react-table";
import { COLUMNS, Person } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
import ColumnFilter from "./ColumnFilter";
import { useMemo } from "react";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseFiltersInstanceProps<T>;

interface IColumnFilterTableProps {}
const ColumnFilterTable: React.FC<IColumnFilterTableProps> = ({}) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable(
    {
      columns: COLUMNS,
      data: MOCK_DATA,
      defaultColumn: defaultColumn as any,
    },
    useFilters
  ) as TableInstanceWithHooks<Person>;

  return (
    <div>
      <div
        style={{
          padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((_column) => {
                const column = _column as HeaderGroup<Person> &
                  UseFiltersColumnProps<Person>;
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                );
              })}
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
export default ColumnFilterTable;
