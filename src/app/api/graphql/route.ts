import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@/graphql";
import { prisma } from "@/prisma/db";

export type Context = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({ schema });

export const POST = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    return { req, res, prisma };
  },
});
