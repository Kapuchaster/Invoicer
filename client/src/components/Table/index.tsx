import Body from "./Body";
import Cell from "./Cell";
import Header from "./Header";
import Row from "./Row";

import "./index.css";

const Table = () => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <Header>
        <Row>
          <Cell>Item</Cell>
          <Cell>Price</Cell>
        </Row>
      </Header>
      <Body>
        <Row>
          <Cell>Death Star</Cell>
          <Cell>1100,39 EUR</Cell>
        </Row>
        <Row>
          <Cell>Star destroyer</Cell>
          <Cell>399,99 EUR</Cell>
        </Row>
        <Row>
          <Cell>Total: 1500,38 EUR</Cell>
        </Row>
        <Row>
          <Cell>VAT (19%): 285,07 EUR</Cell>
        </Row>
      </Body>
    </table>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
