'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import categories from '@/data/categories.json';

/**
 * Returns an array of objects containing the name of each category and the number of resources in that category.
 * @returns {Array} An array of objects containing the name of each category and the number of resources in that category.
 * @example [{ name: 'Design', num: 5 }, { name: 'Development', num: 10 }]
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
 * Renders a tab navigation component for mobile devices.
 * Allows users to select a category and displays the count of resources in each category.
 * @returns {JSX.Element} The rendered tab navigation component.
 */
export default function TabButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const categoryCount = newFunction();

  const activeCategory = searchParams.get('category') || '';

  const handleCategoryChange = (category) => {
    setIsOpen(false);
    router.push(`/?category=${category}`, { scroll: false });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between ${
          activeCategory === '' ? ' text-accent' : ''
        }`}
      >
        {activeCategory === '' ? 'All' : activeCategory}
        <span>
          <GoPlus />
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute bottom-16 left-0 right-0 border
        border-dim-gray bg-dark-charcoal p-4 m-4 flex rounded-md flex-col gap-y-2 "
        >
          <button
            onClick={() => handleCategoryChange('')}
            className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm ${
              activeCategory === '' ? 'bg-accent text-bg' : ' bg-bg text-accent'
            }`}
          >
            All
          </button>
          {categoryCount.map(({ name, num }, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCategoryChange(name)}
                className={`py-4 px-4 flex gap-x-1 font-medium  rounded border border-transparent hover:border-dim-gray transition-all text-sm relative ${
                  activeCategory === name
                    ? 'text-bg bg-accent'
                    : ' bg-bg text-accent'
                }`}
              >
                <span className="text-sm">{name}</span>
                <span
                  className={`flex justify-center items-center ${
                    activeCategory === name ? 'text-bg' : 'text-text'
                  } text-xxs leading-none`}
                >
                  {num}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
