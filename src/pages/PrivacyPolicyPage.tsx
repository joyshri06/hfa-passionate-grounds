import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/primitives";

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        description="Last updated: January 2026 · Hosur Football & Fitness Academy"
        breadcrumb="Privacy Policy"
      />
      <section className="py-20 bg-background">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="prose prose-invert max-w-none rounded-[2rem] border border-border bg-card p-8 sm:p-12 shadow-lift">
              <h2 className="font-display text-2xl text-navy">1. Information We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hosur Football & Fitness Academy ("HFA") collects personal information when you register for trial sessions, enrol a student, or contact us. This may include player name, parent/guardian name, email address, phone number, date of birth, and relevant medical notes.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">2. How We Use Your Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Your data is exclusively used to coordinate coaching sessions, notify parents about match schedules, share academy progress updates, and process enrolment fees. We never sell or share your information with third-party marketers.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">3. Media & Photography Safeguarding</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                During academy training and competitive matches, photographs and video clips may be recorded for player feedback, trial portfolios, and official social media highlights. Parents may opt out of social media coverage at any time by contacting academy management.
              </p>

              <h2 className="mt-8 font-display text-2xl text-navy">4. Data Security & Rights</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We maintain appropriate administrative and technical measures to protect parent and player information. You have the right to request access, updates, or deletion of your personal records by emailing hello@hosurfootballacademy.in.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
