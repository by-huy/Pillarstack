import Link from "next/link";
import { FooterTitle } from "../SVGs/FooterTitle";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "/",
      label: "Contribute to this project",
    },
    {
      id: 3,
      href: "/",
      label: "Support this project",
    },
    {
      id: 4,
      href: "/",
      label: "Add your resources",
    },
    {
      id: 5,
      href: "/",
      label: "Share this project",
    },
  ];

  return (
    <footer className="mt-32">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">PILLARSTACK</span>
        <FooterTitle />
      </div>
      <div className="flex items-center justify-between pt-6 pb-10 text-accent">
        <div className="space-x-1">
          <span>Made by</span>
          <Link href="https://www.huyng.xyz">HuyNG</Link>
        </div>
        <ul className="flex gap-x-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
