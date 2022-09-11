import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";
import Checkbox from "./Checkbox";
import { useEffect, useRef } from "react";
interface IColumnHidingProps {}
const ColumnHiding: React.FC<IColumnHidingProps> = ({}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns: COLUMNS,
    data: MOCK_DATA,
  });
  const toggleAllInputRef = useRef<HTMLInputElement>(null);
  const { indeterminate, ...toggleAllProps } = getToggleHideAllColumnsProps();
  useEffect(() => {
    if (toggleAllInputRef.current) {
      toggleAllInputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  return (
    <div>
      <div>
        {/* for below checkbox we have a indeterminate state ie. only some columns are visible */}
        {/* react doesn't processes the indeterminate prop, so we have to pass it through ref */}
        <input type="checkbox" ref={toggleAllInputRef} {...toggleAllProps} />{" "}
        Toggle All
      </div>
      <div>
        {allColumns.map((column) => (
          <div key={column.id}>
            {/* we can use Checkbox here too, but since getToggleHiddenProps() doesn't returns the indeterminate state so we can use native html input element too */}
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            <label>{column.render("Header")}</label>{" "}
          </div>
        ))}
      </div>
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
export default ColumnHiding;
