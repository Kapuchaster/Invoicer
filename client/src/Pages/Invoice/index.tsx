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
      <Header />
      <Companies />
      <Table />
      <Summary />
    </>
  );
};

export default Invoice;
