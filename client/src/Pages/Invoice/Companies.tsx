/**
 * This component represents companies of an invoice.
 * It includes details of the invoicing and receiving companies
 */
const Companies = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        collectAI GmbH.
        <br />
        20457 Hamburg
        <br />
        Hamburg, Germany
      </div>
      <div>
        Acme, GmbH.
        <br />
        Bob Hans Jens, The Great <br />
        youknowit@star-wars-is-real.pew
      </div>
    </div>
  );
};

export default Companies;
