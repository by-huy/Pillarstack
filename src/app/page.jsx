import ResourceContainer from "@/components/Card/ResourceContainer";
import Tab from "@/components/TabNavigation/TabButtons";
import TabMobile from "@/components/TabNavigation/TabButtonsMobile";
import { createClient } from "contentful";
import { Suspense } from "react";

async function fetchCategories() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "resourcesPage",
    order: ["fields.title"],
    include: 2,
  });

  return res.items;
}


export default async function Home({ searchParams }) {
  const { category } = searchParams;
  const cat = await fetchCategories();

  return (
    <main>
      <section className="mx-auto text-center max-w-3xl space-y-5 mt-20 mb-32">
        <h1 className=" text-display text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text max-w-lg mx-auto text-base">
          Explore curated and handpicked goodies that enhance your workflow and
          cultivate your growth as a developer and designer.
        </p>
      </section>
      <section>
        <TabMobile cat={cat} />
        <Tab cat={cat} />
        <Suspense>
          <ResourceContainer category={category} />
        </Suspense>
      </section>
    </main>
  );
}
