import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Button({ children, href, ...props }) {
  return (
    <Link
      href={href}
      {...props}
      className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5"
    >
      <span>{children}</span>
      <div className="relative overflow-hidden ">
        <GoArrowRight className="group-hover:translate-x-5 transition-all ease-in-out-circ duration-500" size={18} />
        <GoArrowRight className="absolute top-0 -translate-x-5 group-hover:translate-x-0 transition-all duration-500 ease-in-out-circ" size={18} />
      </div>
    </Link>
  );
}
