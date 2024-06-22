"use client"

import { useTheme } from "next-themes"

import { FaDesktop, FaSun } from "react-icons/fa"
import { RiMoonClearFill } from "react-icons/ri"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          onClick={() => setTheme(() => (theme === "dark" ? "light" : "dark"))}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
            "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700",
            "dark:bg-neutral-700/60 dark:text-neutral-400",
            "dark:hover:bg-neutral-700 dark:hover:text-neutral-200",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-gray-900",
            "dark:focus-visible:outline-neutral-50"
          )}
        >
          {theme === "dark" ? (
            <RiMoonClearFill className="h-5 w-5" aria-hidden="true" />
          ) : (
            <FaSun className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <FaSun
            className={cn(
              "h-5 w-5 transition-colors",
              "text-gray-400 group-hover:text-gray-500",
              "dark:text-neutral-400 dark:group-hover:text-neutral-200"
            )}
            aria-hidden="true"
          />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <RiMoonClearFill
            className={cn(
              "h-5 w-5 transition-colors",
              "text-gray-400 group-hover:text-gray-500",
              "dark:text-neutral-400 dark:group-hover:text-neutral-200"
            )}
            aria-hidden="true"
          />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <FaDesktop
            className={cn(
              "h-5 w-5 transition-colors",
              "text-gray-400 group-hover:text-gray-500",
              "dark:text-neutral-400 dark:group-hover:text-neutral-200"
            )}
            aria-hidden="true"
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
