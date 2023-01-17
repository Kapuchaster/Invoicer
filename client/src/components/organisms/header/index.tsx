import { Logo } from "../..";

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
const Header = ({ invoiceId, createdAt, dueAt, logoSrc }: Props) => {
  // TODO Convert Date format!
  return (
    <section className="header">
      <div className="header__block header__block--left header__logo">
        <Logo src={logoSrc} />
      </div>
      <div className="header__block header__block--right">
        <p>Invoice #: {invoiceId}</p>
        <p>Created: {createdAt}</p>
        <p>Due: {dueAt}</p>
      </div>
    </section>
  );
};

export default Header;
