import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { resolvers, typeDefs } from "./graphql";

dotenv.config();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
const { HOST, PORT } = process.env;
app.listen(PORT);
console.log(`Running a GraphQL API server at http://${HOST}:${PORT}/graphql`);
