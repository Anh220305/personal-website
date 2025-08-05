import type { Metadata } from "next"
import { PerfumeViewerClient } from "./client"

export const metadata: Metadata = {
  title: "Scent Collection | Minh Anh Dong Nguyen",
  description: "My personal perfume collection and reviews",
}

interface PerfumeReview {
  name: string
  rating: string
  review: string
}

const perfumeReviews: PerfumeReview[] = [
  {
    name: "Phlur not your baby",
    rating: "6/10",
    review: "Powdery, sweet scent but not too powdery.",
  },
  {
    name: "Phlur missing person",
    rating: "8/10",
    review: "Really unique scent, had a point where I purchased their body wash and lotion because I liked it so much.",
  },
  {
    name: "Valentino born in roma",
    rating: "5/10",
    review: "Sweet scent, a bit too floral for my liking.",
  },
  {
    name: "Replica when the rain stops",
    rating: "6/10",
    review: "Very light, clean scent.",
  },
  {
    name: "Jo Malone Silver Birch & Lavender",
    rating: "7/10",
    review: "More masculine, smells almost like an essential oil bottle.",
  },
  {
    name: "Jo Malone Myrrh & Tonka",
    rating: "8/10",
    review: "Very unisex, classic woody notes",
  },
  {
    name: "Gucci Bloom",
    rating: "6/10",
    review: "Unique floral scent, not for me though, lots of jasmine notes",
  },
  {
    name: "Indigo Nest New York",
    rating: "7.5/10",
    review: "Sweet, fruity, nice summer scent",
  },
  {
    name: "Jo Malone wood sage and sea salt",
    rating: "8/10",
    review: "Classic woody scent, not too strong or overpowering",
  },
  {
    name: "Prada Candy",
    rating: "8/10",
    review: "Sweet candylike scent but not too much",
  },
  {
    name: "Jo Malone Pomegranate Noir",
    rating: "9/10",
    review:
      "Smells like the name, like a pomegranate tree even though I don't think pomegranate has a smell, the scent speaks for itself.",
  },
  {
    name: "Aqua Allegoria Mandarine Basilic",
    rating: "7/10",
    review:
      "Used to wear this scent all day for a good month, very citrusy, clean but doesn't smell like a cheap air freshener.",
  },
  {
    name: "Prada Paradoxe",
    rating: "8/10",
    review: "Warm floral scent, hints of white musk. A bit sweet but also musky.",
  },
  {
    name: "Replica Lazy Sunday Morning",
    rating: "7.5/10",
    review: "Smells like fresh linen but not cheap detergent, clean scent.",
  },
  {
    name: "Marc Jacobs Daisy Ever So Fresh",
    rating: "7/10",
    review: "Unique daisy scent",
  },
  {
    name: "Aesop Eidesis",
    rating: "7/10",
    review: "Musky, unisex scent. Not very long wearing though especially for the price point",
  },
  {
    name: "Commodity Gold",
    rating: "9/10",
    review:
      "One of my current favourites, perfect for fall, it's like sitting in a campfire roasting marshmallows. Such a unique scent, and not too overpowering.",
  },
  {
    name: "Jo Malone Hinoki and Cedarwood",
    rating: "9/10",
    review:
      "I find Jo malone scents don't last that long, but I really like their cologne intense line. This, in particular, smells very warm, musky, and woody, but the hinoki nodes add a bit of a kick to it that makes it one of my favorites.",
  },
  {
    name: "Glossier You",
    rating: "7/10",
    review: "Smells different on different people, on me its musky and has hints of black pepper",
  },
  {
    name: "Glossier You Reve",
    rating: "8/10",
    review:
      "A lot of people say this smells like grape candy. I don't like the initial scent on me but after it dies down, it comes to a beautiful skin like scent.",
  },
  {
    name: "Jo Malone English Pear and Freesia",
    rating: "9.5/10",
    review:
      "This is my third bottle now. It's class in a bottle. I've been using this scent since grade 12, definitely very skin like and unique but not so much an attention grabber.",
  },
  {
    name: "Burberry Her",
    rating: "8/10",
    review: "Very sweet scent, first nodes would be floral and strawberry milk",
  },
  {
    name: "Kayali Vanilla 28",
    rating: "9.5/10",
    review: "insanely yummy. I used to not be into vanilla scents until I tried this out. Its viral for a reason.",
  },
  {
    name: "Lush Turmeric Latte",
    rating: "7.5/10",
    review: "Great scent for the fall, has a warm latte scent with a kick of spice from the turmeric.",
  },
  {
    name: "Ellis Brooklyn Apple Love",
    rating: "7/10",
    review: "Smells like an apple but not a roomspray.",
  },
  {
    name: "Miss Dior",
    rating: "8/10",
    review: "Sweet floral scent, sort of powdery",
  },
  {
    name: "Tom Ford Cherry Smoke",
    rating: "10/10",
    review: "ABSOLUTE CINEMA. SHOWSTOPPER. WONDROUS",
  },
  {
    name: "The Maker Dream",
    rating: "11/10",
    review:
      "Literally broke my scale. This is so underrated but its a very sophisticated vanilla scent that has some musky nodes, so its not too sweet.",
  },
  {
    name: "YSL Libre",
    rating: "7/10",
    review:
      "I can't really stand this. I know it's a best seller but this is just too strong for me, I'm more of a woody/clean scent person. However, it is very long lasting and quite a mature scent. I would wear this if I'm going to a tech conference.",
  },
  {
    name: "Dedcool XtraMilk",
    rating: "8.5/10",
    review:
      "Love this scent. It's milky, very clean, and has a very skin-like scent. If it lasted longer it would've been perfect",
  },
  {
    name: "Burberry Goddess",
    rating: "7/10",
    review:
      "Sadly this is not for me gang, it's nowhere I smell the vanilla. Almost like an old lady who's just really rich.",
  },
  {
    name: "Maison Louis Marie No. 14 Icila",
    rating: "8/10",
    review: "very clean unique floral scent, it's great for everyday wear",
  },
  {
    name: "Replica Matcha Meditation",
    rating: "9/10",
    review: "Smells like…matcha meditation lol.",
  },
  {
    name: "Le labo santal 33",
    rating: "9/10",
    review: "Nothing beats le labo, such a classic, woody smell",
  },
  {
    name: "Phlur Solar Power",
    rating: "",
    review: "",
  },
  {
    name: "NETTE the vanille",
    rating: "7/10",
    review: "creamy vanilla with hints of matcha and musk.",
  },
  {
    name: "My Way Armani",
    rating: "9/10",
    review: "Usually do not like floral scents but this one is really nice. I love the tuberose in this",
  },
  {
    name: "Ellis Brooklyn Myth",
    rating: "6/10",
    review: "floral, woody, musky, jasmine, nothing crazy",
  },
  {
    name: "Replica beach walk",
    rating: "8/10",
    review: "bergamot, lemon, citrusy but not enough to give you a headache. Very clean scent and good for everyday.",
  },
  {
    name: "Nest Wild Poppy",
    rating: "7/10",
    review: "Floral poppy scent, very rose scent but not too obvious or let's say its not a classic rose",
  },
  {
    name: "Rosie by rosie jane",
    rating: "9/10",
    review:
      "Used to be my all time high school favourite. It's a really unique rose scent (doesn' smell like air freshener) and it's really skin like, like you just bath in goddess scent rose filled bath water lol. Not very long lasting though.",
  },
  {
    name: "Who is Elijah Nomad",
    rating: "8/10",
    review: "Affordable, smells very similar to baccarat rouge 540",
  },
  {
    name: "Who is Elijah Wall Street",
    rating: "8.5/10",
    review:
      "Smells like you have money, woody, musky. I've gotten compliments every time I wear this scent both from men and women. I'm telling you, this is the one. It's not something I would repurchase since it isn't a wow enough for me to use it again and again, but its definitely an attention grabber.",
  },
  {
    name: "Diptyque Do Son",
    rating: "6/10",
    review: "Is it just me or do I just not like this scent? I can't take the jasmine here.",
  },
]

export default function ScentPage() {
  const topTier = perfumeReviews.filter((p) => Number.parseFloat(p.rating.split("/")[0]) >= 9 && p.rating !== "")

  const midTier = perfumeReviews.filter(
    (p) =>
      Number.parseFloat(p.rating.split("/")[0]) >= 7 &&
      Number.parseFloat(p.rating.split("/")[0]) < 9 &&
      p.rating !== "",
  )

  const lowerTier = perfumeReviews.filter((p) => Number.parseFloat(p.rating.split("/")[0]) < 7 && p.rating !== "")

  const unrated = perfumeReviews.filter((p) => p.rating === "")

  return (
    <main className="container mx-auto max-w-4xl p-4 md:p-8">
      <h1 className="mb-8 text-3xl font-bold">Scent Collection</h1>

      
      <div className="mb-12">
        <PerfumeViewerClient className="w-full" />
      </div>

      
      <div className="mb-8">
        <p className="text-lg text-muted-foreground mb-4">
          This is a fun little corner for a hobby in perfumery. Above are my top 3 favourite perfumes.
        </p>
        <p>
          <a
            href="https:
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium inline-flex items-center"
          >
            View my complete perfume collection and notes
            <svg
              xmlns="http:
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </p>
      </div>
    </main>
  )
}
