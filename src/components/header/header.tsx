import Image from "next/image";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Menu from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-2  border-b h-20">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width="200"
          height="200"
          layout="responsive"
          sizes="(max-width: 768px) 100px, 150px"
        />
      </Link>
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger>
          <MenuOpenIcon className="text-3xl md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <Menu />
        </SheetContent>
      </Sheet>
      <nav className="hidden md:block">
        <Menu />
      </nav>
    </header>
  );
}
