import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
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
  { src: g1, alt: "Academy players running a cone dribbling drill at sunset", category: "Training" },
  { src: g2, alt: "Coach briefing the squad in a huddle before training", category: "Training" },
  { src: g3, alt: "Junior team celebrating with a championship trophy", category: "Matchday" },
  { src: g4, alt: "Close-up of a boot striking the ball under floodlights", category: "Facilities" },
];

export function About({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto grid w-full max-w-[1380px] gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 xl:px-20 lg:grid-cols-2 lg:items-center">
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
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                <div className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lift transition-transform duration-300 hover:-translate-y-1.5">
                  <item.icon className="size-8 text-orange" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl sm:text-2xl text-navy font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {isPreview ? (
            <Reveal delay={160}>
              <div className="mt-8">
                <Button asChild variant="flame" size="pill" className="px-8 py-3.5 text-base font-extrabold shadow-flame">
                  <Link to="/about">
                    Read Our Full Story <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={120}>
          <div className="relative pb-10 lg:pb-12">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
              <img
                src={g1}
                alt="Young players training at the academy ground in Hosur"
                width={1200}
                height={800}
                loading="lazy"
                className="h-[22rem] sm:h-[30rem] lg:h-[38rem] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-4 right-4 sm:left-8 sm:right-auto sm:w-72 lg:w-80 rounded-3xl bg-navy p-5 sm:p-7 shadow-lift">
              <p className="font-display text-5xl sm:text-6xl leading-none text-gold font-extrabold">
                2018
              </p>
              <p className="mt-2 text-[0.65rem] sm:text-xs font-extrabold tracking-[0.22em] text-white/80 uppercase">
                The year it all kicked off in Hosur
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

export function Programs({ isPreview = false }: { isPreview?: boolean }) {
  const displayPrograms = isPreview ? programs.slice(0, 3) : programs;

  return (
    <section id="programs" className="relative overflow-hidden bg-pitch py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-orange/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Programs"
          title={<>Pathways for every player</>}
          description="Structured age-group curricula designed by UEFA/AIFF-licensed coaches, progressing from first touch to first trial."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayPrograms.map((program, i) => (
            <Reveal as="li" key={program.name} delay={(i % 3) * 90}>
              <article className="group h-full rounded-[2rem] surface-glass-dark p-6 sm:p-9 transition-all duration-400 hover:-translate-y-2 hover:border-gold/50 shadow-lift">
                <span className="grid size-14 sm:size-16 place-items-center rounded-2xl bg-flame text-white shadow-flame">
                  <program.icon className="size-6 sm:size-7" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-extrabold tracking-[0.24em] text-gold uppercase">
                  {program.age}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-display text-white font-extrabold">{program.name}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 font-medium">{program.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
            {isPreview ? (
              <Button asChild variant="gold" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-md">
                <Link to="/programs">
                  Explore All Programs <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            ) : (
              <Button asChild variant="gold" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-md">
                <Link to="/registration">Book a free trial session</Link>
              </Button>
            )}
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
    <section id="why" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The difference is in the <span className="text-flame">details</span>
            </>
          }
          description="Every session is planned, measured and reviewed. Nothing about your child's development is left to chance."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-6 sm:p-9 shadow-lift transition-all duration-400 hover:-translate-y-2">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 scale-x-0 bg-flame transition-transform duration-500 group-hover:scale-x-100"
                />
                <reason.icon className="size-8 text-orange" aria-hidden="true" />
                <h3 className="mt-5 text-xl sm:text-2xl font-display text-navy font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
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

export function Coaches({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <section id="coaches" className="bg-secondary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Coaches"
          title={<>The people on the touchline</>}
          description="Licensed, experienced and genuinely invested in every player who walks through the gate."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach, i) => (
            <Reveal as="li" key={coach.name} delay={(i % 4) * 80}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-card p-6 sm:p-9 text-center shadow-lift transition-all duration-400 hover:-translate-y-2">
                <span className="mx-auto grid size-24 sm:size-28 place-items-center rounded-full bg-pitch font-display text-3xl sm:text-4xl font-extrabold text-gold ring-4 ring-orange/20 transition-transform duration-400 group-hover:scale-105">
                  {coach.initials}
                </span>
                <h3 className="mt-5 text-xl sm:text-2xl font-display text-navy font-bold">{coach.name}</h3>
                <p className="mt-1 text-xs font-extrabold tracking-[0.22em] text-orange uppercase">
                  {coach.role}
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">{coach.bio}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        {isPreview ? (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Button asChild variant="navy" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold">
                <Link to="/coaches">
                  Meet Our Full Coaching Staff <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function Gallery({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Life at the academy</>}
          description="Training nights, match days and the moments in between."
        />
        <div className="mt-12 grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 4) * 80}
              className={
                i === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : i === 3
                    ? "col-span-2 lg:col-span-2"
                    : ""
              }
            >
              <figure className="group h-full overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-48 sm:h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full lg:min-h-[18rem]"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        {isPreview ? (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Button asChild variant="flame" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-flame">
                <Link to="/gallery">
                  View Full Media Gallery <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
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

export function Achievements({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <section id="achievements" className="relative overflow-hidden bg-pitch py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-red/25 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
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
        <dl className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="rounded-[2rem] surface-glass-dark p-6 sm:p-9 shadow-lift">
                <dd className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none text-gold font-extrabold">
                  <Counter to={item.value} suffix={item.suffix} />
                </dd>
                <dt className="mt-3 text-[0.6rem] sm:text-xs font-extrabold tracking-[0.22em] text-white/80 uppercase">
                  {item.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {honours.map((honour, i) => (
            <Reveal as="li" key={honour.title} delay={(i % 2) * 90}>
              <div className="flex min-w-0 items-center gap-4 sm:gap-6 rounded-3xl border border-white/10 bg-white/5 px-5 sm:px-7 py-5 sm:py-6 transition-colors hover:border-gold/50">
                <Trophy className="size-6 sm:size-7 shrink-0 text-gold" aria-hidden="true" />
                <p className="min-w-0 text-base sm:text-lg text-white/90 font-medium">
                  <span className="font-display mr-2 sm:mr-3 text-gold text-lg sm:text-xl font-bold">{honour.year}</span>
                  {honour.title}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {isPreview ? (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Button asChild variant="gold" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-md">
                <Link to="/achievements">
                  See All Achievements & Honours <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
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

export function Events({ isPreview = false }: { isPreview?: boolean }) {
  const displayEvents = isPreview ? events.slice(0, 2) : events;

  return (
    <section id="events" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Events"
          title={<>What's coming up</>}
          description="Trials, tournaments and clinics on the academy calendar."
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {displayEvents.map((event, i) => (
            <Reveal as="li" key={event.title} delay={(i % 2) * 90}>
              <article className="group flex items-center gap-5 sm:gap-7 rounded-[2rem] border border-border bg-card p-5 sm:p-8 shadow-lift transition-all duration-400 hover:-translate-y-1.5">
                <span className="grid size-20 sm:size-24 shrink-0 place-items-center rounded-2xl bg-flame text-center font-display text-base sm:text-lg leading-tight text-white shadow-flame font-bold">
                  {event.date}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display text-navy font-extrabold leading-tight">{event.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                    {event.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {isPreview ? (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Button asChild variant="flame" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-flame">
                <Link to="/events">
                  View Full Events Calendar <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
