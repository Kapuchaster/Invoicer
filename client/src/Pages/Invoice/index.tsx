import { Invoice as InvoiceTemplate, OldTable } from "../../components";
import { useGetInvoice } from "../../hooks/useGetInvoice";

type InvoiceType = {
  id: string;
  email: string;
  fullName: string;
  company: string;
  createdAt: string;
  dueAt: string;
  lineItems: { description: string; price: string }[];
};

//TODO move it to config file
const VAT = 19;

const Invoice = () => {
  const { data, loading, error } = useGetInvoice();
  console.log(data, loading, error);

  return (
    <>
      <OldTable />
      <div>----------------------------------------------------</div>
      <InvoiceTemplate />
    </>
  );
};

export default Invoice;
