"use client";

import React from "react";
import { GoArrowDown } from "react-icons/go";

export default function LoadMoreButton({onClick}) {


  return (
    <button
        onClick={onClick}
      className="flex justify-center items-center bg-super-dark-gray font-semibold w-full py-5 mt-4   border-gray rounded-xl border-opacity-15 text-text gap-x-1"
    >
      <span>Load More</span>
      <GoArrowDown className=" fill-light-gray stroke-[0.4]" />
    </button>
  );
}
