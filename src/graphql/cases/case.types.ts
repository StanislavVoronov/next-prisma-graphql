import { nullable, objectType, queryType, stringArg } from "nexus";

export const Case = objectType({
  name: "Case",
  definition(t) {
    t.id("id");
    t.string("name");
  },
});

export const GET_CASES = queryType({
  definition(t) {
    t.list.field("cases", {
      type: "Case",
      resolve(_root, _args, ctx) {
        return ctx.prisma.case.findMany();
      },
    });
  },
});
