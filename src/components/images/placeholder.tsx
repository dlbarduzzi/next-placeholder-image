import { cn } from "@/lib/utils"
import { getStaticImage } from "@/server/static-image"
import Image from "next/image"

type PlaceholderImageProps = {
  src: string
  alt: string
}

export async function PlaceholderImage({ src, alt }: PlaceholderImageProps) {
  const resp = await getStaticImage(`./public${src}`)

  if (!resp.ok) {
    return null
  }

  return (
    <Image
      src={src}
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
