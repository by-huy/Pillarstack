import Image from "next/image";
import Link from "next/link";


export default function ResourceCard({resource}) {

  const {title, category, thumbnail} = resource.fields

  return (
    <Link href="/" className=" bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-15 overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in ">
      <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute w-2/3 rounded-3xl overflow-hidden shadow-shine bg-transparent bg-opacity-0">
            <Image loading="lazy"  className="w-full" width={200} height={200} alt="sds" src={'https:' + thumbnail.fields.file.url} />
        </div>
      </div>
      <div className=" bg-dark-charcoal p-6 flex justify-between items-center">
        <div> 
          <h2 className=" font-semibold text-h6">{title}</h2>
          <span className=" text-xs text-text">Frontend Development</span>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-semibold text-xs">
          <span>{category.fields.category}</span>
        </div>
      </div>
    </Link>
  );
}
