import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "SPACE ID",
  accessToken: "ACCESS TOKEN",
});
