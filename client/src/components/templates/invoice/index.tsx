import { Invoicee, InvoiceType } from "../../../types";
import Separator from "../../atoms/separator";
import Companies from "../../organisms/companies";
import Header from "../../organisms/header";
import InvoiceTable from "../../organisms/InvoiceTable";
import Summary from "../../organisms/summary";

import "./styles.css";

interface Props {
  invoicee: Invoicee;
  invoice: InvoiceType;
  vatRate: number;
  currency: string;
  onRowSelect: (index: number) => void;
}

const Invoice = ({
  invoice,
  invoicee,
  vatRate,
  currency,
  onRowSelect,
}: Props) => {
  const { id, createdAt, dueAt, company, fullName, email, lineItems } = invoice;
  const total = +invoice.lineItems
    .reduce((total, lineItem) => lineItem.price + total, 0)
    .toFixed(2);
  const vatTotal = +((total * vatRate) / 100).toFixed(2);

  return (
    <>
      <div style={{ padding: "0 0.625rem" }}>
        <Header
          invoiceId={id}
          createdAt={createdAt}
          dueAt={dueAt}
          logoSrc={invoicee.logo}
        />
        <div className="invoice__companies">
          <Companies
            company={company}
            fullName={fullName}
            email={email}
            invoicee={invoicee}
          />
        </div>
      </div>
      <div className="invoice__table">
        <InvoiceTable
          lineItems={lineItems}
          currency={currency}
          onRowSelect={onRowSelect}
        />
      </div>
      <div style={{ width: "66%", marginLeft: "auto" }}>
        <Separator />
      </div>
      <Summary
        total={total}
        vatTotal={vatTotal}
        vatRate={vatRate}
        currency={currency}
      />
    </>
  );
};

export default Invoice;
