import { render, screen, within } from "../../test.utils";
import Invoice, { Props } from ".";
import { InvoiceType } from "../../types";

/**
 * NOTE: bear in mind that the current tests are not exhaustive and do not test the functionality of the application.
 * They can be extended in the future, but for the present purpose they are sufficient.
 **/

// TODO: move mocks to a testing folder
const __MOCKED_INVOICE__: InvoiceType = {
  id: "test_id",
  lineItems: [
    { description: "desc_1", price: 21.23 },
    {
      description: "desc_2",
      price: 10.71,
    },
  ],
  email: "austinhackett@durgan.org",
  fullName: "Delaney Howell",
  company: "Kassulke Group",
  createdAt: "2021-10-11",
  dueAt: "2021-11-01",
};

const renderInvoice = ({ invoice }: Props) => {
  return render(<Invoice invoice={invoice} />);
};

describe("renders Invoice page", () => {
  it("should render Invoice page", () => {
    renderInvoice({ invoice: __MOCKED_INVOICE__ });

    //Header renders correctly
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Invoice #: test_id")).toBeInTheDocument();
    expect(screen.getByText("Created: 2021/10/11")).toBeInTheDocument();
    expect(screen.getByText("Due: 2021/11/01")).toBeInTheDocument();

    //Companies render correctly
    expect(screen.getByText("collectAI GmbH.")).toBeInTheDocument();
    expect(screen.getByText("20457 Hamburg")).toBeInTheDocument();
    expect(screen.getByText("Hamburg, Germany")).toBeInTheDocument();

    expect(screen.getByText("Kassulke Group")).toBeInTheDocument();
    expect(screen.getByText("Delaney Howell")).toBeInTheDocument();
    expect(screen.getByText("austinhackett@durgan.org")).toBeInTheDocument();

    //Table render correctly
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    expect(within(table).getByText("Item")).toBeInTheDocument();
    expect(within(table).getByText("desc_1")).toBeInTheDocument();
    expect(within(table).getByText("21.23 EUR")).toBeInTheDocument();
    expect(within(table).getByText("desc_2")).toBeInTheDocument();
    expect(within(table).getByText("10.71 EUR")).toBeInTheDocument();

    //Summary render correctly
    expect(screen.getByText("Total: 31.94 EUR")).toBeInTheDocument();
    expect(screen.getByText("VAT (19%): 6.07 EUR")).toBeInTheDocument();
  });
});
