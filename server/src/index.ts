import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import fs from "fs";
import { buildSchema } from "graphql";
import path from "path";

const rawInvoice = fs.readFileSync(
  path.resolve(__dirname, "./resources/invoice.json"),
  "utf8"
);
const invoice = JSON.parse(rawInvoice);

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type LineItem {
    description: String!
    price: Float!
  }
  type Invoice {
    id: String!
    lineItems: [LineItem!]!
    email: String!
    fullName: String!
    company: String!
    createdAt: String!
    dueAt: String!
  }
  type Query {
    hello: String
    invoice: Invoice!
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
  invoice: () => {
    return invoice;
  },
};

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
