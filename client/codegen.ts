import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../common/schema/*.graphql",
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/__generated__/operations-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
