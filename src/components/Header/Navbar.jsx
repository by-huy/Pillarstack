import Button from "../Button/Button";
import { LogoFull } from "../SVGs/Logofull";
import { LogoSimple } from "../SVGs/Logosimple";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className=" px-6 pt-1 pb-2 border-b rounded-b border-gray border-opacity-20 mt-4  flex items-center justify-between">
        <Link href="/">
          <LogoSimple />
          <LogoFull />
        </Link>
        <div className="flex items-center gap-x-8">
          <Link className="font-medium hidden sm:block" href="/about">
            About
          </Link>
          <Button />
        </div>
      </nav>
    </header>
  );
}
