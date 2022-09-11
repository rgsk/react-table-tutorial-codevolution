import {
  useTable,
  useGlobalFilter,
  TableInstance,
  UseGlobalFiltersState,
  UseGlobalFiltersInstanceProps,
} from "react-table";
import { COLUMNS, Person } from "./columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "./table.css";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UseGlobalFiltersInstanceProps<T> & {
    state: UseGlobalFiltersState<T>;
  };

interface IFilteringTableProps {}
const FilteringTable: React.FC<IFilteringTableProps> = ({}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns: COLUMNS,
      data: MOCK_DATA,
    },
    useGlobalFilter
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
      >
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
export default FilteringTable;

interface IGlobalFilterProps {
  filter: any;
  setFilter: (filterValue: any) => void;
}
const GlobalFilter: React.FC<IGlobalFilterProps> = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
