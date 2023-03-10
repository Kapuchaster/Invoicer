import {
  InvoiceCompanies,
  InvoiceHeader,
  InvoiceSummary,
  InvoiceTable
} from "../..";
import { Invoicee } from "../../../types";
import { Invoice as InvoiceType} from "../../../__generated__/operations-types";
import Separator from "../../atoms/separator";

import styles from "./styles.module.css";

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
      <div style={{ padding: "0.625rem" }}>
        <InvoiceHeader
          invoiceId={id}
          createdAt={createdAt}
          dueAt={dueAt}
          logoSrc={invoicee.logo}
        />
        <div className={styles["invoice__companies"]}>
          <InvoiceCompanies
            company={company}
            fullName={fullName}
            email={email}
            invoicee={invoicee}
          />
        </div>
      </div>
      <div className={styles["invoice__table"]}>
        <InvoiceTable
          lineItems={lineItems}
          currency={currency}
          onRowSelect={onRowSelect}
        />
      </div>
      <div style={{ width: "66%", marginLeft: "auto" }}>
        <Separator />
      </div>
      <InvoiceSummary
        total={total}
        vatTotal={vatTotal}
        vatRate={vatRate}
        currency={currency}
      />
    </>
  );
};

export default Invoice;
