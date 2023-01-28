import { Logo, ResponsiveRow } from "../..";

import styles from "./styles.module.css";

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
  // TODO: Maybe createdAt and dueAt should be a date types and
  // some time service should be used to format them, but for now this solution is fine
  const formattedCreatedAt = createdAt.replaceAll("-", "/");
  const formattedDueAt = dueAt.replaceAll("-", "/");

  return (
    <ResponsiveRow
      leftElement={
        <div className={styles["header__logo"]}>
          <Logo src={logoSrc} />
        </div>
      }
      rightElement={
        <>
          <p>Invoice #: {invoiceId}</p>
          <p>Created: {formattedCreatedAt}</p>
          <p>Due: {formattedDueAt}</p>
        </>
      }
    />
  );
};

export default InvoiceHeader;
