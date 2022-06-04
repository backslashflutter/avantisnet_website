import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "YOUR_SPACE_ID",
  accessToken: "YOUR_ACCESS_TOKEN",
});
