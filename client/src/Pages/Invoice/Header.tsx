import { Logo } from "../../components";

// TODO createdAt and due should be Dates
interface Props {
  invoiceId: string;
  createdAt: string;
  due: string;
}

/**
 * This component represents a header of an invoice.
 * It includes company logo and dates
 */
const Header = ({ invoiceId, createdAt, due }: Props) => {
  // TODO Convert Date format!
  return (
    <section className="container">
      <div className="container__logo">
        <Logo />
      </div>
      <div className="container__data--right">
        <p>Invoice #: {invoiceId}</p>
        <p>Created: {createdAt}</p>
        <p>Due: {due}</p>
      </div>
    </section>
  );
};

export default Header;
