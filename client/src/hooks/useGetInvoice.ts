import { InvoiceType } from "../types";
import { useRequestStatus } from "./useRequestStatus";

const invoiceQuery = `query GetInvoice { invoice 
  { id 
    email 
    fullName 
    company 
    createdAt 
    dueAt 
    lineItems {
      description
      price
    }
  } 
}`;

export const useGetInvoice = () => {
  return useRequestStatus<{ invoice: InvoiceType }>(invoiceQuery);
};
