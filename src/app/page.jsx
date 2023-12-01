import ResourceContainer from "@/components/Card/ResourceContainer";
import Tab from "@/components/TabNavigation/TabButtons";
import TabMobile from "@/components/TabNavigation/TabButtonsMobile";
import { createClient } from "contentful";
import { Suspense } from "react";
import Skeleton from "@/components/Card/Skeleton";

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
      <section className="mx-auto text-center max-w-xl lg:max-w-2xl xl:max-w-4xl  2xl:max-w-[60%] space-y-5 mt-20 mb-32">
        <h1 className=" text-display text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text max-w-lg mx-auto text-base xl:text-h4 2xl:text-h3 2xl:max-w-2xl">
          Explore curated and handpicked goodies that enhance your workflow and
          cultivate your growth as a developer and designer.
        </p>
      </section>
      <section>
        <TabMobile cat={cat} />
        <Tab cat={cat} />
        <Suspense fallback={<Skeleton />}>
          <ResourceContainer category={category} />
        </Suspense>
      </section>
    </main>
  );
}
