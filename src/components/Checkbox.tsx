const Checkbox = ({ indeterminate, ...props }: any) => {
  return (
    <input type="checkbox" indeterminate={String(indeterminate)} {...props} />
  );
};
export default Checkbox;
