import Button from "../Button/Button";
import { LogoFull } from "../SVGs/Logofull";
import { LogoSimple } from "../SVGs/Logosimple";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className=" border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="px-0 sm:px-6 pt-1 pb-2 xl:pb-4 2xl:pb-6 border-gray border-opacity-20 mt-4 xl:mt-8 2xl:mt-10  flex items-center justify-between">
        <Link aria-label="Back to Home" href="/">
          <LogoSimple />
          <LogoFull />
        </Link>
        <div className="flex items-center gap-x-8">
          <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/about">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">About</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">About</span>
            
          </Link>
          <Button target="_blank" href="https://forms.gle/PftXkai3sNZquWu68">Add a Resource</Button>
        </div>
      </nav>
    </header>
  );
}
