"use client";

import Link from "next/link";
import { Icons } from "./icons";


export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 ">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo />
      </Link>
    </nav>
  );
}
