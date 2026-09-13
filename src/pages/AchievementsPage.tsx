import { PageHero } from "@/components/site/PageHero";
import { Achievements } from "@/components/site/Sections";
import { playerHonours } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { Award, CheckCircle2 } from "lucide-react";

export function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trophies & Selections"
        title="Silverware & Success Stories"
        description="Our players consistently represent Hosur at district, state and academy level competitions."
        breadcrumb="Achievements"
      />
      <Achievements />

      <section className="py-24 bg-card">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow="Player Pathway Milestones"
            title="State & District Selections"
            description="Our structured coaching curriculum provides direct exposure to official trial selectors."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {playerHonours.map((honour, i) => (
              <Reveal key={honour} delay={i * 90}>
                <div className="h-full rounded-[2rem] border border-border bg-background p-8 shadow-lift flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-orange/10 text-orange">
                    <Award className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-navy font-bold">State Call-up</h3>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">{honour}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
