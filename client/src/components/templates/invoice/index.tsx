import { Currency } from "../../../types";
import Separator from "../../atoms/separator";
import Companies from "../../organisms/companies";
import Header from "../../organisms/header";
import InvoiceTable from "../../organisms/InvoiceTable";
import Summary from "../../organisms/summary";

import "./styles.css";

//TODO move it to config file
const VAT = 19;

const Invoice = () => {
  return (
    <>
      <div style={{ padding: "0 0.625rem" }}>
        <Header invoiceId="1234" createdAt="2021-10-11" due="2021-10-11" />
        <div className="invoice__companies--container">
          <Companies
            company="Acme, GmbH."
            fullName="Bob Hans Jens, The Great"
            email="youknowit@star-wars-is-real.pew"
          />
        </div>
      </div>
      <div className="invoice__table--container">
        <InvoiceTable />
      </div>
      <Separator />
      <Summary
        total={1500.38}
        vatTotal={285.07}
        vatRate={VAT}
        currency={Currency.Euro}
      />
    </>
  );
};

export default Invoice;