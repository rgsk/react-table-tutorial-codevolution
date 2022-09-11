import { forwardRef, useEffect, useRef } from "react";

const Checkbox = forwardRef<HTMLInputElement>(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = useRef<HTMLInputElement>();
    const resolvedRef: any = ref || defaultRef;
    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);
    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);
export default Checkbox;
