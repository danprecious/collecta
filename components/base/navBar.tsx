"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  const navigationLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Community",
      href: "/community",
    },
    {
      name: "Collection",
      href: "/collection",
    },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigationLinks.map(({ name, href }) => {
        const isActive = pathname.includes(href);

        return (
          <Link className="flex relative items-center flex-col gap-2" href={href} key={name}>
            <span
              className={`${
                isActive ? "" : "text-foreground/50"
              } font-semibold`}
            >
              {name}
            </span>

            {isActive && <span className="w-3 h-1 absolute bottom-[-5px] rounded-md bg-foreground"></span>}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
