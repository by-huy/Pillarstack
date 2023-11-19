import Button from "@/components/Button/Button";
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

async function fetchResource({ slug }) {
  const res = await client.getEntries({
    content_type: "resourcesPage",
    "fields.slug": slug,
  });

  return res.items[0];
}

export default async function ResourceDetails({ params }) {
  const resource = await fetchResource(params);

  return (
    <div className="flex flex-col md:flex-row mt-8 gap-x-10 lg:gap-x-16 justify-center items-center">
      <div className=" bg-super-dark-gray flex relative items-center justify-center md:pb-[25%] md:pt-[25%] pt-[50%] pb-[50%] rounded-2xl w-full md:w-1/2 border-4 border-outline border-opacity-15">
        <div className="absolute w-2/3 rounded-3xl overflow-hidden  shadow-shine bg-transparent bg-opacity-0 ">
          <Image
            priority={true}
            quality={85}
            alt={resource.fields.title}
            src={"https:" + resource.fields.thumbnail.fields.file.url}
            className="w-full"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="w-full mt-12 md:mt-0 md:w-1/2">
        <div className="flex flex-col gap-y-3 items-start">
          <h1 className="text-3xl font-bold">{resource.fields.title}</h1>
          <p className=" text-text text-base max-w-md pb-3 ">
            {resource.fields.description}
          </p>
          <Button target="_blank" href={resource.fields.link}>View Source</Button>
        </div>

        <div className="flex flex-col gap-x-2 mt-12 divide-y divide-dim-gray">
          <div className=" gap-x-1 grid grid-cols-12 border-t border-dim-gray py-2">
            <h2 className="text-sm font-semibold col-span-4">Category</h2>
            <span className="text-sm col-span-8 text-text px-1">
              {resource.fields.category.fields.category}
            </span>
          </div>
          <div className=" gap-x-1 grid grid-cols-12 ">
            <h2 className="text-sm font-semibold col-span-4 pt-2">Tags</h2>
            <span className="flex flex-col col-span-8  text-text">
              {resource.fields.tags.map((tag) => (
                <span
                  className="text-sm py-2 border-b border-dim-gray px-1"
                  key={tag.sys.id}
                >
                  {tag.fields.tag}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
