import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
        welcome there
      </h1>
      <h2>i am rami</h2>
    </>
  )
}
