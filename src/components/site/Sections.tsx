import { Link } from "@tanstack/react-router";
import { ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, Reveal, SectionHeading } from "./primitives";
import {
  achievements,
  coaches,
  events,
  galleryImages,
  honours,
  missionVision,
  pillars,
  programs,
} from "@/data/site";
import g1 from "@/assets/gallery-1.jpg";

function MoreLink({ to, label }: { to: string; label: string }) {
  return (
    <Reveal delay={120}>
      <div className="mt-12 text-center">
        <Button asChild variant="flame" size="pill">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Link to={to as any}>
            {label} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Reveal>
  );
}

export function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Since 2018"
            title={
              <>
                Built in Hosur.
                <br />
                <span className="text-flame">Built for the game.</span>
              </>
            }
            description="Hosur Football & Fitness Academy started in 2018 with a handful of kids, two goalposts and one belief — that world-class football education belongs right here at home. Today we train hundreds of players across age groups with a curriculum that blends technique, strength and character."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {missionVision.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                  <item.icon className="size-6 text-orange" aria-hidden="true" />
                  <h3 className="mt-4 text-lg text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {preview ? (
            <Reveal delay={180}>
              <div className="mt-8">
                <Button asChild variant="navy" size="pill">
                  <Link to="/about">
                    Explore our story <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ) : null}
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
            <div className="absolute -bottom-6 left-4 right-4 rounded-3xl bg-navy p-5 shadow-lift sm:left-8 sm:right-auto sm:w-72">
              <p className="font-display text-5xl leading-none text-gold">2018</p>
              <p className="mt-1 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                The year it all kicked off
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Programs({
  limit,
  preview = false,
  showSchedule = false,
}: {
  limit?: number;
  preview?: boolean;
  showSchedule?: boolean;
}) {
  const list = limit ? programs.slice(0, limit) : programs;
  return (
    <section id="programs" className="relative overflow-hidden bg-pitch py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-orange/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Programs"
          title={<>Pathways for every player</>}
          description="Structured age-group curricula designed by licensed coaches, progressing from first touch to first trial."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((program, i) => (
            <Reveal as="li" key={program.name} delay={(i % 3) * 90}>
              <article className="group h-full rounded-[1.75rem] surface-glass-dark p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/50">
                <span className="grid size-12 place-items-center rounded-2xl bg-flame text-white shadow-flame">
                  <program.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-6 text-[0.68rem] font-bold tracking-[0.22em] text-gold uppercase">
                  {program.age}
                </p>
                <h3 className="mt-2 text-2xl text-white">{program.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{program.text}</p>
                {showSchedule ? (
                  <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-white/70">
                    <div className="flex justify-between gap-3">
                      <dt className="font-bold tracking-[0.16em] uppercase text-white/50">
                        Schedule
                      </dt>
                      <dd className="text-right">{program.schedule}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-bold tracking-[0.16em] uppercase text-white/50">Fees</dt>
                      <dd className="text-right text-gold">{program.fee}</dd>
                    </div>
                  </dl>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ul>
        <MoreLink
          to={preview ? "/programs" : "/registration"}
          label={preview ? "View all programs" : "Register now"}
        />
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The difference is in the <span className="text-flame">details</span>
            </>
          }
          description="Every session is planned, measured and reviewed. Nothing about your child's development is left to chance."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 shadow-lift transition-all duration-400 hover:-translate-y-1.5">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-flame transition-transform duration-500 group-hover:scale-x-100"
                />
                <reason.icon className="size-6 text-orange" aria-hidden="true" />
                <h3 className="mt-5 text-xl text-navy">{reason.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Coaches({
  preview = false,
  detailed = false,
}: {
  preview?: boolean;
  detailed?: boolean;
}) {
  return (
    <section id="coaches" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Coaches"
          title={<>The people on the touchline</>}
          description="Licensed, experienced and genuinely invested in every player who walks through the gate."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach, i) => (
            <Reveal as="li" key={coach.name} delay={(i % 4) * 80}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] bg-card p-7 text-center shadow-lift transition-all duration-400 hover:-translate-y-1.5">
                <span className="mx-auto grid size-20 place-items-center rounded-full bg-pitch font-display text-2xl text-gold ring-4 ring-orange/20 transition-transform duration-400 group-hover:scale-105">
                  {coach.initials}
                </span>
                <h3 className="mt-5 text-xl text-navy">{coach.name}</h3>
                <p className="mt-1 text-[0.68rem] font-bold tracking-[0.2em] text-orange uppercase">
                  {coach.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{coach.bio}</p>
                {detailed ? (
                  <dl className="mt-5 space-y-2 border-t border-border pt-4 text-left text-xs text-muted-foreground">
                    <div>
                      <dt className="font-bold tracking-[0.16em] text-navy uppercase">
                        Experience
                      </dt>
                      <dd className="mt-1">{coach.experience}</dd>
                    </div>
                    <div>
                      <dt className="font-bold tracking-[0.16em] text-navy uppercase">
                        Specialisation
                      </dt>
                      <dd className="mt-1">{coach.specialisation}</dd>
                    </div>
                  </dl>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ul>
        {preview ? <MoreLink to="/coaches" label="Meet the team" /> : null}
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Life at the academy</>}
          description="Training nights, match days and the moments in between."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={
                i === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : i === 3
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
              }
            >
              <figure className="group h-full overflow-hidden rounded-[1.75rem] shadow-lift">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full lg:min-h-[16rem]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
        <MoreLink to="/gallery" label="View full gallery" />
      </div>
    </section>
  );
}

export function Achievements({
  preview = false,
  timeline = false,
}: {
  preview?: boolean;
  timeline?: boolean;
}) {
  return (
    <section id="achievements" className="relative overflow-hidden bg-pitch py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-red/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Achievements"
          title={
            <>
              Silverware, selections
              <br />& <span className="text-flame">success stories</span>
            </>
          }
        />
        <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="rounded-[1.5rem] surface-glass-dark p-6">
                <dd className="font-display text-4xl leading-none text-gold sm:text-5xl">
                  <Counter to={item.value} suffix={item.suffix} />
                </dd>
                <dt className="mt-2 text-[0.66rem] font-bold tracking-[0.18em] text-white/60 uppercase">
                  {item.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>

        {timeline ? (
          <ol className="relative mt-14 ml-3 border-l border-white/15 pl-6">
            {honours.map((honour, i) => (
              <Reveal as="li" key={honour.title} delay={i * 80} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.1rem] top-1.5 grid size-6 place-items-center rounded-full bg-flame shadow-flame"
                >
                  <Trophy className="size-3 text-white" />
                </span>
                <p className="font-display text-2xl text-gold">{honour.year}</p>
                <p className="mt-1 text-sm text-white/80">{honour.title}</p>
              </Reveal>
            ))}
          </ol>
        ) : (
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {honours.map((honour, i) => (
              <Reveal as="li" key={honour.title} delay={(i % 2) * 90}>
                <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-gold/50">
                  <Trophy className="size-5 shrink-0 text-gold" aria-hidden="true" />
                  <p className="min-w-0 text-sm text-white/85">
                    <span className="font-display mr-2 text-gold">{honour.year}</span>
                    {honour.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        {preview ? <MoreLink to="/achievements" label="View all achievements" /> : null}
      </div>
    </section>
  );
}

export function Events({ preview = false }: { preview?: boolean }) {
  return (
    <section id="events" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Events"
          title={<>What's coming up</>}
          description="Trials, tournaments and clinics on the academy calendar."
        />
        <ul className="mt-14 grid gap-4 lg:grid-cols-2">
          {events.map((event, i) => (
            <Reveal as="li" key={event.title} delay={(i % 2) * 90}>
              <article className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-[1.75rem] border border-border bg-card p-6 shadow-lift transition-all duration-400 hover:-translate-y-1">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-flame text-center font-display text-sm leading-tight text-white shadow-flame sm:size-20 sm:text-base">
                  {event.date}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-lg text-navy sm:text-xl">{event.title}</h3>
                  <p className="mt-1 text-[0.66rem] font-bold tracking-[0.18em] text-orange uppercase">
                    {event.location}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {event.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        {preview ? <MoreLink to="/events" label="See all events" /> : null}
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-navy py-16">
      <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
        {achievements.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <div className="text-center">
              <dd className="font-display text-4xl leading-none text-gold sm:text-5xl">
                <Counter to={item.value} suffix={item.suffix} />
              </dd>
              <dt className="mt-2 text-[0.66rem] font-bold tracking-[0.18em] text-white/60 uppercase">
                {item.label}
              </dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-pitch p-10 text-center shadow-lift sm:p-16">
            <div
              aria-hidden="true"
              className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange/25 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-4xl leading-[0.95] text-white sm:text-5xl">
                Your first session is <span className="text-flame">free</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/75">
                Register today and we'll confirm a trial slot with the right age-group coach.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="flame" size="pill">
                  <Link to="/registration">
                    Register now <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="pill">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
