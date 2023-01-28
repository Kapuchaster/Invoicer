import { LineItem } from "../../../__generated__/operations-types";
import Table from "../../molecules/table";

interface Props {
  lineItems: LineItem[];
  currency: string;
  onRowSelect: (index: number) => void;
}

/**
 * This component represents a table of invoice records.
 */
const InvoiceTable = ({ lineItems, currency, onRowSelect }: Props) => (
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
      {lineItems.map((lineItem, index) => (
        // key should be a lineItem Id, but it's not provided
        <Table.Row
          onClick={() => onRowSelect(index)}
          key={lineItem.description}
        >
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
