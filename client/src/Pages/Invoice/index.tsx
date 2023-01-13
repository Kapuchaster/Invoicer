import { Companies, InvoiceHeader, OldTable, Table } from "../../components";

const Invoice = () => {
  return (
    <>
      <OldTable />
      <div>--------------------------</div>
      <InvoiceHeader />
      <Companies />
      <Table />
    </>
  );
};

export default Invoice;
