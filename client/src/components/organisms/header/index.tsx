import { Logo } from "../..";

// TODO createdAt and due should be Dates
interface Props {
  invoiceId: string;
  createdAt: string;
  dueAt: string;
}

/**
 * This component represents a header of an invoice.
 * It includes company logo and dates
 */
const Header = ({ invoiceId, createdAt, dueAt }: Props) => {
  // TODO Convert Date format!
  return (
    <section className="container">
      <div className="container__block container__block--left container__logo">
        <Logo />
      </div>
      <div className="container__block container__block--right">
        <p>Invoice #: {invoiceId}</p>
        <p>Created: {createdAt}</p>
        <p>Due: {dueAt}</p>
      </div>
    </section>
  );
};

export default Header;
