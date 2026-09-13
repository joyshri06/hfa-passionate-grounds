import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/primitives";

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Terms"
        title="Terms of Service"
        description="Academy Rules, Code of Conduct & Enrolment Terms · Hosur Football & Fitness Academy"
        breadcrumb="Terms"
      />
      <section className="py-20 bg-background">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="prose prose-invert max-w-none rounded-[2rem] border border-border bg-card p-8 sm:p-12 shadow-lift">
              <h2 className="font-display text-2xl text-navy">1. Academy Enrolment & Attendance</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All players enrolled at Hosur Football & Fitness Academy must wear proper training kit (boots, shin guards, academy jersey) and arrive punctually for their designated training batches.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">2. Code of Conduct</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                HFA fosters a supportive, respectful, and disciplined sporting environment. Unsportsmanlike conduct, bullying, or verbal abuse towards teammates, opposing teams, or referees will not be tolerated.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">3. Safety & Medical Liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                While HFA maintains certified ground safety protocols and first-aid staff on pitch at all times, sports involve inherent physical activity risks. Parents/guardians acknowledge that players participate voluntarily and must disclose relevant health conditions before training.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">4. Fee Payment Policy</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Monthly academy subscription fees must be paid within the first week of each calendar month. Fees are non-refundable for missed personal sessions; however, make-up sessions are provided for weather cancellations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
