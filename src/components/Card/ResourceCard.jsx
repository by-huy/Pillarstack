import Image from "next/image";

export default function ResourceCard() {
  return (
    <div className=" bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-10 overflow-hidden ">
      <div className="aspect-square bg-super-dark-gray">
        <div>
            <Image width={100} height={100} alt="sds" src="" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
