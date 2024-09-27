import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql/",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/graphql/graphQltypes.generated.ts": {
      plugins: ["typescript", "typed-document-node", "typescript-operations"],
    },
  },
};

export default config;
