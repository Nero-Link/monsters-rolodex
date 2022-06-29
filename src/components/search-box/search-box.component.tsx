import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.css";

// STRING
// const name: string = "string";
// FUNCTION
// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};
// INTERFACE
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }
//TYPE
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: (a: string) => void;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  // ===
  // func: ChangeEventHandler;
};

// type ItalianAddress = {
//   street: string;
//   region: string;
// };

// type CanadianAddress = {
//   street: string;
//   province: string;
// };

// type USAddress = {
//   street: string;
//   state: string;
// };
// // UNION
// type Address = CanadianAddress | USAddress | ItalianAddress;

// const Address: Address = {
//   street: "abcd",
//   province: "ABC",
//   state: "ABC",
//   region: "ABC",
// };

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
