import Link from "next/link";
import { FooterTitle } from "../SVGs/FooterTitle";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "https://forms.gle/PftXkai3sNZquWu68",
      label: "Add a resource",
    },
    // {
    //   id: 3,
    //   href: "/",
    //   label: "Contribute to this project",
    // },
    {
      id: 4,
      href: "https://ko-fi.com/supporthuyng",
      label: "Support this project",
    },
    // {
    //   id: 5,
    //   href: "/",
    //   label: "Share this project",
    // },
  ];

  return (
    <footer className="mt-32 mb-16 sm:mb-0">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">PILLARSTACK</span>
        <FooterTitle />
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="space-x-1 pb-4 flex w-40">
          <span className="w-fit flex-nowrap whitespace-nowrap">Made by</span>
          <Link
            className="font-bold relative overflow-y-hidden w-full group h-fit"
            target="_blank"
            href="https://www.huyng.xyz"
          >
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">HuyNG</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">HuyNG :)</span>
          </Link>
        </div>
        <ul className="grid sm:grid-cols-2 lg:flex gap-x-12 gap-y-2">
          {links.map((link) => (
            <li key={link.id} className="flex group">
              {link.id === 2 || link.id === 4 ? (
                <Link
                  className="group"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ) : (
                <Link className="group" href={link.href}>{link.label}</Link>
              )}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
