import { makeSchema } from "nexus";
import path from "path";

import * as casesTypes from "./cases";

export const schema = makeSchema({
  types: [casesTypes],
  outputs: {
    typegen: path.join(process.cwd(), "src", "api", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "src", "api", "schema.graphql"),
  },
});
