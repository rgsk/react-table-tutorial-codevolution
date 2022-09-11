import { useTable } from "react-table";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
interface IBasicTableProps {}
const BasicTable: React.FC<IBasicTableProps> = ({}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({
    columns: GROUPED_COLUMNS,
    data: MOCK_DATA,
  });
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
export default BasicTable;
