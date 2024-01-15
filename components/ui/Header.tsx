import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import SearchInput from "../SearchInput";
import GenreDropdown from "../GenreDropdown";

function Header() {
  return (
    <header className="flex justify-between p-5 sticky top-0 z-20 items-center bg-gradient-to-t from-gray-200/0 via-gray-900/10 dark:via-gray-900/25 to-gray-900/50 dark:to-gray-900 -mt-40 ">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert" // invert changes the color to the opposite
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
