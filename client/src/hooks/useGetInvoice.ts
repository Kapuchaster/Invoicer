import { GetInvoiceDocument, Invoice } from "../__generated__/operations-types";
import { useRequestStatus } from "./useRequestStatus";

export const useGetInvoice = () => {
  return useRequestStatus<{ invoice: Invoice }>(GetInvoiceDocument);
};
