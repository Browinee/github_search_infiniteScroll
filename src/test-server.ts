import { rest } from "msw";
import { setupServer } from "msw/node";
import { repoSearchItemsResponse } from "./types/search";

const handlers = [
  rest.get(`/search/repositories`, async (req, res, ctx) => {
    console.log("handlersss", req);
    return res(ctx.json(repoSearchItemsResponse));
  }),
  // rest.get("*", async(req, res, ctx) => {
  //     console.log("wildcard", req)
  //     return res(ctx.json(repoSearchItemsResponse));
  // }),
];
const server = setupServer(...handlers);
export * from "msw";

export { server };
