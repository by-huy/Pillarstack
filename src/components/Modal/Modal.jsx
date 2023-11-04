import Image from "next/image";
import thumbnail1 from "../../../public/images/thumb6.png";
import ModalButton from "./ModalButton";
import Button from "../Button/Button";

export default function Modal() {
  return (
    <div className="fixed py-4 px-6 w-screen z-[999] h-screen flex items-center justify-center top-0 left-0">
      <div className=" w-[50rem] overflow-scroll border-4 border-outline bg-dark-charcoal rounded-xl border-opacity-15 h-full p-8">
        {/* extract modal btn as component */}
        <div className="flex w-full justify-end">
          <ModalButton />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-10 mb-12">
            <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-2xl">
              <div className="absolute w-2/3 rounded-3xl overflow-hidden shadow-shine bg-transparent bg-opacity-0">
                <Image
                  loading="lazy"
                  placeholder="blur"
                  className="w-full"
                  width={200}
                  height={200}
                  alt="sds"
                  src={thumbnail1}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-y-6 items-start">
              <div>
                <h1 className=" text-h4 font-bold tracking-close">Relume</h1>
                <p className=" text-light-gray font-medium">Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.</p>
              </div>
              <Button />
            </div>
          </div>
          <div>grid here </div>
        </div>
      </div>
      <div className=" cursor-pointer -z-10 h-full w-full bg-dark-charcoal bg-opacity-10 backdrop-blur fixed"></div>
    </div>
  );
}
