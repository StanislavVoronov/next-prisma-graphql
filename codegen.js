require("dotenv").config();

module.exports = {
  schema: "http://localhost:3001/api/graphql",
  documents: "./src/graphql/**/*.graphql",
  overwrite: true,
  generates: {
    "./src/api/index.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        maybeValue: "T | undefined",
        withHooks: true,
      },
    },
  },
};
