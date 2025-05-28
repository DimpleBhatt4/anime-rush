import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";

const navigation = [
  { name: "Anime", href: "/anime", current: true },
  { name: "Manga", href: "/manga", current: false },
  { name: "Watch", href: "/promotion", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as='nav' className='border-b border-white shadow-xl'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
       <div className="flex h-16 items-center justify-around">
  {/* Left: Mobile Menu + Logo */}
  <div className="flex items-center">
    <div className="sm:hidden mr-2">
      <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
      </DisclosureButton>
    </div>
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        height={40}
        width={40}
        alt="logo"
        className="object-contain md:w-[80px]"
      />
    </Link>
  </div>

  {/* Center: Navigation (Only visible on sm and above) */}
  <div className="hidden sm:flex sm:space-x-4">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "rounded-md px-3 py-2 text-sm font-medium"
        )}
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* Right: Search + Wishlist */}
  <div className="flex items-center gap-2">
    <SearchBar />
    <Link href="/wishlist" className="p-1 rounded-full bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </Link>
  </div>
</div>

      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
