import { Logo } from "../../components";

interface Props {
  invoiceId: string;
  createdAt: Date;
  due: Date;
}

/**
 * This component represents a header of an invoice.
 * It includes company logo and dates
 */
const Header = () => {
  return (
    <section className="container">
      <div className="container__logo">
        <Logo />
      </div>
      <div>
        Invoice #: 39291 <br />
        Created: 17/07/2021 <br />
        Due: 17/08/2021
      </div>
    </section>
  );
};

export default Header;
