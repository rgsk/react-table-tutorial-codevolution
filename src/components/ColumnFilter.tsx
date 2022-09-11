import { FilterProps, Renderer, UseFiltersColumnProps } from "react-table";
import { Person } from "./columns";

const ColumnFilter: Renderer<FilterProps<Person>> = ({ column }) => {
  const { filterValue, setFilter } =
    column as unknown as UseFiltersColumnProps<Person>;
  return (
    <span>
      Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
export default ColumnFilter;
