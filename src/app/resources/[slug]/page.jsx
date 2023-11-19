import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "resourcesPage",
  });

  return res.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

async function fetchResource({slug}) {
  const res = await client.getEntries({
    content_type: "resourcesPage",
    'fields.slug': slug,
  });

  return res.items[0];
}


export default async function ResourceDetails({ params }) {
  const resource = await fetchResource(params);

  console.log(resource.fields.thumbnail.fields.file.url);

  return <div>
    <h1>{resource.fields.title}</h1>
    <Image src={'https:' + resource.fields.thumbnail.fields.file.url} width={200} height={200} />
    </div>;
}
