"use client"

import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu"
import * as React from "react"

import { cn } from "@/lib/utils"

const DropdownMenu = RadixDropdownMenu.Root
const DropdownMenuGroup = RadixDropdownMenu.Group
const DropdownMenuTrigger = RadixDropdownMenu.Trigger

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-56 overflow-hidden rounded-md border px-0 py-1 shadow-lg",
        "border-gray-200 bg-white",
        "dark:border-neutral-700/60 dark:bg-neutral-900",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </RadixDropdownMenu.Portal>
))

DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Item
    ref={ref}
    className={cn(
      "group flex cursor-pointer select-none items-center gap-x-3 px-4 py-2",
      "text-sm outline-none transition-colors data-[disabled]:pointer-events-none",
      "text-gray-600 focus:bg-gray-100 focus:text-gray-900",
      "dark:text-neutral-200 dark:focus:bg-neutral-700/50 dark:focus:text-gray-50",
      className
    )}
    {...props}
  />
))

DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Separator
    ref={ref}
    className={cn("my-1 h-px bg-gray-200 dark:bg-neutral-700/60", className)}
    {...props}
  />
))

DropdownMenuSeparator.displayName = RadixDropdownMenu.Separator.displayName

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
