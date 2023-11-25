"use client"

import profile from "../../../public/images/profile.webp";
import Image from "next/image";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";


export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          About <span className="text-light-gray">Pillarstack</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 xl:text-h3 2xl:text-h2 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>
            I created Pillarstack to address the frustrations I encountered when
            I started out in frontend development and web design. Hunting for
            resources and tools consumed a lot valuable time that could have
            been better spent honing my skills.{" "}
          </span>

          <span>
            Now Pillarstack exists to support those that have similar issues.
            These resources are handpicked and curated by me and other amazing
            contributors.
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              className=" scale-150"
              placeholder="blur"
              src={profile}
              alt="profile headshot of Huy Nguyen "
            />
          </div>
          <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
            <p className=" leading-tight">Huy Nguyen</p>
            <CopyToClipboard text="hello@huyng.xyz" onCopy={handleCopy}>
              <span className="leading-tight text-light-gray font-normal cursor-pointer hover:underline">
                {copied ? "Copied to clipboard!" : "hello@huyng.xyz"}
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
