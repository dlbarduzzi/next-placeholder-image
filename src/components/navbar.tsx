import Link from "next/link"

import { Container } from "./container"
import { Logo, LogoSm } from "./logo"
import { ToggleTheme } from "./toggle-theme"

import { cn } from "@/lib/utils"

export async function Navbar() {
  return (
    <nav
      className={cn(
        "border-b border-b-gray-200 bg-white",
        "dark:border-b-neutral-700/60 dark:bg-neutral-900"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "focus-visible:outline focus-visible:outline-2",
                "focus-visible:outline-offset-4 focus-visible:outline-gray-900",
                "dark:focus-visible:outline-neutral-50"
              )}
            >
              <Logo className="hidden sm:block" />
              <LogoSm className="sm:hidden" />
              <span className="sr-only">Link to homepage.</span>
            </Link>
          </div>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                prefetch={false}
                className={cn(
                  "text-[13px] font-medium transition-colors",
                  "focus:outline-none focus-visible:outline",
                  "focus-visible:outline-2 focus-visible:outline-offset-2",
                  "text-gray-900 hover:text-gray-600 focus-visible:outline-gray-900",
                  "dark:text-neutral-200 dark:hover:text-neutral-50",
                  "dark:focus-visible:outline-neutral-50"
                )}
              >
                Static
              </Link>
            </li>
            <li>
              <Link
                href="/dynamic"
                prefetch={false}
                className={cn(
                  "text-[13px] font-medium transition-colors",
                  "focus:outline-none focus-visible:outline",
                  "focus-visible:outline-2 focus-visible:outline-offset-2",
                  "text-gray-900 hover:text-gray-600 focus-visible:outline-gray-900",
                  "dark:text-neutral-200 dark:hover:text-neutral-50",
                  "dark:focus-visible:outline-neutral-50"
                )}
              >
                Dynamic
              </Link>
            </li>
            <li>
              <Link
                href="/animated"
                prefetch={false}
                className={cn(
                  "text-[13px] font-medium transition-colors",
                  "focus:outline-none focus-visible:outline",
                  "focus-visible:outline-2 focus-visible:outline-offset-2",
                  "text-gray-900 hover:text-gray-600 focus-visible:outline-gray-900",
                  "dark:text-neutral-200 dark:hover:text-neutral-50",
                  "dark:focus-visible:outline-neutral-50"
                )}
              >
                Animated
              </Link>
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
