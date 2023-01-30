import { QueryResolvers } from "../__generated__/resolvers-types";
import fs from "fs";
import path from "path";

const rawInvoice = fs.readFileSync(
  path.resolve(__dirname, "../../resources/invoice.json"),
  "utf8"
);
const invoice = JSON.parse(rawInvoice);

const queries: QueryResolvers = {
  invoice: () => invoice,
};

export default queries;
