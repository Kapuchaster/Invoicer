interface Props {
  company: string;
  fullName: string;
  email: string;
}

/**
 * This component represents companies of an invoice.
 * It includes details of the invoicing and receiving companies
 */
const Companies = ({ company, fullName, email }: Props) => {
  return (
    <section className="container">
      <div>
        <p>collectAI GmbH.</p>
        <p>20457 Hamburg</p>
        <p>Hamburg, Germany</p>
      </div>
      <div className="container__data">
        <p>{company}</p>
        <p>{fullName}</p>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default Companies;
