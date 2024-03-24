"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaginationControls({
  total,
  hasNextPage,
  hasPrevPage,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "20";

  const category = searchParams.get("category");

  const previousPage = category ? `?category=${category}&page=${Number(page) - 1}&per_page=${per_page}` : `?page=${Number(page) - 1}&per_page=${per_page}`;
  const nextPage = category ? `?category=${category}&page=${Number(page) + 1}&per_page=${per_page}` : `?page=${Number(page) + 1}&per_page=${per_page}`;

  return (
    <div>
      <div className="flex justify-center items-center space-x-5 text-base xl:text-h7 2xl:text-h5 mt-8 md:mt-16">
        <button
          disabled={!hasPrevPage}
          className="text-accent text-lg flex items-center gap-x-1 font-semibold disabled:text-dim-gray transition-all duration-300 ease-in-out hover:text-gray"
          onClick={() => {
            router.push(previousPage);
          }}
        >
          <span className=" text-base ">&lt;</span> Previous
        </button>
        <div>
          {page} of {Math.ceil(total / Number(per_page))}
        </div>
        <button
          disabled={!hasNextPage}
          className="text-accent text-lg flex items-center gap-x-1 font-semibold disabled:text-dim-gray transition-all duration-300 ease-in-out hover:text-gray"
          onClick={() => {
            router.push(nextPage);
          }}
        >
          Next <span className=" text-base">&gt;</span>
        </button>
      </div>
    </div>
  );
}
