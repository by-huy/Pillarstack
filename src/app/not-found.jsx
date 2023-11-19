import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

export default function ErrorPage() {
  return (
    <div className="h-screen flex items-center justify-center -m-20 flex-col ">
      <div className="relative grid grid-cols-2 grid-rows-2 place-items-center mb-12">
        <Image
          alt="404 logo"
          className=" col-span-full row-span-full w-80 sm:w-full sm:h-full"
          src="/logos/404logo.svg"
          width={400}
          height={400}
        />

        <h1 className="text-h1 font-bold text-center text-accent col-span-1 col-start-1 row-start-1">
          404
        </h1>
        <p className="col-span-1 col-start-2 row-start-2 max-w-[8rem] text-text">
          the page you’re looking for does not exist.
        </p>
      </div>
      <Button href="/">Go Back home</Button>
    </div>
  );
}
