import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/app/utils/getContent";
import { GoArrowLeft } from "react-icons/go";
import ErrorPage from "@/app/not-found";

export async function generateMetadata({ params }) {
  try {
    const resource = await fetchResource(params);
    if (!resource)
      return {
        title: "404 Not Found",
        description:
          "The resource you are looking for does not exist or it has been removed.",
      };
    return {
      title: resource.fields.title,
      description: resource.fields.description,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "404 Not Found",
      description:
        "The resource you are looking for does not exist or it has been removed.",
    };
  }
}

export async function generateStaticParams() {
  const res = await getContent({
    content_type: "resourcesPage",
  });

  return res.items.map((item) => ({
    slug: item.fields.slug,
  }));
}

async function fetchResource({ slug }) {
  const res = await getContent({
    content_type: "resourcesPage",
    "fields.slug": slug,
    
  }, {
    revalidate: 345600, // Add revalidation here
  });

  return res.items[0];
}

export default async function ResourceDetails({ params }) {
  const resource = await fetchResource(params);

  if (!resource) {
    return <ErrorPage />
  }

  return (
    <section className="mt-8">
      <Link scroll={false} href="/" className="flex items-center gap-x-1 pl-2">
        <GoArrowLeft color="#F7F7F7" size={24} />
        <span className=" font-semibold text-text text-base">Back</span>
      </Link>
      <div className="flex flex-col md:flex-row mt-5 gap-x-10 lg:gap-x-16 justify-center items-center">
        <div className=" bg-super-dark-gray flex relative items-center justify-center md:pb-[25%] md:pt-[25%] pt-[50%] pb-[50%] rounded-2xl w-full md:w-1/2 border-4 border-outline border-opacity-15">
          <div className="absolute w-2/3 rounded-3xl overflow-hidden  shadow-shine bg-transparent bg-opacity-0 ">
            <Image
              priority={true}
              alt={resource.fields.title}
              src={"https:" + resource.fields.thumbnail.fields.file.url}
              className="h-full w-full"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="w-full mt-12 md:mt-0 md:w-1/2">
          <div className="flex flex-col gap-y-3 items-start">
            <h1 className="text-h4 xl:text-h3 font-bold">
              {resource.fields.title}
            </h1>
            <p className=" text-text text-base xl:text-h6 2xl:text-h5 max-w-[50ch] text-balance pb-3 ">
              {resource.fields.description}
            </p>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href={resource.fields.link}
            >
              View Source
            </Button>
          </div>

          <div className="flex flex-col gap-x-2 mt-12 divide-y-2 divide-outline divide-opacity-20 text-xs xl:text-base 2xl:text-h6">
            <div className=" gap-x-1 grid grid-cols-12 border-t-2 border-outline border-opacity-20 py-2">
              <h2 className=" font-semibold col-span-4">Category</h2>
              <span className=" col-span-8 text-text px-1">
                {resource.fields.category.fields.category}
              </span>
            </div>
            <div className=" gap-x-1 grid grid-cols-12 ">
              <h2 className=" font-semibold col-span-4 pt-2">Tags</h2>
              <span className="flex flex-col col-span-8  text-text">
                {resource.fields.tags.map((tag) => (
                  <span
                    className=" py-2 border-b-2 border-outline border-opacity-20 px-1"
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
    </section>
  );
}
