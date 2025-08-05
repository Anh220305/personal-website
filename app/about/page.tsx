import type { Metadata } from "next"
import AsciiTorusKnotContainer from "@/components/ascii-torusknot-container"

export const metadata: Metadata = {
  title: "About | Minh Anh Dong Nguyen",
  description: "Learn more about Minh Anh Dong Nguyen",
}

export default function About() {
  return (
    <main className="container mx-auto max-w-3xl p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold text-center">About Me</h1>

      <div className="mb-12 flex justify-center">
        <div className="w-full max-w-[350px]">
          <AsciiTorusKnotContainer />
        </div>
      </div>

      <section className="mb-10">
        <p className="mb-4 text-lg">
          <strong>Hello! Xin chào! こんにちは!</strong>
        </p>
        <p className="mb-6">
          I'm Anh. I'm drawn to hard questions at the edge of statistics, systems, and meaning. I build and think
          obsessively until something cracks open while writing to make sense of the in between.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Currently:</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Studying Computer Science & Statistics with a Philosophy minor at the University of Toronto</li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Previously:</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>
            Founded <span className="font-bold text-primary">Meraki</span>, a collective and coworking space in Toronto for engineers, artists and builders working on passion projects.
          </li>
          <li>Built and pitched my first app at 17 at C2 Montreal, which led me into the startup world</li>
          <li>
            Interned at various AI startups: video game/AI governance/stealths mostly building agents and wrappers.
          </li>
          <li>
            Built some robotics projects with friends from a elevator delivery bracket bot to recently, a simple chess
            playing robot arm.
          </li>
          <li>
            Did research @Intelligent Adaptive Interventions Lab at UofT for 2 weeks (summer before uni) & realized I
            hated research so quit shortly.
          </li>
          <li>
            Volunteered to teach math and English at Buddhist temples in Vietnam throughout my high school. I'm deeply
            passionate about education and children's welfare, so if there's any opportunity to help in this space,
            please reach out!
          </li>
          <li>Competitive swimming for 4 years in Vietnam.</li>
          <li>Participated in the Founders Inc off season program</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Connect</h2>
        <p className="mb-4">
          I'm always open to interesting conversations, collaborations, or opportunities. Feel free to reach out through
          any of the following channels:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:minhanh.dongnguyen2203@gmail.com"
              className="font-bold text-primary underline hover:opacity-80"
            >
              minhanh.dongnguyen2203@gmail.com
            </a>
          </li>
          <li>
            Twitter: <span className="font-bold text-primary">@_aaanh_</span>
          </li>
          <li>
            LinkedIn: <span className="font-bold text-primary">linkedin.com/in/minhanhdongnguyen</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
