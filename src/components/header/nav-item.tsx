import Link from "next/link";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type NavItemProps = {
  path: string;
  children: React.ReactNode;
};

export default function NavItem({ path, children }: NavItemProps) {
  return (
    <Link href={path}>
      <li className="group text-lg uppercase  px-2 h-20 flex flex-col justify-center relative">
        <div className="flex items-center gap-x-2">
          <KeyboardArrowRightIcon className="md:hidden" />
          {children}
        </div>

        <div className="h-[1px] w-full bg-gray-900 absolute bottom-0 left-0 hidden group-hover:block"></div>
      </li>
    </Link>
  );
}
