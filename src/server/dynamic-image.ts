"use server"

import { getPlaiceholder } from "plaiceholder"

type ImageAttr = {
  width: number
  height: number
  base64: string
}

type DynamicImageRes = { ok: false } | { ok: true; image: ImageAttr }

export async function getDynamicImage(url: string): Promise<DynamicImageRes> {
  const timeout = 1000 * 30 // 30 seconds.
  try {
    const resp = await fetch(url, {
      signal: AbortSignal.timeout(timeout),
      cache: "no-cache",
    })
    if (!resp.ok) {
      console.error(`get-dynamic-image:not-ok; ${resp.status} - ${resp.statusText}`)
      return { ok: false }
    }

    const buffer = Buffer.from(await resp.arrayBuffer())
    const result = await getPlaiceholder(buffer)

    const image: ImageAttr = {
      width: result.metadata.width,
      height: result.metadata.height,
      base64: result.base64,
    }

    return { ok: true, image }
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "TimeoutError") {
        console.error(`get-dynamic-image:timeout; ${error} ${timeout}s`)
        return { ok: false }
      }
    }
    console.error(error)
    console.error(`get-dynamic-image:exception; ${error}`)
    return { ok: false }
  }
}
