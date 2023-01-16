import { Currency, InvoiceType } from "../../types";
import Table from "../molecules/table";

interface Props {
  lineItems: InvoiceType["lineItems"];
  currency: Currency;
}

/**
 * This component represents a table of invoice records.
 */
const InvoiceTable = ({ lineItems, currency }: Props) => (
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
      {lineItems.map((lineItem) => (
        // key should be a lineItem Id, but it's not provided
        <Table.Row onClick={() => {}} key={lineItem.description}>
          <Table.Cell>{lineItem.description}</Table.Cell>
          <Table.Cell
            alignRight
            disableTextBreak
          >{`${lineItem.price} ${currency}`}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default InvoiceTable;
