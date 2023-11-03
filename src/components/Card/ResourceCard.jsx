import Image from "next/image";
import profile from '../../../public/images/profile.webp'
import Link from "next/link";

export default function ResourceCard() {
  return (
    <Link href="/" className=" bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-[0.15] overflow-hidden w-full">
      <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute  rounded-md overflow-hidden">
            <Image width={200} height={200} alt="sds" src={profile} />
        </div>
      </div>
      <div className=" bg-dark-charcoal p-6 flex justify-between items-center">
        <div>
          <h2 className=" font-semibold text-h6">Frontend Mentor</h2>
          <span className=" text-xs text-text">Frontend Development</span>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-semibold text-xs">
          <span>learning</span>
        </div>
      </div>
    </Link>
  );
}
