import Image from "next/image";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Menu from "./nav";
import Cart from "../cart/cart";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-2 mb-8  border-b h-20">
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
      <div className="flex gap-x-8 items-center">
        <nav className="hidden md:block">
          <Menu />
        </nav>
        {/* Cart */}
        <Sheet>
          <SheetTrigger className="bg-white h-10 rounded-md px-4 text-blue-500 border hover:text-white hover:bg-blue-500">
            <ShoppingCartRoundedIcon className="text-2xl" />
          </SheetTrigger>
          <SheetContent className="flex justify-center" side="bottom">
            <Cart />
          </SheetContent>
        </Sheet>
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger>
            <MenuOpenIcon className="text-3xl md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <Menu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
