import { publicProcedure, createTRPCRouter } from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  greeting: publicProcedure.query(() => {
    return { greeting: "Hello World!" };
  }),
  getExample: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.example.findMany();
  }),
});
