import Body from "./Body";
import Cell from "./Cell";
import Header from "./Header";
import Row from "./Row";

import "./styles.css";

interface Props {
  children: JSX.Element[];
}

const Table = ({ children }: Props) => {
  return (
    <table cellPadding="0" cellSpacing="0">
      {children}
    </table>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
