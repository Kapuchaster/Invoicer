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
}: InvoiceType) => (
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
      total={1500.38}
      vatTotal={285.07}
      vatRate={VAT}
      currency={Currency.Euro}
    />
  </>
);

export default Invoice;
