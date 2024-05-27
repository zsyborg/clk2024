import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { siteConfig } from "@/config/site"
import { cn } from "@/utils/cn"
import { IconButton } from "./ui/icon-button"
import { Typography } from "./ui/typography"
import ConnectWalletButton from "@/components/connect-wallet-button"

const navigation = [


  { name: 'Home', href: '/', current: true },
  { name: 'FAQS', href: '/faqs', current: false },
  { name: 'Stats', href: '/stats', current: false },
  { name: 'Invite', href: '/invite', current: false },
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
     
        
      <div className="container mx-auto flex justify-center content-center w-full items-center p-4">
       

        {/* <ul className="ml-10 invisible items-center gap-6 md:flex">
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
          </li>
        </ul>  */}
            <ConnectWalletButton/>

        {/* <div className="flex flex-1 items-center justify-end gap-2">
          <IconButton className="md:hidden">
            <MenuIcon />
          </IconButton>
        </div> 
      */}
      </div>
    </header>
  )
}
