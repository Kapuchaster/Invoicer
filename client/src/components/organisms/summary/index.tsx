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
const Summary = ({ total, vatTotal, vatRate, currency }: Props) => {
  return (
    <section style={{ textAlign: "right" }}>
      <p style={{ fontWeight: "bold", padding: "0.3125rem" }}>
        Total: {total} {currency}
      </p>
      <p style={{ padding: "0.3125rem" }}>
        VAT ({vatRate}%): {vatTotal} {currency}
      </p>
    </section>
  );
};

export default Summary;
