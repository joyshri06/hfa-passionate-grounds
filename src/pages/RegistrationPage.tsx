import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/site";
import { Reveal } from "@/components/site/primitives";

export function RegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Hi HFA! I want to register for a Free Trial Session.%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AAge/Group: ${data.get("program")}%0APreferred Time: ${data.get("timing")}%0ANotes: ${data.get("notes") || "None"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/30";

  return (
    <>
      <PageHero
        eyebrow="Join HFA"
        title="Register for a Free Trial Session"
        description="Every new player receives one complimentary trial session with our certified coaches."
        breadcrumb="Registration"
      />
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-5 sm:p-8 lg:p-10 shadow-lift">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-navy">Player Enrolment Form</h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Fill in your details below to confirm trial timings and fee schedule.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                      Player / Parent Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className={fieldClass}
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={fieldClass}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="program" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                      Program Category *
                    </label>
                    <select id="program" name="program" className={fieldClass} defaultValue="Development Squad (Age 9–13)">
                      <option>Little Kickers (Age 5–8)</option>
                      <option>Development Squad (Age 9–13)</option>
                      <option>Elite Youth (Age 14–18)</option>
                      <option>Strength & Fitness (All ages)</option>
                      <option>Goalkeeper Lab (Age 10+)</option>
                      <option>Adult Fitness Football (Age 18+)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timing" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                      Preferred Batch Timing
                    </label>
                    <select id="timing" name="timing" className={fieldClass} defaultValue="Morning Session (6:00–8:00 AM)">
                      <option>Morning Session (6:00–8:00 AM)</option>
                      <option>Evening Session (4:30–7:30 PM)</option>
                      <option>Weekend Batch (Sat & Sun)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                    Player Experience / Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className={fieldClass}
                    placeholder="Previous school or academy experience, playing position, or any medical notes."
                  />
                </div>

                <Button type="submit" variant="flame" size="pill" className="mt-4 w-full py-4 text-base">
                  Confirm Registration on WhatsApp <Send className="ml-2 size-5" />
                </Button>

                {submitted ? (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600">
                    <CheckCircle className="size-5" />
                    Redirecting to WhatsApp to send your registration!
                  </div>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
