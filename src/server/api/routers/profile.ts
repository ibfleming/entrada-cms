import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const profileRouter = createTRPCRouter({
  fetchAllProfiles: publicProcedure.query(async () => {
    return await db.query.profile.findMany();
  }),
});
