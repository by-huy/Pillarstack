"use client";

// Note: This component is used to filter resources by category
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// ... (other imports)

export default function TabButtons({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryCount = {};
  categories.forEach((resource) => {
    const categoryItem = resource.fields.category.fields.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  // Extract category from the URL query
  const activeCategory = searchParams.get("category") || "";

  return (
    <div className="mb-8 sticky top-6 z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
      {/* Filtering button for "All" category */}
      <button
        aria-label="All categories"
        onClick={() => {
          router.push("/", { scroll: false });
        }}
        className={`py-2 px-4 flex gap-x-1 font-medium items-center border border-dim-gray  rounded-xl hover:border-text transition-all text-sm xl:text-h6 ${
          activeCategory === "" ? "bg-accent text-bg" : "bg-bg text-accent"
        }`}
      >
        All
      </button>
      <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
        {Object.entries(categoryCount).map(([item, count]) => {
          return (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/?category=${item}`, { scroll: false });
              }}
              className={`py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative ${
                activeCategory === item
                  ? ""
                  : "   hover:text-gray"
              }`}
            >
              {activeCategory === item && (
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  layoutId="active"
                  className=" absolute inset-0 bg-accent rounded-xl"
                />
              )}
              <span
                className="text-sm xl:text-h6 relative mix-blend-exclusion  z-10"
              >
                {item}
              </span>
              <span
                className="flex relative justify-center mix-blend-exclusion z-10 items-center text-light-gray text-xxs xl:text-xs 2xl:text-sm leading-none"
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
