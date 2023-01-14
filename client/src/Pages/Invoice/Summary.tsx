import { Currency } from "../../types";

interface Props {
  total: number;
  vatTotal: number;
  vatRate: number;
  currency: Currency;
}

/**
 * This component represents a summary of an invoice.
 * It includes total sum of prices and VAT row.
 */
const Summary = ({ total, vatTotal, vatRate, currency }: Props) => {
  return (
    <section style={{ textAlign: "right" }}>
      <p style={{ fontWeight: "bold" }}>
        Total: {total} {currency}
      </p>
      <p>
        VAT ({vatRate}%): {vatTotal} {currency}
      </p>
    </section>
  );
};

export default Summary;
