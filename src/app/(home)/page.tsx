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
import { DynamicImage } from "@/components/images/dynamic"
import { PlaceholderImage } from "@/components/images/placeholder"
import { StaticImage } from "@/components/images/static"

import { cn } from "@/lib/utils"

type FileImage = {
  id: number
  src: string
  url: string
  image: StaticImageData
  title: string
  size: string
}

const fileImages: FileImage[] = [
  {
    id: 1,
    src: "/images/sunset.jpg",
    url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9",
    image: SunsetImage,
    title: "Sunset Over the Ocean",
    size: "3.2MB",
  },
  {
    id: 2,
    src: "/images/mountain.jpg",
    url: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd",
    image: MountainImage,
    title: "Mountain Range",
    size: "4.5MB",
  },
  {
    id: 3,
    src: "/images/cityscape.jpg",
    url: "https://images.unsplash.com/photo-1558369178-6556d97855d0",
    image: CityscapeImage,
    title: "Cityscape at Night",
    size: "5.0MB",
  },
  {
    id: 4,
    src: "/images/autumn.jpg",
    url: "https://images.unsplash.com/photo-1518802508264-76256089cddb  ",
    image: AutumnImage,
    title: "Autumn Forest",
    size: "2.8MB",
  },
  {
    id: 5,
    src: "/images/beach.jpg",
    url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
    image: BeachImage,
    title: "Tropical Beach",
    size: "4.1MB",
  },
  {
    id: 6,
    src: "/images/desert.jpg",
    url: "https://images.unsplash.com/photo-1568801556940-e5b3a55fa6ea",
    image: DesertImage,
    title: "Desert Dunes",
    size: "3.7MB",
  },
  {
    id: 7,
    src: "/images/winter.jpg",
    url: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39",
    image: WinterImage,
    title: "Winter Wonderland",
    size: "4.9MB",
  },
  {
    id: 8,
    src: "/images/flower.jpg",
    url: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51",
    image: FlowerImage,
    title: "Flower Garden",
    size: "3.3MB",
  },
]

export default function Page() {
  return (
    <div className="bg-white">
      <section aria-labelledby="home-page">
        <h2 id="home-page" className="sr-only">
          Home page
        </h2>
      </section>
      <Container className="space-y-12 py-8">
        <div>
          <div className="border-b border-b-gray-200 pb-1">
            <h2 id="static" className="text-2xl font-bold tracking-tight text-gray-800">
              Static Images
            </h2>
          </div>
          <div>
            <p className="pt-6 text-sm uppercase italic text-gray-500">
              Blur / Default
            </p>
            <div className="pt-6">
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
                        "rounded-lg bg-gray-100 focus-within:ring-2",
                        "focus-within:ring-gray-900 focus-within:ring-offset-2",
                        "focus-within:ring-offset-white"
                      )}
                    >
                      <StaticImage src={fi.image} alt={fi.title} />
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
                          "text-gray-900"
                        )}
                      >
                        {fi.title}
                      </p>
                      <p
                        className={cn("pointer-events-none block text-sm font-medium")}
                      >
                        {fi.size}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6">
            <p className="pt-6 text-sm uppercase italic text-gray-500">
              Blur / Plaiceholder
            </p>
            <div className="pt-6">
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
                        "rounded-lg bg-gray-100 focus-within:ring-2",
                        "focus-within:ring-gray-900 focus-within:ring-offset-2",
                        "focus-within:ring-offset-white"
                      )}
                    >
                      <PlaceholderImage src={fi.src} alt={fi.title} />
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
                          "text-gray-900"
                        )}
                      >
                        {fi.title}
                      </p>
                      <p
                        className={cn("pointer-events-none block text-sm font-medium")}
                      >
                        {fi.size}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b border-b-gray-200 pb-1">
            <h2
              id="dynamic"
              className="text-2xl font-bold tracking-tight text-gray-800"
            >
              Dynamic Images
            </h2>
          </div>
          <div>
            <p className="pt-6 text-sm uppercase italic text-gray-500">
              Blur / Plaiceholder
            </p>
            <div className="pt-6">
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
                        "rounded-lg bg-gray-100 focus-within:ring-2",
                        "focus-within:ring-gray-900 focus-within:ring-offset-2",
                        "focus-within:ring-offset-white"
                      )}
                    >
                      <DynamicImage url={fi.url} alt={fi.title} />
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
                          "text-gray-900"
                        )}
                      >
                        {fi.title}
                      </p>
                      <p
                        className={cn(
                          "pointer-events-none block text-sm font-medium",
                          "text-gray-500"
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
        </div>
      </Container>
    </div>
  )
}
