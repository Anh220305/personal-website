import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

interface BookNotes {
  title: string
  author: string
  rating: string
  content: string
  quotes: string[]
}

const bookNotes: Record<string, BookNotes> = {
  "the-first-man": {
    title: "The First Man",
    author: "Albert Camus",
    rating: "7/10",
    content: `An unfinished autobiographical novel that explores the author's early life in Algeria, reflecting on themes of identity, memory, and the search for meaning amidst personal and cultural upheaval. The story follows Jacques Cormery, a young man raised in Algeria, who goes on a journey of self-discovery as he reflects on his family history, his relationship with his mother, and the challenges of living under French colonial rule. Jacque searches for his biological father, whom he never knew. Jacques attempts to understand his own roots and his place in the world. His journey forces him to confront the complex dynamics of identity, family, and the tension between French and Algerian cultures. The book examines the broader themes of the human condition that Camus often explored: isolation, existential struggle, and the search for meaning in an indifferent universe.`,
    quotes: [
      "The first man was not the first man; he was the last man.",
      "Each man is born as a stranger to himself.",
      "Man is the only creature that refuses to be what he is.",
      "What makes a man human is not his body, but his spirit.",
    ],
  },
  "the-idiot": {
    title: "The Idiot",
    author: "Fyodor Dostoevsky",
    rating: "9/10",
    content: `A profound exploration of innocence, morality, and the complexities of human nature, written by Fyodor Dostoevsky. The novel follows Prince Myshkin, a young man who returns to Russia after a long stay in a Swiss sanatorium. Myshkin, the titular "idiot," is a character defined by his profound goodness, naivety, and honesty. His innocence and purity often make him appear foolish, yet Dostoevsky portrays him as a Christ-like figure whose untainted compassion challenges the darker and more cynical sides of human nature.

It's set in a 19th-century Russian society, a society with social, political, and moral corruption. Myshkin's arrival in St. Petersburg throws him into a world of intrigue, class conflict, and complex personal relationships. He becomes entangled with a variety of characters, including the beautiful but troubled Nastasya, the virtuous Aglaya, and the cynical Rogozhin, whose passion for Nastasya leads to tragedy. Myshkin's innocence expose the hypocrisy and moral ambiguity of the people around him. While Myshkin represents a kind of idealized purity, his actions and perspectives often put him at odds with the people he encounters, who view him as naive, weak, or even "an idiot." In contrast to Myshkin, the characters around him display all the flaws of human nature—greed, jealousy, manipulation, and passion—which make them appear more "realistic" but also more tragic.`,
    quotes: [
      "To live without hope is to cease to live.",
      "Man takes pride in knowing that he has lived an honest life, but that doesn't always make him happy.",
      "Beauty is a terrible and awful thing, but it is also the most beautiful of all things.",
      "The idiot's power is not in what he does, but in what he believes.",
    ],
  },
  "ecce-homo": {
    title: "Ecce Homo",
    author: "Friedrich Nietzsche",
    rating: "7.5/10",
    content: `An autobiographical work by Friedrich Nietzsche, in which he reflects on his life, philosophy, and writings. Nietzsche's exploration of his own identity and his unique place in the world of philosophy serves as both a self-presentation and a self-critique, where he assesses his intellectual development and challenges the conventional ideas of morality, truth, and God.

In this text, Nietzsche takes on the role of both the philosopher and the prophet. He introduces his famous ideas like the "Übermensch", "eternal recurrence," and critiques of Christianity and traditional morality. Ecce Homo is an intimate portrait of Nietzsche's mind, his values, and his struggle to live authentically in a world that, according to him, is characterized by mediocrity and denial of life's fullness. Nietzsche's writing in Ecce Homo is passionate and, at times, extreme, as he seeks to articulate his "philosophy of the future." He stresses the importance of embracing life in all its complexity, including suffering and chaos, which he believes modern society and religion have long sought to suppress. In his view, the philosopher's task is not to provide solace or comfort, but to challenge accepted truths and encourage individuals to live creatively and fully.`,
    quotes: [
      "Be careful, dear reader, that you do not misunderstand me; you must understand me in my highest sense.",
      "To live is to suffer, to survive is to find some meaning in the suffering.",
      "One must still have chaos in oneself to be able to give birth to a dancing star.",
      "Ecce Homo, behold the man, a man who overcomes the herd, overcomes the mob, and becomes something greater.",
    ],
  },
  "the-gambler": {
    title: "The Gambler",
    author: "Fyodor Dostoevsky",
    rating: "6/10",
    content: `The Gambler is a novel by Fyodor Dostoevsky that talks about the psychological and existential consequences of compulsive gambling. The story follows the narrator, Alexei Ivanovich, a young man caught in the grip of addiction to roulette, as he becomes entangled in a web of personal, social, and financial turmoil. Through his exploration of the inner workings of the mind, Dostoevsky explores themes of obsession, self-destruction, and the human tendency to seek meaning through external forces. Alexei's infatuation with gambling is driven by his desire for wealth, status, and the validation of those around him, particularly his infatuation with a woman named Polina. However, his fixation on the roulette wheel grows to define his entire existence, leading him into a cycle of reckless behavior, false hope, and eventual despair.

Most interesting is how he delves into the chaos of the gambler's mind, where rational thought often gives way to irrational belief in luck, fate, and the thrill of risk-taking. The novel offers an insightful look at how addiction can become an all-consuming force, making the gambler act against his own best interests in a desperate search for meaning and escape from life's frustrations.`,
    quotes: [
      "Man is what he makes of himself.",
      "Sometimes I think that all my life I've been playing at games and that my whole life has been nothing but a great game of chance.",
      "The attraction of gambling lies in the excitement of possibility.",
      "Every man has a secret, and a deep one; and most of us have one with regard to the future.",
    ],
  },
  "resistance-rebellion-and-death": {
    title: "Resistance, Rebellion, and Death",
    author: "Albert Camus",
    rating: "6.5/10",
    content: `A collection of philosophical essays by Albert Camus that delves into the themes of human freedom, morality, and the absurdity of existence. I find this rather a difficult read without prior background. The essays explore the relationship between individual revolt and larger societal forces, examining the tension between personal integrity and the pressures of political and social systems. These essays are rich in existential philosophy. In these essays, Camus examines the concept of rebellion—not as a call for violent revolution but as an existential stance against the oppressive conditions of life and society. For Camus, rebellion is not just about political struggle but also a personal revolt against the meaninglessness of existence. He emphasizes that to rebel is to assert one's own freedom and dignity in a world that often seems indifferent to both.

One of the key essays in the collection, "The Rebel," explores the historical and philosophical origins of rebellion, tracing it from ancient philosophy to the modern era. Camus critiques both nihilism and the totalitarian ideologies that emerge from rebellion, arguing that while rebellion is necessary to fight oppression, it should not result in the creation of new forms of tyranny. He stresses the importance of maintaining moral integrity in the face of injustice and warns against the dangers of absolute ideologies that seek to impose meaning on a fundamentally meaningless world. Camus also reflects on death, both in its existential sense and as it appears in various forms of resistance. He confronts the issue of human mortality, making the case that acknowledging the absurdity of life should not lead to despair but to a fuller, more authentic engagement with life. Rather than succumbing to nihilism, Camus advocates for a form of rebellion that embraces life's fleeting beauty and affirms individual autonomy, even in the face of inevitable death. Essays in the collection are dense and philosophically challenging, Resistance, Rebellion, and Death provides insights into Camus' thought on the human condition.`,
    quotes: [
      "Rebellion cannot exist without a strange form of love.",
      "Freedom is not a gift which can be given; it is a quality which cannot be taken away.",
      "To rebel is to affirm one's value against the weight of the absurd.",
      "Rebellion is the refusal to live with the injustices of the world without seeking to impose a new, even more absurd form of justice.",
    ],
  },
  "the-plague": {
    title: "The Plague",
    author: "Albert Camus",
    rating: "9/10",
    content: `An existential novel set in Oran, which is suddenly struck by an outbreak of a plague. Dr. Bernard Rieux, who is at the forefront of the battle against the disease, as well as other townspeople whose lives are deeply affected by the epidemic, talks about human suffering, existential meaning, and the absurdity of life. Camus uses the plague as a metaphor for the arbitrary and uncontrollable forces that govern human existence. As the town is sealed off and people grapple with the horror and uncertainty of the disease, Camus talks about themes of isolation, human solidarity, and the inevitability of death. The characters' reactions to the plague, ranging from denial to resistance, reflect different philosophical perspectives on how people confront suffering and meaninglessness in life. The novel explores the human condition in the face of existential crisis. It reflects Camus' philosophy of the absurd, the idea that life is inherently meaningless, and yet humans must continue to live and act despite this.`,
    quotes: [
      "What does it mean, the plague? It means we're all in this together.",
      "Yet the memory of the plague never goes away, as no one is ever quite free of it.",
      "The truth is that everyone is guilty of something, even if it is just of being human.",
      "Each of us is alone, and what he does or doesn't do doesn't matter.",
    ],
  },
  "lord-of-the-flies": {
    title: "Lord of the Flies",
    author: "William Golding",
    rating: "6.5/10",
    content: `A dark and thought-provoking exploration of human nature, societal breakdown, and the loss of innocence. The novel follows a group of boys stranded on an uninhabited island, where their attempts to govern themselves devolve into savagery and chaos. As the boys' personalities and social dynamics clash, the story delves into the primal instincts of violence, power, and survival that emerge when civilization's constraints are stripped away. The novel examines how thin the veneer of civilization truly is, and how quickly order can unravel when individuals are no longer bound by societal rules. The two central figures—Ralph, who represents order, leadership, and rationality, and Jack, who symbolizes chaos, dominance, and savagery—embody the tension between civilization and barbarism. Their escalating conflict represents the broader human struggle between the desire for structure and the lure of anarchic freedom.

Although often regarded as a critique of humanity's inherent barbarism, the novel touches on the fragility of innocence and the powerful force of social influence. I find it a rather intense read, with sharp social commentary and psychological insights on the tension between civilization and savagery to resonate in discussion about the human behavior and societal structures.`,
    quotes: [
      "Maybe there is a beast… maybe it's only us.",
      "The things we did to the young men… had a long, long history of making things worse for everyone.",
      "Ralph wept for the end of innocence, the darkness of man's heart, and the fall through the air of a true, wise friend called Piggy.",
      "Where the world had ended, a new one began.",
    ],
  },
  "the-trial": {
    title: "The Trial",
    author: "Franz Kafka",
    rating: "9/10",
    content: `The Trial is a haunting novel that explores themes of bureaucracy, power, and existential dread. The story follows Josef K., an ordinary bank employee who is suddenly arrested for an unspecified crime. As he struggles to navigate the absurd judicial system, he finds himself trapped in a nightmarish labyrinth of endless legal proceedings, ambiguous accusations, and an indifferent, faceless authority. Kafka captures a sense of paranoia and helplessness, portraying a world where logic and justice are meaningless. The novel reflects on the dehumanizing effects of bureaucracy and the existential fear of being judged without understanding why. The more Josef K. tries to fight the system, the deeper he becomes entangled in its incomprehensible rules, mirroring the absurdity of modern life and the struggle for meaning.

The novel has a rather unsettling tone, dreamlike narrative, and its unresolved ending makes it rather frustrating`,
    quotes: [
      "Someone must have slandered Josef K., for one morning, without having done anything wrong, he was arrested.",
      "The right understanding of any matter and a misunderstanding of the same matter do not wholly exclude each other.",
      "Logic may indeed be unshakeable, but it cannot withstand a man who is determined to live.",
      'Like a dog!" he said, and it was as if the shame of it must outlive him.',
    ],
  },
  "homo-deus": {
    title: "Homo Deus: A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    rating: "8/10",
    content: `Homo Deus is a bold and speculative follow-up to Sapiens, in which Harari shifts from examining humanity's past to predicting its future. He explores how advancements in AI, biotech, and data science might reshape human civilization, potentially leading to the rise of a new species—one that transcends biological limitations. A central argument in the book is that humanity's historical struggles with famine, disease, and war are being replaced by new challenges: immortality, AI, and the pursuit of happiness through technological means. Harari suggests that as humans gain god-like powers through genetic engineering and AI, traditional humanist values—such as free will and individual autonomy—may become obsolete. One of the book's most provocative ideas is the rise of Dataism, a worldview in which data processing becomes the highest value, potentially rendering human decision-making inferior to algorithmic intelligence. Harari warns that as AI surpasses human cognition, power may shift away from individuals to corporations and governments that control vast amounts of data.

While Homo Deus is engaging and packed with fascinating insights, it is more speculative than Sapiens and sometimes paints an overly deterministic view of the future. Still, the book raises crucial questions about the ethical and philosophical implications of our technological advancements.`,
    quotes: [
      "History began when humans invented gods, and will end when humans become gods.",
      "Science is converging on an all-encompassing dogma, which says that organisms are algorithms and life is data processing.",
      "Once technology enables us to re-engineer human minds, Homo sapiens will disappear, human history will come to an end, and a completely new process will begin.",
      "The most important question in the twenty-first century is not 'What do we want to become?' but 'What do we want to want?'",
    ],
  },
  "white-nights": {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    rating: "8/10",
    content: `White Nights explores themes of loneliness, dreams, and unfulfilled love, it kind of reminded me of the movie 500 days of summer but not exactly the same. Told from the perspective of a lonely dreamer wandering the streets of St. Petersburg, the story follows his brief yet intense encounter with a young woman named Nastaya where he fell in love with her over 4 nights. 

Dostoevsky talks about the protagonist's inner world—his isolation, romantic idealism, and yearns for love from Nastaya. He's basically delusional, and lost in his own fantasies, unable to really engage with reality. Nastaya, is more grounded yet equally trapped, waiting for a lover who may never return. Their conversations oscillate between hope and despair, reflecting the transient nature of happiness and the cruelty of reality, quite relatable read for our generation I felt. Unlike Dostoevsky's later works, which focus on existential crises and morality, White Nights is a more delicate and sentimental meditation on love and longing. It resonates with anyone who has ever experienced unreciprocated love or the ache of fleeting happiness.`,
    quotes: [
      "My God, a whole moment of happiness! Is that too little for the whole of a man's life?",
      "I am a dreamer. I know so little of real life that I just can't help reliving such moments as these in my dreams.",
      "Love had come to me; I was loved. But it was too late.",
      "Happiness does not lie in happiness, but in the achievement of it.",
    ],
  },
  "anna-karenina": {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    rating: "6/10",
    content: `Disclaimer: this was a really long read and took me months to finish. 

Anna Karenina is centered around love, passion, morality, and societal constraint. Anna, is a woman who defies societal norms by engaging in an intense love affair with Count Vronsky, which ultimately leads to her downfall. The novel goes on to talk about her tragic fate with the life of Konstantin Levin, a landowner struggling to find meaning through work, marriage, and philosophical contemplation. Tolstoy writes on the inner conflicts of his characters, especially Anna, who is torn between her love for Vronsky and the expectations of Russian aristocracy. The novel delves into issues such as marriage, fidelity, gender roles, and the clash between personal desires and societal expectations. The book also explores philosophical and political debates of the time, making it not just a love story but also on human existence. It is definitely a patient read, as it is quite lengthy and slow-paced at times, but has psychological depth and intricate character development`,
    quotes: [
      "All happy families are alike; each unhappy family is unhappy in its own way.",
      "Respect was invented to cover the empty place where love should be.",
      "If you look for perfection, you'll never be content.",
      "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
    ],
  },
  "black-swan": {
    title: "The Black Swan: The Impact of the Highly Improbable",
    author: "Nassim Nicholas Taleb",
    rating: "6.5/10",
    content: `Taleb explores the role that rare, unpredictable, and high-impact events—so-called "Black Swans"—play in shaping history, economies, and human lives. These events, like the rise of the internet, financial crashes, or the 9/11 attacks, are retrospectively rationalized but rarely predicted beforehand. He argues that humans are wired to seek patterns and explanations, leading us to underestimate uncertainty and the role of randomness in shaping the world. I would say though, it is rather a bit of a difficult read and to understand without looking up background information and his writing style is a bit polarizing and is a bit frustrating to read.

A key concept in the book is our reliance on flawed models of prediction, particularly in finance, economics, and social sciences. He critiques the tendency to use past data to forecast the future, calling out experts who claim to understand risk while failing to account for outliers. He contrasts two types of environments: Mediocristan, where events are predictable and variations are small (like human height distribution), and Extremistan, where a single extreme event can drastically alter outcomes (like viral trends). He argues that most significant changes come from Extremistan, yet we still operate as if we live in Mediocristan.

He also explores cognitive biases, such as the narrative fallacy (our tendency to construct coherent stories after events occur) and the confirmation bias (our habit of seeking evidence that supports preexisting beliefs). He advocates embracing uncertainty rather than trying to eliminate it and talks about antifragility, encouraging individuals and systems to benefit from randomness rather than be harmed by it.`,
    quotes: [
      "The inability to predict outliers implies the inability to predict the course of history.",
      "We tend to use knowledge as a therapy to reassure ourselves about the world.",
      "Mild success can be explainable by skills and labor. Wild success is attributable to variance.",
      "The problem with experts is that they do not know what they do not know.",
    ],
  },
  "monk-who-sold-his-ferrari": {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    rating: "5.5/10",
    content: `The book talks about a high-powered lawyer, Julian Mantle, who suffers a heart attack due to his stressful lifestyle. This health crisis forces him to reevaluate his life, leading him to sell his material possessions like his Ferrari and goes on a journey to the Himalayas in search of spiritual enlightenment, mostly the book is about self help advice with storytelling as Julian learns ancient wisdom from the Sages of Sivana, who teach him principles for living a more fulfilling and purpose-driven life.

The core lessons revolve around mastering the mind, cultivating discipline, embracing simplicity, and finding happiness from within rather than external achievements. Sharma distills these teachings into practical exercises, such as visualization techniques, the power of positive thinking, and daily habits to enhance productivity and inner peace.

To me, the story itself feels somewhat simplistic, with Julian's transformation unfolding in a rather predictable manner. Some ideas, like the importance of setting clear goals and maintaining balance, are familiar themes found in many other self-improvement books. It's a decent read for those seeking an introduction to mindfulness and personal development. However, those looking for a more profound or original take on these concepts may find it somewhat repetitive or surface-level.`,
    quotes: [
      "Your 'I can' is more important than your IQ.",
      "Never regret your past. Rather, embrace it as the teacher that it is.",
      "The mind is a wonderful servant but a terrible master.",
      "Success on the outside means nothing unless you also have success within.",
    ],
  },
  "human-all-too-human": {
    title: "Human, All Too Human",
    author: "Friedrich Nietzsche",
    rating: "8/10",
    content: `In Human, All Too Human, Nietzsche explores the limitations of human nature and the ways in which our own psychology and biology shape our understanding of the world, critiquing both the concepts of free will and metaphysical ideas, which Nietzsche saw as illusions and also introduces the idea of "free spirit" – individuals who have transcended societal norms and conventions and religious dogma.

He talks about the weaknesses and inconsistencies of human beings, focusing on how we are driven by our instincts, emotions, and desires and that we are not entirely rational beings, but rather creatures of habit, social influences, and biological determinism. He contrasts the "higher" ideals of philosophers and religious figures with the "lower" reality of human beings, who are governed by self-interest, instinct, and the desire for power.

Throughout the text, Nietzsche also talks about the limits of reason and how it is often used to justify human suffering and oppression. He suggests that the pursuit of truth is often more about self-deception and the creation of meaning rather than the discovery of objective reality.`,
    quotes: [
      "Man is a rope, tied between beast and overman—a rope over an abyss.",
      "One must still have chaos in oneself to be able to give birth to a dancing star.",
      "Everything the State says is a lie, and everything it has it has stolen.",
      "He who despises himself still respects himself as one who despises.",
    ],
  },
  "genealogy-of-morals": {
    title: "On the Genealogy of Morals",
    author: "Friedrich Nietzsche",
    rating: "7/10",
    content: `In this book, Nietzche explores the origins and evolution of human moral values, going deeper into the concept of guilt, responsibility and the very foundation of "good and "evil", where he argues that the concepts of good and evil have not always been understood as they are today, and that society's ethical frameworks has evolved to which it contradicts with our inherent drives and instincts. Historically, "good" was associated with the nobility—synonymous with power and strength. This perspective stands in contrast to the prevailing psychological theories of his time, which attempted to explain morality through an evolutionary framework centered on altruism.

According to Nietzsche, our modern understanding of goodness comes from Christianity, which inverted the traditional value hierarchy—elevating what was once considered lower. This shift occurred because the oppressed, unable to overthrow their oppressors through force, instead redefined moral values to serve their position which he referred to as "slave morality," which emerged in opposition to the pre-Christian "master morality." As a result, virtues like compassion, selflessness, and humility are not inherent moral truths but rather products of an intellectual revolution.

As he explores guilt, bad conscience, and asceticism. Nietzsche sees punishment as an expression of anger rather than justice, linking guilt (Schuld) to debt (Schulden), where the punisher takes pleasure in retribution, while also mentioning other ideas, like the Übermensch and will to power that also appeared in his other books like thus spake zarathustra. I especially enjoyed the final section on truth, science, and humanity's search for meaning, which critiques the growing blind faith in science`,
    quotes: [
      "The slave revolt in morality begins when ressentiment itself becomes creative and gives birth to values: the resentment of the powerless turning into a system of values.",
      "He who fights with monsters should be careful lest he thereby become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
      "What is done out of love always takes place beyond good and evil.",
      "There are no facts, only interpretations.",
    ],
  },
  sapiens: {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    rating: "8.5/10",
    content: `Sapiens is a deep and detailed exploration of the history of humankind, tracing our species' journey from insignificant primates to the dominant force shaping the planet. Harari examines how cognitive, agricultural, and scientific revolutions shaped our societies, beliefs, and ways of life, offering a sweeping yet digestible account of human history.

One of the book's key insights is the power of shared myths—religions, money, nations, and even human rights—which exist only because enough people believe in them. Harari argues that these collective fictions have allowed large-scale cooperation, enabling Homo sapiens to dominate the world. He also critiques the Agricultural Revolution, often seen as a step forward for humanity, suggesting that it actually led to more suffering by trapping people in harder, more monotonous lives. A good read for anyone interested in anthropology, history and philosophy, though his speculative tone can be controversial but still remains quite a classic. He also explores the potential future of humankind, touching on genetic engineering, artificial intelligence, and the possibility of our species evolving into something entirely different.`,
    quotes: [
      "There is no justice in history.",
      "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.",
      "Money is the most universal and most efficient system of mutual trust ever devised.",
      "Ever since the Cognitive Revolution, there hasn't been a single natural way of life for Sapiens.",
    ],
  },
  "myth-of-sisyphus": {
    title: "The Myth of Sisyphus",
    author: "Albert Camus",
    rating: "9/10",
    content: `An essay by Albert Camus that explores the concept of the absurd, a central theme in Camus' philosophy. In this work, Camus takes the ancient Greek myth of Sisyphus, a king condemned to endlessly roll a boulder up a hill only for it to roll back down each time as a punishment for trying to escape death – which serves as a metaphor for the human condition. Camus uses the story of Sisyphus to illustrate the absurdity of human existence. He argues that life's lack of ultimate meaning is a fundamental paradox that humans cannot escape. Despite this, rather than resigning himself to nihilism or despair, Sisyphus becomes a symbol of defiance. Camus suggests that the recognition of the absurd does not lead to despair, but rather to freedom. By embracing the absurdity of life and continuing to live despite it, Sisyphus transcends his punishment, as the novel ends with, "One must imagine Sisyphus happy". Camus dives in the larger existential struggle that humans face: how to reconcile our yearning for meaning with a universe that does not provide it. Camus challenges the traditional philosophical responses, such as religious faith or nihilism, suggesting instead that we must accept the absurdity of life and find meaning within the struggle itself. This theme of embracing life's meaninglessness while continuing to live fully is a cornerstone of Camus' philosophy of the absurd.`,
    quotes: [
      "One must imagine Sisyphus happy",
      "There is but one truly serious philosophical problem, and that is suicide.",
      "The struggle itself… is enough to fill a man's heart. One must imagine Sisyphus happy.",
      "Life is the sum of all your choices.",
      "Absurdity is the essential concept and the first truth.",
    ],
  },
  "death-of-ivan-ilyich": {
    title: "The Death of Ivan Ilyich",
    author: "Leo Tolstoy",
    rating: "9/10",
    content: `The Death of Ivan Ilyich is a novella by Leo Tolstoy that explores profound existential themes such as the meaning of life, the inevitability of death, and the search for authenticity in a world dominated by superficiality and social conventions. The story centers on Ivan Ilyich Golovin, a high-ranking judge in 19th-century Russia, who lives a comfortable but shallow life. His world is turned upside down when he is diagnosed with a terminal illness, and the novella follows his journey as he faces the reality of his impending death.

At the start of the novel, Ivan's life appears to be a success—he has a prestigious position, a beautiful wife, and all the trappings of societal respectability. However, as he grapples with the physical pain of his illness and the emotional pain of confronting his mortality, he begins to question the meaning of his existence. Over the course of his illness, Ivan is forced to confront the lies and illusions that have shaped his life, including his empty pursuit of social status and material success. He begins to realize that he has lived according to the expectations of others rather than living an authentic life aligned with his true values.

Tolstoy's novella is a powerful meditation on the fragility of life and the fear of death. As Ivan nears his end, he experiences a profound spiritual crisis and moments of existential clarity. His eventual acceptance of his death leads to a shift in his perception of life, where he begins to understand the importance of love, compassion, and living in alignment with one's inner truth. The novella's strength lies in Tolstoy's ability to capture the inner turmoil of a man facing his own mortality, as well as his ultimate epiphany about the nature of life and death.

The work is deeply philosophical, touching on themes of faith, personal redemption, and the existential tension between living authentically and adhering to societal norms. In The Death of Ivan Ilyich, Tolstoy presents death not as a distant, abstract event but as something immediate and unavoidable that forces individuals to reevaluate their lives and their purpose. This makes the novella both an intense personal exploration and a universal meditation on the human condition.`,
    quotes: [
      "All the most important things in life are learned in the face of death.",
      "Can it be that I have not lived as I should have?",
      "Shall I go on living as I have lived?",
      "His life had been the same as the life of all men who are afraid to face the reality of death.",
    ],
  },
  "crime-and-punishment": {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    rating: "10/10",
    content: `Rodion Raskolnikov, a former student commits a brutal murder, believing that he is justified in doing so for a greater good. As the novel progresses, Raskolnikov grapples with his conscience, the consequences of his actions, and the moral and spiritual implications of his crime. He is an intelligent, proud, and deeply conflicted character who believes that certain extraordinary individuals are above the moral laws that govern ordinary people. He rationalizes the murder of Alyona Ivanovna, an old pawnbroker, by convincing himself that the money he could steal would allow him to do good in the world. This intellectual justification, however, leads to deep psychological torment as Raskolnikov begins to unravel under the weight of his guilt. The novel delves into his internal struggle as he tries to reconcile his crime with his ideals.

Sonia, a humble and devout woman who has been driven to prostitution to support her family, plays a crucial role in Raskolnikov's eventual path to redemption. Through her compassion, she provides Raskolnikov with the moral and emotional support he needs to confront his guilt. Not merely a crime story but an exploration of the moral and existential dilemmas that define the human experience. Its rich psychological depth and moral complexity make it a powerful work that challenges readers to confront the darkness within themselves and the world around them.`,
    quotes: [
      "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
      "To go wrong in one's own way is better than to go right in someone else's.",
      "Man takes pride in knowing that he has lived an honest life, but that doesn't always make him happy.",
      "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment—as well as prison.",
    ],
  },
  "notes-from-underground": {
    title: "Notes from the Underground",
    author: "Fyodor Dostoevsky",
    rating: "10/10",
    content: `A philosophical novella narrated by a disillusioned and isolated man, exploring themes of free will, human nature, and the contradictions within society and the self. It's a good introduction to Dostoevsky's writings, presented as a series of fragmented, introspective monologues. The novel presents the thoughts of an unnamed narrator, often referred to as the Underground Man, who is a retired civil servant living in St. Petersburg. The book is divided into two parts: the first being a philosophical reflection on life, human nature, and society, and the second recounting the Underground Man's personal experiences and his interactions with others.

The Underground Man is a deeply self-aware, bitter, and isolated individual. He presents himself as a man who rejects social conventions and conventional morality, seeing society as hypocritical and corrupt. He is highly critical of both the rationalism and idealism of his time, which he believes fail to account for the complexity and irrationality of human nature. He believes that human beings are fundamentally flawed and that their actions are often driven by irrational impulses rather than reason. This is exemplified by his view that people's actions are influenced by their pride and vanity, even when they know that their choices are detrimental.`,
    quotes: [
      "I am a sick man... I am a wicked man. An unattractive man. I think my liver is diseased.",
      "Man takes pride in knowing that he has lived an honest life, but that doesn't always make him happy.",
      "To be too conscious is an illness— a real thorough illness.",
      "People take pride in their rationality, but it is often just the most sophisticated way of avoiding the truth.",
    ],
  },
  "house-of-the-dead": {
    title: "The House of the Dead",
    author: "Fyodor Dostoevsky",
    rating: "9/10",
    content: `A semi-autobiographical novel that recounts the author's experiences in a Siberian prison camp, exploring themes of suffering, human resilience, and the dehumanizing effects of imprisonment. Based on his own experiences during his time in a Siberian penal colony, where he was exiled for a political crime, the book tells about the Russian prison system and delves deeply into the psychological and moral challenges faced by its inhabitants.

The story is structured as a series of reflections and narratives, written by Goryanchikov as he looks back on his time in the prison. He describes the various individuals he encounters, from hardened criminals to those who, like himself, have been caught up in the machinery of the Russian justice system, showcasing the various ways in which people respond to the dehumanizing conditions of the prison. The men in the prison are subjected to both physical and emotional degradation, and their internal struggles reveal the complexity of the human soul in extreme circumstances. Despite the pervasive brutality and moral decay in the penal colony, Dostoevsky suggests that there is still hope for redemption. Through suffering, Goryanchikov and other prisoners are forced to confront their past actions, their flaws, and their capacity for change.`,
    quotes: [
      "Man is what he eats.",
      "Prison is the place where a man is taught the most important lesson: how to suffer.",
      "The hardest thing in life is to recognize oneself.",
      "Even in a prison, one may find a kind of freedom, a freedom to transcend one's suffering.",
    ],
  },
  "the-rebel": {
    title: "The Rebel",
    author: "Albert Camus",
    rating: "9/10",
    content: `The Rebel is a philosophical essay by Albert Camus that explores the nature of rebellion, revolution, and the search for meaning in a world marked by suffering, injustice, and absurdity. Camus examines the concept of rebellion as a fundamental human reaction to oppression and suffering, and he questions the moral implications of revolutionary movements, particularly those that seek to impose absolute ideals or totalitarian regimes.

The central thesis is that rebellion, in its purest form, arises from the human desire to affirm life and dignity in the face of suffering and injustice. Camus argues that rebellion is an act of defiance against the absurdity of existence and the forces that seek to reduce individuals to mere objects. However, while rebellion is often a response to oppression, Camus warns against the dangers of turning rebellion into an ideology that seeks to impose absolute truths. He critiques both revolutionary movements and historical figures who have used violence in the name of a higher cause, such as Marxism, fascism, and the French Revolution. For Camus, rebellion is a moral act, but it must be guided by a sense of moderation and a respect for human life. Camus's reflections on these issues draw heavily from his earlier works on the absurd, particularly his argument that life is inherently meaningless and that humans must create their own values and meaning through their actions. In The Rebel, Camus extends this philosophy to the realm of political and social action, urging individuals to engage in rebellion without surrendering to the temptation of totalitarianism or dogmatic ideology.`,
    quotes: [
      "Rebellion cannot exist without a strange form of love.",
      "Everyone tries to make his life a work of art. We want love to last and we know that it does not last; even if, by some miracle, it were to last a whole lifetime, it would still be incomplete.",
      "Perhaps, in this insatiable need for perpetuation, we should better understand human suffering, if we knew that it was eternal.",
      "In default of inexhaustible happiness, eternal suffering would at least give us a destiny.",
    ],
  },
  "thus-spoke-zarathustra": {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    rating: "10/10",
    content: `A philosophical novel that presents the teachings of Zarathustra, a prophet-like figure who challenges traditional morality, advocating for the Übermensch (overman) and the transformative power of self-overcoming and individualism. It follows the journey of Zarathustra, a prophet-like figure who descends from his mountain retreat after ten years of solitude to deliver his teachings to the people. The book is divided into four parts, each containing a series of speeches, parables, and aphorisms, all centered around Zarathustra's philosophical ideas.

The core of Thus Spoke Zarathustra is Nietzsche's exploration of the idea of the "Übermensch" (Overman or Superman), a being who transcends the limitations of conventional morality and societal norms. Zarathustra's teachings emphasize the importance of self-overcoming, the will to power, and the rejection of traditional values, such as those promoted by religion and conventional morality. He advocates for the creation of new values, urging individuals to embrace their creative potential and live authentically, without being bound by external authorities. One of the most important ideas introduced in Thus Spoke Zarathustra is the concept of the "eternal recurrence," the idea that all events in life will repeat themselves infinitely. Nietzsche uses Zarathustra as a vehicle for his critique of modernity, Christianity, and the philosophical establishment of his time. He criticizes the notion of "slave morality," which he argues elevates weakness, humility, and self-sacrifice over strength, power, and self-assertion.

The teachings of Zarathustra are both liberating and challenging, encouraging readers to embrace a life of self-mastery, creativity, and authenticity. Zarathustra's philosophy demands a radical revaluation of all values, and it presents the individual with the challenge of living according to their own inner principles rather than societal expectations.`,
    quotes: [
      "Become who you are!",
      "Man is something that shall be overcome. What have you done to overcome him?",
      "God is dead! God remains dead! And we have killed him.",
      "The Übermensch shall be the meaning of the earth.",
      "Live dangerously!",
    ],
  },
  "brothers-karamazov": {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    rating: "10/10",
    content: `One of my personal favourites, though this took a couple of months to finish, I highly recommend the read. The book is a deep exploration of morality, faith, free will, and the human soul. It follows the lives of the Karamazov brothers—Dmitri, Ivan, and Alyosha—and their tumultuous relationships with their father, Fyodor Pavlovich Karamazov, a morally corrupt and indulgent man. The novel intricately examines themes of religious belief, doubt, guilt, and the complexities of human nature.

The story centers around the murder of Fyodor Pavlovich, with each of the three brothers representing different philosophical approaches to life. Dmitri, the eldest, is passionate, impulsive, and driven by sensual desires, caught in a struggle with both his father and his own moral compass. Ivan, an intellectual middle brother, is rational and skeptical, wrestling with existential questions about faith, suffering, and the existence of God. Alyosha, the youngest, is a deeply religious and compassionate man, dedicated to a monastic life, embodying Christian virtue and spirituality. Their lives are further complicated by love, jealousy, betrayal, and guilt as they grapple with the murder of their father and the trial that follows. One of the most famous parts of the novel is Ivan's "Rebellion," in which he rejects the idea of a benevolent God who allows innocent children to suffer. Ivan's position is a form of radical skepticism, questioning the nature of divine justice and the meaning of suffering. In contrast, Alyosha represents the ideal of Christian love and faith, embracing the mystery of God's will and the importance of spiritual devotion Throughout the novel, characters wrestle with their own guilt, personal responsibility, and the weight of their actions. The question of whether redemption is possible—whether one can reconcile with God and with oneself—is central to the novel's exploration of spiritual and moral growth. One of the most powerful themes of The Brothers Karamazov is the notion of forgiveness and the idea that love and compassion can lead to redemption, even in the face of overwhelming darkness. Dostoevsky's portrayal of Alyosha's spiritual journey and his capacity for love and forgiveness offers a counterpoint to the cynicism and despair that runs through the other characters, particularly Ivan and Dmitri.`,
    quotes: [
      "To love is to suffer and there can be no love without suffering.",
      "Man is what he believes.",
      "The man who lies to himself and listens to his own lie comes to such a pass that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others",
      "Everything is in the hands of man, even if he cannot see it.",
    ],
  },
  "narrow-road-deep-north": {
    title: "The Narrow Road to the Deep North",
    author: "Richard Flanagan",
    rating: "9/10",
    content: `The book is set during World War II and follows the experiences of Dorrigo Evans, an Australian surgeon, who is imprisoned in a Japanese POW camp and forced to work on the infamous Thai-Burma Railway. The narrative weaves between the horrors of the POW camps and the post-war lives of those affected, including Dorrigo's complex relationships with his family, his love affair with his uncle's wife, and his efforts to cope with the trauma he experienced. The book's central focus is the emotional and psychological toll of war, both on those who survive and those who are left behind. Dorrigo, a man who is both heroic and deeply flawed, is forced to confront the depths of his own humanity as he struggles to reconcile his actions, his survival, and the moral compromises he made during his time in captivity. The structure of the novel alternates between Dorrigo's time in the camp, the years after the war, and his reflections on his past. He has an internal struggle with his memories, guilt, and the impossibility of moving on from the horrors he witnessed is a central theme. His relationship with the people around him, especially the woman he loves, adds layers of complexity to his character, as he grapples with his own sense of identity and his feelings of impotence in the face of trauma.. The characters' attempts to make sense of their experiences and the psychological weight they carry.`,
    quotes: [
      "Sometimes the only way to survive is to keep going, no matter how bad it gets.",
      "War is not only what is fought on the battlefield, but the war that lingers in the soul.",
      "All that could be said was that he survived, and even survival was not much of a triumph.",
      "Love is the thing that keeps us alive, but sometimes it's the thing that destroys us as well.",
      "Hope is the thing that gives us life, but it is also the thing that makes us keep going when life has none.",
    ],
  },
}

const getBookImageUrl = (slug: string) => {
  switch (slug) {
    case "the-first-man":
      return "/placeholder.svg?height=450&width=300"
    case "the-idiot":
      return "/placeholder.svg?height=450&width=300"
    case "ecce-homo":
      return "/placeholder.svg?height=450&width=300"
    case "the-gambler":
      return "/placeholder.svg?height=450&width=300"
    case "resistance-rebellion-and-death":
      return "/placeholder.svg?height=450&width=300"
    case "the-plague":
      return "/placeholder.svg?height=450&width=300"
    case "lord-of-the-flies":
      return "/placeholder.svg?height=450&width=300"
    case "the-trial":
      return "/placeholder.svg?height=450&width=300"
    case "homo-deus":
      return "/placeholder.svg?height=450&width=300"
    case "white-nights":
      return "/placeholder.svg?height=450&width=300"
    case "human-all-too-human":
      return "/placeholder.svg?height=450&width=300"
    case "genealogy-of-morals":
      return "/placeholder.svg?height=450&width=300"
    case "monk-who-sold-his-ferrari":
      return "/placeholder.svg?height=450&width=300"
    case "black-swan":
      return "/placeholder.svg?height=450&width=300"
    case "anna-karenina":
      return "/placeholder.svg?height=450&width=300"
    case "sapiens":
      return "/placeholder.svg?height=450&width=300"
    case "myth-of-sisyphus":
      return "/placeholder.svg?height=450&width=300"
    case "death-of-ivan-ilyich":
      return "/placeholder.svg?height=450&width=300"
    case "crime-and-punishment":
      return "/placeholder.svg?height=450&width=300"
    case "notes-from-underground":
      return "/placeholder.svg?height=450&width=300"
    case "house-of-the-dead":
      return "/placeholder.svg?height=450&width=300"
    case "the-rebel":
      return "/placeholder.svg?height=450&width=300"
    case "thus-spoke-zarathustra":
      return "/placeholder.svg?height=450&width=300"
    case "brothers-karamazov":
      return "/placeholder.svg?height=450&width=300"
    case "narrow-road-deep-north":
      return "/placeholder.svg?height=450&width=300"
    default:
      return "/placeholder.svg?height=450&width=300"
  }
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const book = bookNotes[params.slug]

  if (!book) {
    return {
      title: "Book Not Found | Library",
      description: "The requested book notes could not be found",
    }
  }

  return {
    title: `${book.title} Notes | Library`,
    description: `Reading notes for ${book.title} by ${book.author}`,
  }
}

export default function BookNotesPage({
  params,
}: {
  params: { slug: string }
}) {
  const book = bookNotes[params.slug]

  if (!book) {
    return (
      <main className="container mx-auto max-w-4xl py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn't find the book notes you were looking for.</p>
          <Link href="/library" className="text-blue-500 mt-4 inline-block">
            Back to Library
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-4xl py-12">
      <div className="mb-8 flex justify-center">
        <Image
          src={getBookImageUrl(params.slug) || "/placeholder.svg"}
          alt={`${book.title} by ${book.author}`}
          width={300}
          height={450}
          className="rounded-md shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-xl text-gray-700 mb-4">By {book.author}</h2>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">Rating:</span>
        <span className="font-semibold">{book.rating}</span>
      </div>
      <div className="prose lg:prose-xl mb-6">{book.content}</div>
      {book.quotes.length > 0 && (
        <>
          <h3 className="text-2xl font-bold mt-8 mb-4">Key Quotes</h3>
          <ul className="list-disc list-inside">
            {book.quotes.map((quote, index) => (
              <li key={index} className="mb-2">
                {quote}
              </li>
            ))}
          </ul>
        </>
      )}
      <Link href="/library" className="text-blue-500 mt-8 inline-block">
        Back to Library
      </Link>
    </main>
  )
}
