import { createRouteHandler } from "uploadthing/server";
 
import { ourFileRouter } from "./core";
 
// TODO: Review auth settings for this. We should not need to have this exposed.
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
