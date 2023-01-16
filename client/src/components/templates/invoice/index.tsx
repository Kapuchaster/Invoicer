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
  const total = lineItems.reduce(
    (total, lineItem) => lineItem.price + total,
    0
  );

  const vatTotal = +((total * VAT) / 100).toFixed(2);

  return (
    <>
      <div style={{ padding: "0 0.625rem" }}>
        <Header invoiceId={id} createdAt={createdAt} dueAt={dueAt} />
        <div className="invoice__companies--container">
          <Companies company={company} fullName={fullName} email={email} />
        </div>
      </div>
      <div className="invoice__table--container">
        <InvoiceTable lineItems={lineItems} currency={Currency.Euro} />
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
