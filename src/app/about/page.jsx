import profile from "../../../public/images/profile.webp"
import Image from "next/image";

export default function About() {
  return (
    <div className="my-20 grid grid-cols-12">
      <div className="text-display col-span-4">
        <h1 className="pl-8">
          About <span className="text-light-gray">Pillarstack</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">
          <span>I created Pillarstack to address the frustrations I encountered when I started out in frontend development and web design. Hunting for resources and tools consumed a lot valuable time that could have been better spent honing my skills. </span>
          
          <span>Now Pillarstack exists to support those that have similar issues. These resources are handpicked and curated by me and other amazing contributors.</span>
        </p>
        <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image className=" scale-150" placeholder="blur" src={profile} alt="profile headshot of Huy Nguyen "/>
            </div>
            <div className="text-primary text-base font-medium flex flex-col">
                <p className=" leading-tight">Huy Nguyen</p>
                <span className="leading-tight text-light-gray font-normal">hello@huyng.xyz</span>
            </div>
        </div>
      </div>
    </div>
  );
}
