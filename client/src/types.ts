export enum Currency {
  Euro = "EUR",
}

export type InvoiceType = {
  id: string;
  email: string;
  fullName: string;
  company: string;
  createdAt: string;
  dueAt: string;
  lineItems: { description: string; price: string }[];
};
