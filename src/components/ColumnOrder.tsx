import {
  TableInstance,
  useColumnOrder,
  UseColumnOrderInstanceProps,
  useTable,
} from "react-table";
import { COLUMNS, Person } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseColumnOrderInstanceProps<T>;

interface IColumnOrderProps {}
const ColumnOrder: React.FC<IColumnOrderProps> = ({}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    setColumnOrder,
  } = useTable(
    {
      columns: COLUMNS,
      data: MOCK_DATA,
    },
    useColumnOrder
  ) as TableInstanceWithHooks<Person>;
  return (
    <div>
      <button
        onClick={() => {
          setColumnOrder(["lastName", "firstName", "id"]);
        }}
      >
        Change Order
      </button>
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
export default ColumnOrder;
