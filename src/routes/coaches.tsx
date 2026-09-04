import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { coaches } from "@/lib/site-data";
import g2 from "@/assets/gallery-2.jpg";

const title = "Our Coaches | Hosur Football & Fitness Academy";
const description =
  "Meet the licensed HFA coaching staff — head coach, technical coach, strength & conditioning specialist and goalkeeping coach in Hosur.";

export const Route = createFileRoute("/coaches")({
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
  component: CoachesPage,
});

function CoachesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Coaches"
        eyebrow="Coaching Staff"
        align="center"
        title={<>The people on the touchline</>}
        description="Licensed, experienced and genuinely invested in every player who walks through the gate."
        image={g2}
      />

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <ul className="grid gap-5 sm:grid-cols-2">
            {coaches.map((coach, i) => (
              <Reveal as="li" key={coach.name} delay={(i % 2) * 90}>
                <article className="group grid h-full grid-cols-[auto_minmax(0,1fr)] gap-6 rounded-[1.75rem] bg-card p-7 shadow-lift transition-all duration-400 hover:-translate-y-1.5">
                  <span className="grid size-20 shrink-0 place-items-center self-start rounded-full bg-pitch font-display text-2xl text-gold ring-4 ring-orange/20 transition-transform duration-400 group-hover:scale-105">
                    {coach.initials}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xl text-navy">{coach.name}</h2>
                    <p className="mt-1 text-[0.68rem] font-bold tracking-[0.2em] text-orange uppercase">
                      {coach.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
                    <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                      <div className="flex items-start gap-2.5">
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                        <div className="min-w-0">
                          <dt className="sr-only">Experience</dt>
                          <dd className="text-foreground/80">{coach.experience}</dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Target className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                        <div className="min-w-0">
                          <dt className="sr-only">Specialization</dt>
                          <dd className="text-foreground/80">{coach.specialization}</dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Standards"
            title={<>Coaching you can trust</>}
            description="Every coach at HFA is certified, background-checked and first-aid trained, and works to a shared season curriculum with weekly session reviews."
          />
        </div>
      </section>

      <CtaBand
        title="Train with our coaches"
        text="Book a free trial and meet the staff who'll be working with your child every week."
        primary={{ to: "/registration", label: "Book a free trial" }}
        secondary={{ to: "/programs", label: "Explore programs" }}
      />
    </>
  );
}
