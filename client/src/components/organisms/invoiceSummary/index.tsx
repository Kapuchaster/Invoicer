import styles from "./styles.module.css";

interface Props {
  total: number;
  vatTotal: number;
  vatRate: number;
  currency: string;
}

/**
 * This component represents a summary of an invoice.
 * It includes total sum of prices and VAT row.
 */
const InvoiceSummary = ({ total, vatTotal, vatRate, currency }: Props) => {
  return (
    <section className={styles["summary"]}>
      <p className={styles["summary__total"]}>
        Total: {total} {currency}
      </p>
      <p className={styles["summary__vat"]}>
        VAT ({vatRate}%): {vatTotal} {currency}
      </p>
    </section>
  );
};

export default InvoiceSummary;
