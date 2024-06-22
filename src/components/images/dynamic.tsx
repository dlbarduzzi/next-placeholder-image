import Image from "next/image"

import { cn } from "@/lib/utils"
import { getDynamicImage } from "@/server/dynamic-image"

type DynamicImageProps = {
  url: string
  alt: string
}

export async function DynamicImage({ url, alt }: DynamicImageProps) {
  const resp = await getDynamicImage(url)

  if (!resp.ok) {
    return null
  }

  return (
    <Image
      src={url}
      fill
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL={resp.image.base64}
      className={cn(
        "pointer-events-none object-cover transition-opacity group-hover:opacity-75"
      )}
    />
  )
}
