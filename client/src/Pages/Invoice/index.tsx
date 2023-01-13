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
      <div>--------------------------</div>
      <Header invoiceId="1234" createdAt="2021-10-11" due="2021-10-11" />
      <Companies
        company="Acme, GmbH."
        fullName="Bob Hans Jens, The Great"
        email="youknowit@star-wars-is-real.pew"
      />
      <Table />
      <Summary />
    </>
  );
};

export default Invoice;
