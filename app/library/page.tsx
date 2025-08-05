import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Library | Minh Anh Dong Nguyen",
  description: "Books, articles, and resources that have influenced me",
}

export default function Library() {
  const books = [
    {
      title: "The First Man",
      author: "Albert Camus",
      description:
        "An unfinished autobiographical novel that explores the author's early life in Algeria, reflecting on themes of identity, memory, and the search for meaning amidst personal and cultural upheaval.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "the-first-man",
    },
    {
      title: "The Idiot",
      author: "Fyodor Dostoevsky",
      description:
        "A profound exploration of innocence, morality, and the complexities of human nature through the story of Prince Myshkin, whose goodness and purity make him appear foolish in the corrupt society of 19th century Russia.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "the-idiot",
    },
    {
      title: "Ecce Homo",
      author: "Friedrich Nietzsche",
      description:
        "An autobiographical work in which Nietzsche reflects on his life, philosophy, and works, exploring themes of self-overcoming, individualism, and the rejection of conventional morality.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "ecce-homo",
    },
    {
      title: "The Gambler",
      author: "Fyodor Dostoevsky",
      description:
        "A psychological novel that delves into the life of a young man caught in the compulsive cycle of gambling, examining themes of obsession, desperation, and the human need for meaning and escape.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "the-gambler",
    },
    {
      title: "Resistance, Rebellion, and Death",
      author: "Albert Camus",
      description:
        "A collection of philosophical essays exploring themes of existentialism, the human struggle against oppression, the nature of rebellion, and the search for meaning in a chaotic world.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "resistance-rebellion-and-death",
    },
    {
      title: "The Plague",
      author: "Albert Camus",
      description:
        "An existential novel set in a town struck by an outbreak of plague, exploring themes of suffering, survival, and the human condition in the face of an indifferent universe.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "the-plague",
    },
    {
      title: "Lord of the Flies",
      author: "William Golding",
      description:
        "A group of boys stranded on an uninhabited island who descend into savagery, exploring themes of civilization, human nature, and morality.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "lord-of-the-flies",
    },
    {
      title: "The Trial",
      author: "Franz Kafka",
      description:
        "A nightmarish novel about Josef K., a man who is arrested and prosecuted by a mysterious authority without ever knowing his crime, highlighting themes of bureaucracy, guilt, and existential dread.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "the-trial",
    },
    {
      title: "Homo Deus",
      author: "Yuval Noah Harari",
      description:
        "Explores the future of humanity, predicting how technology, AI, and biotech may redefine human purpose and give rise to a new, god-like species.",
      image: "/placeholder.svg?height=450&width=300",
      category: "History",
      slug: "homo-deus",
    },
    {
      title: "White Nights",
      author: "Fyodor Dostoevsky",
      description:
        "A lonely dreamer who falls in love with a young woman over four nights, only to face heartbreak when she reunites with her ex lover.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "white-nights",
    },
    {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      description:
        "A tragic novel exploring love, infidelity, and societal expectations through the doomed affair of Anna and Count Vronsky, set against the backdrop of 19th-century Russian aristocracy.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "anna-karenina",
    },
    {
      title: "The Black Swan",
      author: "Nassim Nicholas Taleb",
      description:
        'Talks about the impact of rare, unpredictable events and how humans often fail to anticipate them due to cognitive biases, shaping history, markets, and daily lives in unexpected ways called "black swans".',
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "black-swan",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      author: "Robin Sharma",
      description:
        "A high-powered lawyer who abandons his materialistic life after a health scare and embarks on a spiritual journey to find purpose, balance, and fulfillment.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Self-Improvement",
      slug: "monk-who-sold-his-ferrari",
    },
    {
      title: "Human, All Too Human",
      author: "Friedrich Nietzsche",
      description:
        "A collection of aphorisms where Nietzsche critiques metaphysics, morality, and human nature, emphasizing the psychological and historical forces that shape our beliefs.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "human-all-too-human",
    },
    {
      title: "The Genealogy of Morals",
      author: "Friedrich Nietzsche",
      description:
        "Explores the origins of moral values, arguing that modern morality comes from a reversal of noble ideals. Nietzsche critiques guilt, asceticism, and altruism, tracing their roots to power dynamics and societal shifts.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "genealogy-of-morals",
    },
    {
      title: "Thus Spoke Zarathustra",
      author: "Friedrich Nietzsche",
      description:
        "A philosophical novel that presents the teachings of Zarathustra, a prophet-like figure who challenges traditional morality, advocating for the Übermensch (overman) and the transformative power of self-overcoming and individualism.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "thus-spoke-zarathustra",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description:
        "A history of humankind, exploring how cognitive, agricultural, and scientific revolutions shaped human societies and our dominance over the planet.",
      image: "/placeholder.svg?height=450&width=300",
      category: "History",
      slug: "sapiens",
    },
    {
      title: "The Death of Ivan Ilyich",
      author: "Leo Tolstoy",
      description:
        "Story of a high-ranking judge who, after being diagnosed with a terminal illness, confronts the meaninglessness of his life and the inevitability of death, leading to a profound spiritual awakening.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "death-of-ivan-ilyich",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description:
        "Follows the psychological torment of Rodion Raskolnikov, a young law student who commits a murder, exploring themes of guilt, redemption, and the moral consequences of his actions.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "crime-and-punishment",
    },
    {
      title: "The Myth of Sisyphus",
      author: "Albert Camus",
      description:
        "A philosophical essay that examines the absurdity of life, using the myth of Sisyphus to illustrate humanity's struggle for meaning in an indifferent universe, ultimately advocating for the acceptance of life's meaninglessness.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "myth-of-sisyphus",
    },
    {
      title: "Notes from the Underground",
      author: "Fyodor Dostoevsky",
      description:
        "A philosophical novella narrated by a disillusioned and isolated man, exploring themes of free will, human nature, and the contradictions within society and the self.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "notes-from-underground",
    },
    {
      title: "The House of the Dead",
      author: "Fyodor Dostoevsky",
      description:
        "Recounts the author's experiences in a Siberian prison camp, exploring themes of suffering, human resilience, and the dehumanizing effects of imprisonment.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "house-of-the-dead",
    },
    {
      title: "The Rebel",
      author: "Albert Camus",
      description:
        "A philosophical essay exploring the nature of rebellion, revolution, and the search for meaning in a world marked by suffering, injustice, and absurdity.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Philosophy",
      slug: "the-rebel",
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      description:
        "Follows the lives of three brothers—each embodying different aspects of human nature—while exploring themes of faith, doubt, free will, morality, and the search for meaning in life.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "brothers-karamazov",
    },
    {
      title: "The Narrow Road to the Deep North",
      author: "Richard Flanagan",
      description:
        "A novel set during World War II, focusing on the experiences of a young Australian doctor who is captured by the Japanese and forced to work on the Thai-Burma Death Railway, exploring themes of survival, love, and the trauma of war.",
      image: "/placeholder.svg?height=450&width=300",
      category: "Literature",
      slug: "narrow-road-deep-north",
    },
  ]

  const categories = [...new Set(books.map((book) => book.category))]

  return (
    <main className="container mx-auto max-w-5xl p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold">Library</h1>
      <p className="mb-10 text-muted-foreground">
        Some brief review of books I've read in the past year. Currently reading The Rebel and A happy death by Albert
        Camus and Twilight of the Idol by Nietzche
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">All</button>
        {categories.map((category, index) => (
          <button key={index} className="rounded-full bg-muted px-4 py-1 text-sm font-medium hover:bg-muted/80">
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col rounded-lg border shadow-sm">
            <div className="relative mx-auto h-64 w-48 overflow-hidden pt-6">
              <Image
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-cover"
                priority={index < 3} 
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-1 text-lg font-bold">{book.title}</h3>
              <p className="mb-4 text-sm text-primary">by {book.author}</p>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{book.description}</p>
              <div className="flex justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs">{book.category}</span>
                <Link href={`/library/${book.slug}`} className="font-bold text-primary underline hover:opacity-80">
                  Notes →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
