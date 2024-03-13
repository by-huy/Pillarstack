'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import categories from '@/data/categories.json';

/**
 * Calculates the count of each category in the given array of resources.
 * @param {Array} categories - The array of resources.
 * @returns {Array} An array of objects containing the category name and its count.
 */
function newFunction() {
  const categoryCount = {};
  categories.forEach((resource) => {
    const categoryItem = resource.fields.category;
    if (categoryItem !== '') {
      categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
    }
  });
  return Object.entries(categoryCount).map(([name, num]) => ({ name, num }));
}
/**
 * Renders a set of tab buttons for category navigation.
 * @module TabButtons
 * @returns {JSX.Element} The rendered component
 */
export default function TabButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryCount = newFunction();
  const activeCategory = searchParams.get('category') || '';
  return (
    <div className="mb-8 sticky top-6 z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
      <button
        aria-label="All categories"
        onClick={() => {
          router.push('/', { scroll: false });
        }}
        className={`py-2 px-4 flex gap-x-1 font-medium items-center border border-dim-gray  rounded-xl hover:border-text transition-all text-sm xl:text-h6 ${
          activeCategory === '' ? 'bg-accent text-bg' : 'bg-bg text-accent'
        }`}
      >
        All
      </button>
      <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
        {categoryCount.map(({ name, num }, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/?category=${name}`, { scroll: false });
              }}
              className={`py-2 px-5 flex gap-x-1 font-medium  rounded-xl  transition-all relative ${
                activeCategory === name ? '' : '   hover:text-gray'
              }`}
            >
              {activeCategory === name && (
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  layoutId="active"
                  className=" absolute inset-0 bg-accent rounded-xl"
                />
              )}
              <span className="text-sm xl:text-h6 relative mix-blend-exclusion  z-10">
                {name}
              </span>
              <span className="flex relative justify-center mix-blend-exclusion z-10 items-center text-light-gray text-xxs xl:text-xs 2xl:text-sm leading-none">
                {num}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
