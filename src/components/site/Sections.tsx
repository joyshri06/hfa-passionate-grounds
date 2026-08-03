import {
  Activity,
  Award,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Medal,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, Reveal, SectionHeading } from "./primitives";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const galleryImages = [
  { src: g1, alt: "Academy players running a cone dribbling drill at sunset" },
  { src: g2, alt: "Coach briefing the squad in a huddle before training" },
  { src: g3, alt: "Junior team celebrating with a championship trophy" },
  { src: g4, alt: "Close-up of a boot striking the ball under floodlights" },
];

export function About() {
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
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
            <div className="absolute -bottom-6 left-4 right-4 rounded-3xl bg-navy p-5 shadow-lift sm:left-8 sm:right-auto sm:w-72">
              <p className="font-display text-5xl leading-none text-gold">
                <Counter to={2018} duration={1200} />
              </p>
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

const programs = [
  {
    icon: Star,
    name: "Little Kickers",
    age: "Age 5 – 8",
    text: "Fun-first introduction to football: coordination, balance, first touch and love for the ball.",
  },
  {
    icon: Activity,
    name: "Development Squad",
    age: "Age 9 – 13",
    text: "Technical foundations, small-sided games and positional understanding with weekly match play.",
  },
  {
    icon: Trophy,
    name: "Elite Youth",
    age: "Age 14 – 18",
    text: "High-performance training, tactical periodisation and scouting exposure for district & state trials.",
  },
  {
    icon: Dumbbell,
    name: "Strength & Fitness",
    age: "All ages",
    text: "Sports-science-led conditioning, speed and agility, mobility and injury-prevention programming.",
  },
  {
    icon: ShieldCheck,
    name: "Goalkeeper Lab",
    age: "Age 10+",
    text: "Specialist handling, shot-stopping, distribution and reflex work with a dedicated GK coach.",
  },
  {
    icon: HeartPulse,
    name: "Adult Fitness Football",
    age: "Age 18+",
    text: "Evening sessions for working adults — cardio, conditioning and competitive 7-a-side.",
  },
];

export function Programs() {
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
          description="Structured age-group curricula designed by UEFA/AIFF-licensed coaches, progressing from first touch to first trial."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
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
              </article>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="pill">
              <a href="#contact">Book a free trial session</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Users,
    title: "1 : 12 coach ratio",
    text: "Small groups mean every player gets corrected, coached and challenged in every session.",
  },
  {
    icon: Medal,
    title: "Licensed coaching staff",
    text: "AIFF-certified coaches with grassroots, youth and professional playing backgrounds.",
  },
  {
    icon: HeartPulse,
    title: "Fitness science built in",
    text: "Strength, mobility and recovery work integrated into the football curriculum, not bolted on.",
  },
  {
    icon: CalendarDays,
    title: "Year-round match play",
    text: "Inter-academy leagues, district tournaments and friendlies keep players competing all season.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, certified ground",
    text: "Well-maintained turf, first-aid trained staff and strict child-safeguarding protocols.",
  },
  {
    icon: Award,
    title: "A real pathway",
    text: "Trial exposure, highlight reels and references for state academies and college programmes.",
  },
];

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
          {reasons.map((reason, i) => (
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

const coaches = [
  {
    name: "Arun Kumar",
    role: "Founder & Head Coach",
    initials: "AK",
    bio: "AIFF D-Licence. Former district captain. Leads the elite youth pathway.",
  },
  {
    name: "Vignesh R.",
    role: "Technical Coach",
    initials: "VR",
    bio: "Specialist in ball mastery and 1v1 development for the 9–13 age group.",
  },
  {
    name: "Sathish M.",
    role: "Strength & Conditioning",
    initials: "SM",
    bio: "Sports science graduate handling athletic development and rehab.",
  },
  {
    name: "Prakash D.",
    role: "Goalkeeping Coach",
    initials: "PD",
    bio: "Ex-state keeper running the dedicated Goalkeeper Lab sessions.",
  },
];

export function Coaches() {
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
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Gallery() {
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
      </div>
    </section>
  );
}

const achievements = [
  { value: 25, suffix: "+", label: "Tournament trophies" },
  { value: 40, suffix: "+", label: "District selections" },
  { value: 9, suffix: "", label: "State-level players" },
  { value: 500, suffix: "+", label: "Academy alumni" },
];

const honours = [
  { year: "2024", title: "Hosur District Youth League — Champions (U-15)" },
  { year: "2023", title: "Krishnagiri Inter-Academy Cup — Runners-up (U-13)" },
  { year: "2022", title: "TN Grassroots Festival — Best Academy Award" },
  { year: "2021", title: "Hosur Super Cup — Champions (U-17)" },
];

export function Achievements() {
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
      </div>
    </section>
  );
}

const events = [
  {
    date: "24 Aug",
    title: "Open Trials — U-13 & U-15",
    detail: "7:00 AM · HFA Ground, Hosur. Free entry, register in advance.",
  },
  {
    date: "07 Sep",
    title: "HFA Monsoon Cup 2026",
    detail: "Two-day inter-academy tournament across four age categories.",
  },
  {
    date: "19 Oct",
    title: "Goalkeeper Masterclass",
    detail: "Half-day specialist clinic with guest state-level keepers.",
  },
  {
    date: "15 Nov",
    title: "Parents' Match Day & Awards",
    detail: "Season showcase, family 7s and the annual academy awards night.",
  },
];

export function Events() {
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
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {event.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
