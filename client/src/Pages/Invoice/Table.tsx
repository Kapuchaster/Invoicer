import { Table } from "../../components";

/**
 * This component represents a table of invoice records.
 */
const InvoiceHeader = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.Cell isHeaderCell>Item</Table.Cell>
        <Table.Cell isHeaderCell alignRight>
          Price
        </Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Death Star</Table.Cell>
        <Table.Cell alignRight>1100,39 EUR</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Star destroyer</Table.Cell>
        <Table.Cell alignRight>399,99 EUR</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default InvoiceHeader;
