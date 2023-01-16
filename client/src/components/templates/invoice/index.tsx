import { useContext } from "react";
import { ModalContext } from "../../../HOC/WithModal";
import { Currency, InvoiceType } from "../../../types";
import Separator from "../../atoms/separator";
import Companies from "../../organisms/companies";
import Header from "../../organisms/header";
import InvoiceTable from "../../organisms/InvoiceTable";
import Summary from "../../organisms/summary";

import "./styles.css";

//TODO move it to config file
const VAT = 19;

const Invoice = ({
  id,
  email,
  fullName,
  company,
  createdAt,
  dueAt,
  lineItems,
}: InvoiceType) => {
  const modalContext = useContext(ModalContext);

  const total = lineItems.reduce(
    (total, lineItem) => lineItem.price + total,
    0
  );

  const vatTotal = +((total * VAT) / 100).toFixed(2);

  // This function will open modal and edit line item of the given index
  // NOTE: The edition should NOT be based on index, rather line item id (but it is not provided)
  const handleRowSelect = (lineItemIndex: number) => {
    modalContext.open(<div>{lineItems[lineItemIndex].description}</div>);
  };

  return (
    <>
      <div style={{ padding: "0 0.625rem" }}>
        <Header invoiceId={id} createdAt={createdAt} dueAt={dueAt} />
        <div className="invoice__companies--container">
          <Companies company={company} fullName={fullName} email={email} />
        </div>
      </div>
      <div className="invoice__table--container">
        <InvoiceTable
          lineItems={lineItems}
          currency={Currency.Euro}
          onRowSelect={handleRowSelect}
        />
      </div>
      <div style={{ width: "66%", marginLeft: "auto" }}>
        <Separator />
      </div>
      <Summary
        total={total}
        vatTotal={vatTotal}
        vatRate={VAT}
        currency={Currency.Euro}
      />
    </>
  );
};

export default Invoice;
