import { useContext, useEffect, useState } from "react";
import { Invoice as InvoiceTemplate } from "../../components";
import LineItemEditForm from "../../components/organisms/lineItemEditForm";
import config from "../../config.json";
import { ModalContext } from "../../HOC/withModal";
import { InvoiceType, LineItem } from "../../types";

export interface Props {
  invoice: InvoiceType;
}

const Invoice = ({ invoice }: Props) => {
  const modalContext = useContext(ModalContext);

  /**
   * This is very basic idea of editing lineItems.
   * A better solution could be to load incoming data in a Store
   * and edit them with actions, however it would be too heave for such
   * a simple App
   */
  const [lineItems, setLineItems] = useState<LineItem[]>([]);

  useEffect(() => {
    setLineItems(invoice.lineItems);
  }, [invoice]);

  const editLineItem = (
    lineItemIndex: number,
    description: string,
    price: number
  ) => {
    const newLineItems = [...lineItems];
    newLineItems[lineItemIndex] = {
      description,
      price,
    };
    setLineItems(newLineItems);
  };

  // This function will open modal and edit line item of the given index
  // NOTE: The edition should NOT be based on index, rather line item id (but it is not provided)
  const handleRowSelect = (lineItemIndex: number) => {
    const { description, price } = lineItems[lineItemIndex];
    modalContext.open(
      <LineItemEditForm
        description={description}
        price={price}
        onChange={(newDescription, newPrice) => {
          editLineItem(lineItemIndex, newDescription, newPrice);
          modalContext.close();
        }}
      />
    );
  };

  return (
    <InvoiceTemplate
      invoicee={config.invoicee}
      invoice={{ ...invoice, lineItems: lineItems }}
      vatRate={config.vatRate}
      currency={config.currency}
      onRowSelect={handleRowSelect}
    />
  );
};

export default Invoice;
