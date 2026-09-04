import { createFileRoute } from "@tanstack/react-router";
import { Compass, Flag, HeartPulse, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { coaches } from "@/lib/site-data";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";

const title = "About HFA | Hosur Football & Fitness Academy Since 2018";
const description =
  "The story of Hosur Football & Fitness Academy — founded in 2018, led by licensed coaches, built on a philosophy of technique, fitness and character.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const philosophy = [
  {
    icon: Target,
    title: "Technique first",
    text: "Every session starts with the ball. Repetition with purpose builds players who can solve problems under pressure.",
  },
  {
    icon: HeartPulse,
    title: "Athletes, not just players",
    text: "Strength, mobility and recovery are coached alongside football so players last full seasons injury-free.",
  },
  {
    icon: Flag,
    title: "Character on and off the pitch",
    text: "Punctuality, respect and responsibility are non-negotiables — the same standards we expect in matches.",
  },
  {
    icon: Compass,
    title: "A clear pathway",
    text: "From Little Kickers to Elite Youth, each stage has defined outcomes and honest feedback for parents.",
  },
];

const approach = [
  { phase: "Warm-up & activation", detail: "Movement prep, mobility and coordination — 15 minutes." },
  { phase: "Technical block", detail: "Ball mastery, passing patterns and position-specific work — 30 minutes." },
  { phase: "Game-based learning", detail: "Small-sided games with coaching interventions — 30 minutes." },
  { phase: "Conditioning & cooldown", detail: "Age-appropriate strength, speed work and recovery — 15 minutes." },
];

function AboutPage() {
  const director = coaches[0];

  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Since 2018"
        title={
          <>
            Built in Hosur.
            <br />
            <span className="text-flame">Built for the game.</span>
          </>
        }
        description="What began with a handful of kids, two goalposts and one belief is now a full football and fitness academy serving families across Hosur."
        image={g2}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>Eight seasons of building players</>}
              description="Hosur Football & Fitness Academy started in 2018 with one aim — that world-class football education should belong right here at home. Today we train hundreds of players across age groups with a curriculum that blends technique, strength and character, delivered by licensed coaches on our own ground."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "Develop complete athletes — skilled, fit, disciplined and confident on and off the pitch.",
                },
                {
                  icon: Sparkles,
                  title: "Our Vision",
                  text: "Put Hosur on the national football map by producing players for state and pro academies.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                    <item.icon className="size-6 text-orange" aria-hidden="true" />
                    <h3 className="mt-4 text-lg text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
                <img
                  src={g1}
                  alt="Young players training at the academy ground in Hosur"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-[26rem] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[32rem]"
                />
              </div>
              <div className="absolute -bottom-6 right-4 left-4 rounded-3xl bg-navy p-5 shadow-lift sm:right-auto sm:left-8 sm:w-72">
                <p className="font-display text-5xl leading-none text-gold">2018</p>
                <p className="mt-1 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                  The year it all kicked off
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Philosophy"
            title={
              <>
                How we <span className="text-flame">coach</span>
              </>
            }
            description="Four principles shape every session plan, every age group, every season."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {philosophy.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 90}>
                <div className="h-full rounded-[1.75rem] bg-card p-7 shadow-lift transition-transform duration-400 hover:-translate-y-1.5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-flame text-white shadow-flame">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-navy">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title={<>Director & Head Coach</>}
            />
            <Reveal delay={100}>
              <div className="mt-8 rounded-[2rem] bg-pitch p-8 shadow-lift">
                <span className="grid size-20 place-items-center rounded-full bg-white/10 font-display text-2xl text-gold ring-4 ring-orange/20">
                  {director.initials}
                </span>
                <h3 className="mt-5 text-2xl text-white">{director.name}</h3>
                <p className="mt-1 text-[0.68rem] font-bold tracking-[0.2em] text-gold uppercase">
                  {director.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{director.bio}</p>
                <p className="mt-4 text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
                  {director.experience}
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Training Approach"
              title={<>What a session looks like</>}
              description="A repeatable 90-minute structure, adapted for each age group."
            />
            <ol className="mt-8 space-y-3">
              {approach.map((step, i) => (
                <Reveal as="li" key={step.phase} delay={i * 80}>
                  <div className="flex min-w-0 items-start gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-colors hover:border-orange/50">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary font-display text-sm text-navy">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base text-navy">{step.phase}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        title="Come see a session"
        text="Visit the ground, meet the coaches and watch a training session before you decide."
        primary={{ to: "/registration", label: "Book a free trial" }}
        secondary={{ to: "/coaches", label: "Meet our coaches" }}
      />
    </>
  );
}
