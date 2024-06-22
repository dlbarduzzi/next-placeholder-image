import type { StaticImageData } from "next/image"

import Image from "next/image"

import { cn } from "@/lib/utils"

type StaticImageProps = {
  src: StaticImageData
  alt: string
}

export function StaticImage({ src, alt }: StaticImageProps) {
  return (
    <Image
      src={src}
      fill
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      className={cn(
        "pointer-events-none object-cover transition-opacity group-hover:opacity-75"
      )}
    />
  )
}
