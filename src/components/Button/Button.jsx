import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Button({ children, href, ...props }) {
  return (
    <Link
      href={href}
      {...props}
      className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary px-5 py-3 flex items-center gap-x-1 flex-shrink-0 hover:from-gradient2 hover:to-gradient3 hover:text-primary transition-all duration-200"
    >
      <span>{children}</span>
      <GoArrowRight size={24} />
    </Link>
  );
}
