import { Invoice as InvoiceTemplate } from "../../components";
import { useGetInvoice } from "../../hooks/useGetInvoice";

//TODO move it to config file
const VAT = 19;

const Invoice = () => {
  const { data, loading, error } = useGetInvoice();

  if (loading) return <p>Loading</p>;
  if (error) return <p>Data Error</p>;
  if (!data) return <p>No Data</p>;

  return (
    <InvoiceTemplate
      id={data.invoice.id}
      email={data.invoice.email}
      fullName={data.invoice.fullName}
      company={data.invoice.company}
      createdAt={data.invoice.createdAt}
      dueAt={data.invoice.dueAt}
      lineItems={data.invoice.lineItems}
    />
  );
};

export default Invoice;
