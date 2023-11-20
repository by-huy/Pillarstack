"use client";

// Note: This component is used to filter resources by category
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ... (other imports)

export default function TabButtons({ cat }) {
  const router = useRouter();

  const categoryCount = {};
  // Iterate over resources and update categoryCount
  cat.forEach((resource) => {
    const categoryItem = resource.fields.category.fields.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const onChangeHandler = (e, category) => {
    e.preventDefault();
    router.push(`/?category=${category}`, { scroll: false });
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category); // Store the selected category in localStorage
  };

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory"); // Retrieve the selected category from localStorage
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  return (
    <div className="flex mb-8 justify-center gap-x-2">
      {/* Filtering button */}
      <button
        onClick={() => {
          router.push("/", { scroll: false });
          setSelectedCategory("");
          localStorage.removeItem("selectedCategory"); // Remove the selected category from localStorage
        }}
        className={`py-1 px-4 flex gap-x-1 font-medium border border-dim-gray rounded-full hover:border-text transition-all text-sm ${
          selectedCategory === "" ? "bg-accent text-bg" : " bg-bg text-accent"
        }`}
      >
        All
      </button>
      {Object.entries(categoryCount).map(([item, count]) => {
        return (
          <button
            key={item}
            onClick={(e) => onChangeHandler(e, item)}
            className={`py-1 px-4 flex gap-x-1 font-medium border  border-dim-gray rounded-full hover:border-text transition-all text-sm relative ${
              selectedCategory === item ? "text-bg bg-accent" : " bg-bg text-accent"
            }`}
          >
            <span className=" text-sm ">{item}</span>
            <span className={`flex justify-center items-center ${selectedCategory === item ? "text-bg" : "text-text"} text-xxs leading-none`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
