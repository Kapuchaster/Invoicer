import { Invoice } from "../__generated__/operations-types";

function isInvoiceType(obj: unknown): obj is Invoice {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "lineItems" in obj &&
    "email" in obj &&
    "fullName" in obj &&
    "company" in obj &&
    "createdAt" in obj &&
    "dueAt" in obj &&
    Array.isArray(obj["lineItems"]) &&
    !obj.lineItems.some((lineItem) => {
      return !("description" in lineItem) || !("price" in lineItem);
    })
  );
}

export default isInvoiceType;
