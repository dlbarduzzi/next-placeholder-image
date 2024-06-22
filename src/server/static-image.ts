"use server"

import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"

type ImageAttr = {
  width: number
  height: number
  base64: string
}

type StaticImageRes = { ok: false } | { ok: true; image: ImageAttr }

export async function getStaticImage(path: string): Promise<StaticImageRes> {
  try {
    const buffer = await fs.readFile(path)
    const result = await getPlaiceholder(buffer)

    const image: ImageAttr = {
      width: result.metadata.width,
      height: result.metadata.height,
      base64: result.base64,
    }

    return { ok: true, image }
  } catch (error) {
    console.error(error)
    console.error(`get-static-image:exception; ${error}`)
    return { ok: false }
  }
}
