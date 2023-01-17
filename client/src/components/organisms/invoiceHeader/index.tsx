import { Logo, ResponsiveRow } from "../..";

import "./styles.css";

// TODO createdAt and due should be Dates
interface Props {
  invoiceId: string;
  createdAt: string;
  dueAt: string;
  logoSrc: string;
}

/**
 * This component represents a header of an invoice.
 * It includes company logo and dates
 */
const InvoiceHeader = ({ invoiceId, createdAt, dueAt, logoSrc }: Props) => {
  // TODO Convert Date format!
  return (
    <ResponsiveRow
      leftElement={
        <div className="header__logo">
          <Logo src={logoSrc} />
        </div>
      }
      rightElement={
        <>
          <p>Invoice #: {invoiceId}</p>
          <p>Created: {createdAt}</p>
          <p>Due: {dueAt}</p>
        </>
      }
    />
  );
};

export default InvoiceHeader;
