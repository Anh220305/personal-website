import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Principles | Minh Anh Dong Nguyen",
  description: "The principles and values that guide me",
}

export default function CoreValues() {
  return (
    <main className="container mx-auto max-w-3xl p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold">Principles</h1>

      <div className="prose prose-lg dark:prose-invert">
        <div className="mb-8">
          <p className="mb-4">
            Curiosity, agency and obsession are superpowers and I believe that the world moves forward because of people
            who ignore what's "realistic" and chase weird problems for no other reason than something about it is an
            itch that needs to be solved.
          </p>
        </div>

        <ol className="space-y-4 list-decimal pl-6">
          <li>Be a prism, not a line</li>
          <li>Everything in life is a compound interest</li>
          <li>
            "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point
            that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for
            others. And having no respect he ceases to love." - Dostoevsky
          </li>
          <li>Not enough time = not a priority</li>
          <li>Be intentional about the top 5 people you surround yourself with</li>
          <li>Don't ask, don't get</li>
          <li>Play long games with long-term people</li>
          <li>
            People don't care about you that much like you think they do. Your instagram following ratio? What people
            think of your style? It doesn't matter, just live true to yourself.
          </li>
          <li>Read good books and share good books with other people.</li>
          <li>Regret comes from borrowed goals.</li>
        </ol>
      </div>
    </main>
  )
}
