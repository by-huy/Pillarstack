"use client";

// Note: This component is used to filter resources by category
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

// ... (other imports)

export default function TabButtons({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const categoryCount = {};
  categories.forEach((resource) => {
    const categoryItem = resource.fields.category.fields.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  // Extract category from the URL query
  const activeCategory = searchParams.get("category") || "";

  const handleCategoryChange = (category) => {
    setIsOpen(false);
    router.push(`/?category=${category}`, { scroll: false });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between ${
          activeCategory === "" ? " text-accent" : ""
        }`}
      >
        {activeCategory === "" ? "All" : activeCategory}
        <span>
          <GoPlus />
        </span>
      </button>
      {isOpen && (
        <div className="absolute bottom-16 left-0 right-0 border
        border-dim-gray bg-dark-charcoal p-4 m-4 flex rounded-md flex-col gap-y-2 ">
          <button
            onClick={() => handleCategoryChange("")}
            className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm ${
              activeCategory === "" ? "bg-accent text-bg" : " bg-bg text-accent"
            }`}
          >
            All
          </button>
          {Object.entries(categoryCount).map(([item, count]) => {
            return (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`py-4 px-4 flex gap-x-1 font-medium  rounded border border-transparent hover:border-dim-gray transition-all text-sm relative ${
                  activeCategory === item
                    ? "text-bg bg-accent"
                    : " bg-bg text-accent"
                }`}
              >
                <span className="text-sm">{item}</span>
                <span
                  className={`flex justify-center items-center ${
                    activeCategory === item ? "text-bg" : "text-text"
                  } text-xxs leading-none`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
