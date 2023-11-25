import React from 'react'

export default function Skeleton() {
  return (
 
    <div className="bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-15  overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in group @container ">
      <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute w-2/3 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0 ">
         
        </div>
      </div>
      
      <div className=" bg-dark-charcoal p-6 flex flex-col @sm:flex-row justify-between items-start gap-y-4">
        <div>
          <h2 className="font-semibold text-h6 xl:text-h5 2xl">Loading...</h2>
          <div className="tags">
              <span className="pr-2 text-xs xl:text-sm 2xl:text-base text-light-gray">
                Loading...
              </span>
          </div>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-semibold text-xs xl:text-sm 2xl:text-base">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
}

