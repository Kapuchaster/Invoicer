import { ResponsiveRow } from "../..";
import { Invoicee } from "../../../types";

interface Props {
  invoicee: Invoicee;
  company: string;
  fullName: string;
  email: string;
}

/**
 * This component represents companies of an invoice.
 * It includes details of the invoicing and receiving companies
 */
const InvoiceCompanies = ({ company, fullName, email, invoicee }: Props) => {
  return (
    <ResponsiveRow
      leftElement={
        <>
          <p>{invoicee.name}</p>
          <p>{invoicee.address}</p>
          <p>{invoicee.city}</p>
        </>
      }
      rightElement={
        <>
          <p>{company}</p>
          <p>{fullName}</p>
          <p>{email}</p>
        </>
      }
    />
  );
};

export default InvoiceCompanies;
