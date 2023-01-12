import { Logo } from "..";

/**
 * This component represents the Header of an invoice.
 * It includes company logo and dates
 */
const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <div>
        Invoice #: 39291 <br />
        Created: 17/07/2021 <br />
        Due: 17/08/2021
      </div>
    </div>
  );
};

export default Header;
