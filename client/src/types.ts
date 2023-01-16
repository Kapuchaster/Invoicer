export enum Currency {
  Euro = "EUR",
}

export type LineItem = { description: string; price: number };

export type InvoiceType = {
  id: string;
  email: string;
  fullName: string;
  company: string;
  createdAt: string;
  dueAt: string;
  lineItems: LineItem[];
};
