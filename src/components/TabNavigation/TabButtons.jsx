"use client";

// Note: This component is used to filter resources by category
import { useRouter, useSearchParams } from "next/navigation";


// ... (other imports)

export default function TabButtons({ cat }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryCount = {};
  cat.forEach((resource) => {
    const categoryItem = resource.fields.category.fields.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  // Extract category from the URL query
  const activeCategory = searchParams.get("category") || "";

  return (
    <div className="mb-8 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
      {/* Filtering button for "All" category */}
      <button
        onClick={() => {
          router.push("/", { scroll: false });
        }}
        className={`py-1 px-4 flex gap-x-1 font-medium border border-dim-gray rounded-full hover:border-text transition-all text-sm ${
          activeCategory === "" ? "bg-accent text-bg" : " bg-bg text-accent"
        }`}
      >
        All
      </button>
      {Object.entries(categoryCount).map(([item, count]) => {
        return (
          <button
            key={item}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/?category=${item}`, { scroll: false });
            }}
            className={`py-1 px-4 flex gap-x-1 font-medium border  border-dim-gray rounded-full hover:border-text transition-all text-sm relative ${
              activeCategory === item ? "text-bg bg-accent" : " bg-bg text-accent"
            }`}
          >
            <span className="text-sm">{item}</span>
            <span className={`flex justify-center items-center ${activeCategory === item ? "text-bg" : "text-text"} text-xxs leading-none`}>
              {count}
          </span>
          </button>
        );
      })}
    </div>
  );
}