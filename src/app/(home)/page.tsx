import { Container } from "@/components/container"

export default function Page() {
  return (
    <div className="bg-white">
      <section aria-labelledby="home-page">
        <h2 id="home-page" className="sr-only">
          Home page
        </h2>
      </section>
      <Container className="py-8">Welcome!</Container>
    </div>
  )
}
