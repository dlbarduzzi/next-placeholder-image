import type { StaticImageData } from "next/image"

import AutumnImage from "@/../public/images/autumn.jpg"
import BeachImage from "@/../public/images/beach.jpg"
import CityscapeImage from "@/../public/images/cityscape.jpg"
import DesertImage from "@/../public/images/desert.jpg"
import FlowerImage from "@/../public/images/flower.jpg"
import MountainImage from "@/../public/images/mountain.jpg"
import SunsetImage from "@/../public/images/sunset.jpg"
import WinterImage from "@/../public/images/winter.jpg"

import { Container } from "@/components/container"
import { StaticImage } from "@/components/images/static"

import { cn } from "@/lib/utils"

type FileImage = {
  id: number
  src: StaticImageData
  title: string
  size: string
}

const fileImages: FileImage[] = [
  {
    id: 1,
    src: SunsetImage,
    title: "Sunset Over the Ocean",
    size: "3.2MB",
  },
  {
    id: 2,
    src: MountainImage,
    title: "Mountain Range",
    size: "4.5MB",
  },
  {
    id: 3,
    src: CityscapeImage,
    title: "Cityscape at Night",
    size: "5.0MB",
  },
  {
    id: 4,
    src: AutumnImage,
    title: "Autumn Forest",
    size: "2.8MB",
  },
  {
    id: 5,
    src: BeachImage,
    title: "Tropical Beach",
    size: "4.1MB",
  },
  {
    id: 6,
    src: DesertImage,
    title: "Desert Dunes",
    size: "3.7MB",
  },
  {
    id: 7,
    src: WinterImage,
    title: "Winter Wonderland",
    size: "4.9MB",
  },
  {
    id: 8,
    src: FlowerImage,
    title: "Flower Garden",
    size: "3.3MB",
  },
]

export default function Page() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <section aria-labelledby="home-page">
        <h2 id="home-page" className="sr-only">
          Home page
        </h2>
      </section>
      <Container className="space-y-12 py-8">
        <div>
          <h2
            className={cn(
              "text-2xl font-bold tracking-tight text-gray-800 dark:text-neutral-200"
            )}
          >
            Static Images
          </h2>
          <div className="pt-8">
            <ul
              role="list"
              className={cn(
                "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6",
                "lg:grid-cols-4 xl:gap-x-8"
              )}
            >
              {fileImages.map(fi => (
                <li key={fi.id}>
                  <div
                    className={cn(
                      "group relative block aspect-[10/12] w-full overflow-hidden",
                      "rounded-lg focus-within:ring-2 focus-within:ring-offset-2",
                      "bg-gray-100 focus-within:ring-gray-900",
                      "focus-within:ring-offset-white",
                      "dark:bg-neutral-700/30 dark:focus-within:ring-neutral-50",
                      "dark:focus-within:ring-offset-gray-900"
                    )}
                  >
                    <StaticImage src={fi.src} alt={fi.title} />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">View details for {fi.title}</span>
                    </button>
                  </div>
                  <div className="px-1 pt-2">
                    <p
                      className={cn(
                        "pointer-events-none block truncate text-sm font-medium",
                        "text-gray-900 dark:text-neutral-200"
                      )}
                    >
                      {fi.title}
                    </p>
                    <p
                      className={cn(
                        "pointer-events-none block text-sm font-medium",
                        "text-gray-500 dark:text-neutral-400"
                      )}
                    >
                      {fi.size}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2
            className={cn(
              "text-2xl font-bold tracking-tight text-gray-800 dark:text-neutral-200"
            )}
          >
            Dynamic Images
          </h2>
        </div>
        <div>
          <h2
            className={cn(
              "text-2xl font-bold tracking-tight text-gray-800 dark:text-neutral-200"
            )}
          >
            Animated Images
          </h2>
        </div>
      </Container>
    </div>
  )
}
