import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
// import ConnectWalletButton from "@/components/connect-wallet-button"
import { siteConfig } from "@/config/site"
import { cn } from "@/utils/cn"
import { IconButton } from "./ui/icon-button"
import { Typography } from "./ui/typography"
import ConnectWalletButton from "@/components/connect-wallet-button"

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
    <header className="left-0 top-0 z-20 w-full mybg">
      <div className="container mx-auto flex justify-center w-full items-center p-4">
        <a href="/" className="flex items-center">
          <img src="/assets/logo.png" className="mr-3 h-8" alt={siteConfig.name} />
          <Typography as="span" level="h6" className="whitespace-nowrap font-semibold md:inline-block">
            {siteConfig.name}
          </Typography>
        </a>

        <ul className="ml-10 items-center gap-6 md:flex">
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
        </ul>

        <div className="flex flex-1 items-center justify-end gap-2">
          {/* <ConnectWalletButton /> */}
          <IconButton className="md:hidden">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  )
}
