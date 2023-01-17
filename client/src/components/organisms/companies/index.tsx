import { Invoicee } from "../../../types";

import "./styles.css";

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
const Companies = ({ company, fullName, email, invoicee }: Props) => {
  return (
    <section className="companies">
      <div className="companies__block companies__block--left">
        <p>{invoicee.name}</p>
        <p>{invoicee.address}</p>
        <p>{invoicee.city}</p>
      </div>
      <div className="companies__block companies__block--right">
        <p>{company}</p>
        <p>{fullName}</p>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default Companies;
