'use client'

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navMenu = [
  { menu: "Home", url: "#main" },
  { menu: "About", url: "#about" },
  { menu: "Projects", url: "#projects" },
  // { menu: "Contact", url: "#contact" },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  const isOnHomePage = pathname === "/";

  const handleNavigation = (url: string) => {
    if (isOnHomePage) {
      // Scroll to section if already on home page
      document
        .getElementById(url.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page with hash if on a different page
      router.push(`/${url}`);
    }
  };

  return (
    <nav className="fixed top-0 lg:left-0 h-fit p-6 lg:p-0 lg:h-full w-full lg:w-80 primary-bg z-50">
      <div className="flex lg:flex-col justify-between items-center lg:justify-center lg:h-full">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-3xl lg:text-4xl font-bold lg:mb-6 secondary uppercase">
            Jung
          </h1>
        </Link>

        {/* Navigation Links - Web */}
        <div className="hidden lg:flex lg:flex-col text-white">
          <ul className="space-y-4">
            {navMenu.map((item) => (
              <li
                key={item.menu}
                className="text-center uppercase"
                onClick={() => handleNavigation(item.url)}
              >
                <Link href={item.url} className="hover:text-gray-300">
                  {item.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden h-fit w-fit">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="secondary-bg">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <ul>
                    {navMenu.map((item) => (
                      <li key={item.menu}>
                        <Link href={item.url} className="hover:text-gray-300">
                          {item.menu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              {/* <div className="grid gap-4 py-4">
                nav links
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
              </div> */}
              {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
