"use client";

// Note: This component is used to filter resources by category
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TabButtons({ cat }) {
  const router = useRouter();

  const categoryCount = {};
  // Iterate over resources and update categoryCount
  cat.forEach((resource) => {
    const categoryItem = resource.fields.category.fields.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  const categories = Object.keys(categoryCount);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onChangeHandler = (e) => {
    categories.forEach((category) => {
      if (e.target.innerText === category) {
        router.push(`/?category=${category}`, { scroll: false });
        setSelectedCategory(category);
      }
    });
  };

  return (
    <div className="flex mb-8 justify-center gap-x-2">
      {/* Filtering button */}
      <button
        onClick={() => {
          router.push("/", { scroll: false });
          setSelectedCategory("");
        }}
        className={`py-1 px-4 flex gap-x-1 font-medium border rounded-full hover:border-text transition-all text-sm ${
          selectedCategory === "" ? "bg-accent text-bg" : " bg-bg text-accent"
        }`}
      >
        All
      </button>
      {Object.entries(categoryCount).map(([item, count]) => {
        return (
          <button
            key={item}
            onClick={(e) => onChangeHandler(e)}
            className={`py-1 px-4 flex gap-x-1 font-medium border rounded-full hover:border-text transition-all active:text-dark-charcoal text-sm ${
              selectedCategory === item ? "bg-accent text-bg" : " bg-bg text-accent"
            }`}
          >
            <span className=" text-sm ">{item}</span>
            <span className="flex justify-center items-center text-text text-xxs leading-none">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
