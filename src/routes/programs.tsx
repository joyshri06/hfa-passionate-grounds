import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { programPillars, programs } from "@/lib/site-data";
import g4 from "@/assets/gallery-4.jpg";

const title = "Programs & Fees | Hosur Football & Fitness Academy";
const description =
  "Football training, fitness & conditioning, skill development and match exposure at HFA Hosur — age groups from 5 to adult, with schedules and monthly fees.";

export const Route = createFileRoute("/programs")({
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
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Programs"
        eyebrow="Programs"
        title={
          <>
            Pathways for
            <br />
            <span className="text-flame">every player</span>
          </>
        }
        description="Structured age-group curricula designed by licensed coaches, progressing from first touch to first trial."
        image={g4}
        accent="gold"
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="flame" size="pill">
            <Link to="/registration">
              Register Now <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="pill">
            <Link to="/contact">Ask about fees</Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we coach"
            title={<>Four pillars in every program</>}
            description="Whatever the age group, the same four elements run through the curriculum."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programPillars.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-[1.75rem] border border-border bg-card p-7 shadow-lift transition-transform duration-400 hover:-translate-y-1.5">
                  <pillar.icon className="size-6 text-orange" aria-hidden="true" />
                  <h3 className="mt-5 text-lg text-navy">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pitch py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-orange/25 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            tone="dark"
            eyebrow="Age groups"
            title={<>Choose your squad</>}
            description="Schedules and monthly fees for the current season. Every new player gets one free trial session."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <Reveal as="li" key={program.name} delay={(i % 3) * 90}>
                <article className="flex h-full flex-col rounded-[1.75rem] surface-glass-dark p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/50">
                  <span className="grid size-12 place-items-center rounded-2xl bg-flame text-white shadow-flame">
                    <program.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-[0.68rem] font-bold tracking-[0.22em] text-gold uppercase">
                    {program.age}
                  </p>
                  <h3 className="mt-2 text-2xl text-white">{program.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{program.text}</p>
                  <dl className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[0.66rem] font-bold tracking-[0.18em] text-white/45 uppercase">
                        Schedule
                      </dt>
                      <dd className="text-right text-white/80">{program.schedule}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-[0.66rem] font-bold tracking-[0.18em] text-white/45 uppercase">
                        Fee
                      </dt>
                      <dd className="font-display text-lg text-gold">{program.fee}</dd>
                    </div>
                  </dl>
                  <Button asChild variant="gold" size="pillSm" className="mt-6 w-full">
                    <Link to="/registration">Join this program</Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Fee information"
            title={<>Simple, transparent pricing</>}
            description="Monthly fees are payable in the first week of each month. Kit and tournament entries are billed separately and always announced in advance."
          />
          <Reveal delay={100}>
            <ul className="grid gap-3">
              {[
                "One free trial session for every new player",
                "Academy jersey and training kit provided on enrolment",
                "Sibling discount available — ask at the ground",
                "Quarterly payment option with a small saving",
                "No hidden charges; tournament fees announced ahead of time",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-foreground/80 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Lock in your trial slot"
        text="Tell us the player's age and preferred program — we'll confirm a session on WhatsApp."
        primary={{ to: "/registration", label: "Register Now" }}
        secondary={{ to: "/faq", label: "Read the FAQ" }}
      />
    </>
  );
}
