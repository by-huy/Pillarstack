import Button from "../Button/Button";
import { LogoFull } from "../SVGs/Logofull";
import { LogoSimple } from "../SVGs/Logosimple";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className=" border-b-2 border-b-dim-gray border-opacity-30">
      <nav className=" px-6 pt-1 pb-2  border-gray border-opacity-20 mt-4  flex items-center justify-between">
        <Link aria-label="Back to Home" href="/">
          <LogoSimple />
          <LogoFull />
        </Link>
        <div className="flex items-center gap-x-8">
          <Link className="font-medium hidden sm:block" href="/about">
            About
          </Link>
          <Button target="_blank" href="">Add a Resource</Button>
        </div>
      </nav>
    </header>
  );
}
