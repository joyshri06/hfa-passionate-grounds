import { PageHero } from "@/components/site/PageHero";
import { Programs } from "@/components/site/Sections";
import { programPillars } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site/primitives";

export function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Programs"
        title="Pathways for Every Player"
        description="Structured age-group curricula designed by UEFA & AIFF licensed coaches, progressing from first touch to competitive trials."
        breadcrumb="Programs"
      />
      <Programs isPreview={false} />
      <section className="py-24 bg-card">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Development Pillars"
            title="How We Train Our Athletes"
            description="Our training philosophy balances technical skill, athletic conditioning, and game intelligence."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="h-full rounded-[2rem] border border-border bg-background p-8 shadow-lift transition-transform hover:-translate-y-2">
                  <span className="grid size-14 place-items-center rounded-2xl bg-orange/10 text-orange">
                    <pillar.icon className="size-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-navy">{pillar.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
