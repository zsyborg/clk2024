import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
// import ConnectWalletButton from "@/components/connect-wallet-button"
import { siteConfig } from "@/config/site"
import { cn } from "@/utils/cn"
import { IconButton } from "./ui/icon-button"
import { Typography } from "./ui/typography"
import ConnectWalletButton from "@/components/connect-wallet-button"

const navigation = [


  { name: 'Home', href: '/home', current: true },
  { name: 'FAQS', href: '#', current: false },
  { name: 'Stats', href: '#', current: false },
  { name: 'Invite', href: '#', current: false },
]


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}



const MenuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "FAQS",
    href: "/",
  },
  {
    text: "Stats",
    href: "/stats",
  },
  {
    text: "Invite",
    href: "/invite",
  },
]

export default function Header() {
  const { asPath } = useRouter()

  return (
    <header className="left-0 top-0 z-20 w-full">
      <Disclosure as="nav" className="glass">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-20 sm:px-6 lg:px-8">
            <div className="relative flex h-28 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 men">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-amber-400 text-black border border-r-0' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                   <ConnectWalletButton />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      <div className="container mx-auto flex justify-center w-full items-center p-4">
       

        {/* <ul className="ml-10 items-center gap-6 md:flex">
          {MenuItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.href}
                className={cn("text-white hover:underline", {
                  "text-white": item.href === "/" ? asPath === item.href : asPath.startsWith(item.href),
                })}
              >
                <Typography level="body4" className="font-semibold">
                  {item.text}
                </Typography>
              </Link>
            </li>
          ))}
          <li>
            <ConnectWalletButton/>
          </li>
        </ul> */}

        {/* <div className="flex flex-1 items-center justify-end gap-2">
          <IconButton className="md:hidden">
            <MenuIcon />
          </IconButton>
        </div> */}
      </div>
    </header>
  )
}
