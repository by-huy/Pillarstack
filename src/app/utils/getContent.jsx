import { createClient } from "contentful";

export async function getContent({contentType, ...rest}) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: contentType,
    ...rest,
  });

  return response.items;
}
