import { OldTable } from "../../components";
import Companies from "./Companies";
import Header from "./Header";
import Summary from "./Summary";
import Table from "./Table";

import "./styles.css";

const Invoice = () => {
  return (
    <>
      <OldTable />
      <div>----------------------------------------------------</div>
      <div style={{ padding: "0 0.625rem" }}>
        <Header invoiceId="1234" createdAt="2021-10-11" due="2021-10-11" />
        <div style={{ marginTop: "2rem" }}>
          <Companies
            company="Acme, GmbH."
            fullName="Bob Hans Jens, The Great"
            email="youknowit@star-wars-is-real.pew"
          />
        </div>
      </div>
      <div style={{ marginTop: "3.5rem" }}>
        <Table />
      </div>
      <Summary />
    </>
  );
};

export default Invoice;
