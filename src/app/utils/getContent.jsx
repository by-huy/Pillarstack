import { createClient } from "contentful";

//generateStaticParams here to statically generate the contents

export async function getContent({ content_type, ...rest }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const {items, total} = await client.getEntries({
    content_type,
    ...rest,
  });

  return { items, total };
}
