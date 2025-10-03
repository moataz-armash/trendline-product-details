import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/public/logo.png";
import user from "@/public/rightSideIcons/user.svg";
import burgerIcon from "@/public/burgerIcon.svg";
import Link from "next/link";
import {
  languages,
  navigation,
  rightSideIcons,
} from "@/app/(auth)/lib/navbarData";
import { classNames } from "@/app/utils/styleClass";

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-black-200"
                  : "text-black-200 hover:text-black-500",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image alt="Tinytales" src={logo} className="h-9 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center justify-center h-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-black-200"
                        : "text-black-200 hover:text-black-500 ",
                      "group rounded-md px-3  text-sm font-medium flex gap-2 items-center "
                    )}>
                    <Image
                      src={item.icon}
                      alt=""
                      width={15}
                      height={15}
                      priority
                      className="shrink-0 text-black-200 group-hover:brightness-75"
                    />
                    <span className="group-hover:text-black-500">
                      {" "}
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0  items-center pr-2 hidden md:static md:flex md:inset-auto md:ml-6 md:pr-0">
            <div className="flex gap-4">
              {rightSideIcons.map((item, index) => (
                <Image
                  key={index}
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  priority
                  className="shrink-0 text-black-200 group-hover:brightness-75"
                />
              ))}
            </div>

            {/* language dropdown */}
            <Menu as="div" className="relative inline-block ">
              <MenuButton className="inline-flex w-full justify-center border-none outline-none gap-x-1 rounded-md bg-white/10 px-3  text-sm font-bold text-black-500 inset-ring-1 inset-ring-white/5 cursor-pointer ">
                <span className="self-center">{languages[0]}</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-black-500 "
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-24 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div className="py-1">
                  {languages.slice(1, languages.length).map((lang) => (
                    <MenuItem key={lang}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden">
                        {lang}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            {/* Profile dropdown */}
            <Menu as="div" className="relative inline-block">
              <MenuButton className="relative flex rounded-full focus-visible:outline-none cursor-pointer">
                <div className="flex justify-center items-center gap-x-1">
                  <Image alt="" src={user} className="size-5 rounded-full" />
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-black-500"
                  />
                </div>
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black-500  hover:text-white focus:outline-2 focus:-outline-offset-1 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <Image
                src={burgerIcon}
                alt=""
                width={20}
                height={20}
                priority
                aria-hidden="true"
                className="shrink-0 text-black-200 group-hover:brightness-75 group-data-open:hidden "
              />

              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block text-black-500"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
