import { FilterProps, Renderer, UseFiltersColumnProps } from "react-table";
import { Person } from "./columns";
import { useAsyncDebounce } from "react-table";
import { useEffect, useState } from "react";

const ColumnFilter: Renderer<FilterProps<Person>> = ({ column }) => {
  const { filterValue, setFilter } =
    column as unknown as UseFiltersColumnProps<Person>;
  const [value, setValue] = useState(filterValue);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  //   useEffect(() => {
  //     console.log({ value, filterValue });
  //   }, [value, filterValue]);
  return (
    <span>
      Search:{" "}
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
export default ColumnFilter;
