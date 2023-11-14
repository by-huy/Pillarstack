// Library
import { createClient } from "contentful";

// Components
import ResourceCard from "@/components/Card/ResourceCard";
import Tab from "../TabNavigation/TabButtons";

async function fetchContentful(category) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "resourcesPage",
    include: 2,
    order: ['-fields.publishedDate'],
    'fields.category.sys.contentType.sys.id': "categories",
    'fields.category.fields.category': category === 'all' ? null : category,
  });

  return res.items
}

export default async function ResourceContainer({ category }) {
  const resources = await fetchContentful(category);
  

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {resources.map((resource) => (
          <ResourceCard key={resource.sys.id} resource={resource} />
        ))}
      </div>
    </>
  );
}
