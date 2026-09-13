import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Events } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/primitives";
import { ArrowRight, Calendar } from "lucide-react";

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academy Calendar"
        title="What's Coming Up at HFA"
        description="Trials, tournaments, goalkeeper masterclasses and community match days on our Hosur grounds."
        breadcrumb="Events"
      />
      <Events />

      <section className="py-20 bg-secondary">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 text-center">
          <Reveal>
            <div className="rounded-[2.5rem] bg-navy p-10 sm:p-16 shadow-lift text-white">
              <span className="inline-flex items-center gap-2 rounded-full surface-glass-dark px-4 py-1.5 text-xs font-bold text-gold uppercase tracking-wider">
                <Calendar className="size-4" /> Open Trial Registration
              </span>
              <h2 className="mt-6 text-4xl sm:text-6xl font-display font-extrabold">
                Want to participate in our next trial?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
                Register your child in advance to reserve a slot for the upcoming Open Trials or Goalkeeper Masterclass.
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild variant="flame" size="pill" className="px-8 py-4 text-lg font-extrabold shadow-flame">
                  <Link to="/registration">
                    Register for Trials <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
