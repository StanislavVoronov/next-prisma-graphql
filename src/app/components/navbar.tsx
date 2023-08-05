"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  RocketLaunchIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { ListBulletIcon, PlusIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {(props) => <DisclosureContent {...props} />}
    </Disclosure>
  );
};

const DisclosureContent: React.FC<{ open: boolean; close: any }> = ({
  open,
  close,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname, close]);

  const navigation = [
    {
      href: "/dashboard",
      name: "Клиенты",
      icon: ListBulletIcon,
    },
    {
      href: "/dashboard/new",
      name: "Добавить",
      icon: PlusIcon,
    },
  ];

  const handleLogout = () => {
    console.log("🚀 ~ file: navbar.tsx:26 ~ handleLogout ~ logout");
    router.replace("/");
  };

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Открыть главное меню</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/dashboard">
                <RocketLaunchIcon width={28} />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "flex gap-2 rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {React.createElement<any>(item.icon, { width: 16 })}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
              onClick={handleLogout}
            >
              Выход
            </button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} passHref legacyBehavior>
              <Disclosure.Button
                as="a"
                className={clsx(
                  pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Disclosure.Button>
            </Link>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default Navbar;
