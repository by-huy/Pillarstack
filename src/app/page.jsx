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
  const  page  = searchParams["page"] ?? "1";
  const  per_page  = searchParams["per_page"] ?? "20";
  const cat = await fetchCategories();

  return (
    <main>
      <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-32">
        <h1 className=" text-display max-w-[20ch] text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
          Explore curated and handpicked goodies that enhance your workflow and
          cultivate your growth as a developer and designer.
        </p>
      </section>
      <section>
        <TabMobile cat={cat} />
        <Tab cat={cat} />
        <Suspense fallback={<Skeleton />}>
          <ResourceContainer
            category={category}
            page={page}
            per_page={per_page}
          />
        </Suspense>
      </section>
    </main>
  );
}
