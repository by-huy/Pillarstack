import ResourceContainer from "@/components/Card/ResourceContainer";
import Tab from "@/components/TabNavigation/TabButtons";
import TabMobile from "@/components/TabNavigation/TabButtonsMobile";
import { Suspense } from "react";
import Skeleton from "@/components/Card/Skeleton";
import { getContent } from "./utils/getContent";

export default async function Home({ searchParams }) {
  const { category } = searchParams;
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";
  const { items: categories } = await getContent({
    content_type: "resourcesPage",
    order: ["fields.title"],
    include: 2,
  });

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
        <TabMobile categories={categories} />
        <Tab categories={categories} />
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
