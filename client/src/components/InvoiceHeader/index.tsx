import { Logo } from "..";

/**
 * This component represents the InvoiceHeader of an invoice.
 * It includes company logo and dates
 */
const InvoiceHeader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <div>
        Invoice #: 39291 <br />
        Created: 17/07/2021 <br />
        Due: 17/08/2021
      </div>
    </div>
  );
};

export default InvoiceHeader;
