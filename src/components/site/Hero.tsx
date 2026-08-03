import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, Reveal } from "./primitives";
import hero from "@/assets/hero-stadium.jpg";
import logo from "@/assets/hfa-logo.png";

const stats = [
  { value: 500, suffix: "+", label: "Players trained" },
  { value: 8, suffix: "", label: "Years since 2018" },
  { value: 25, suffix: "+", label: "Trophies won" },
  { value: 12, suffix: "", label: "Certified coaches" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-ink"
    >
      <img
        src={hero}
        alt="Floodlit football stadium at dusk"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_10%,transparent,oklch(0.16_0.05_262/0.92))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:pt-32">
        <div className="max-w-3xl">
          <Reveal>
            <img
              src={logo}
              alt="Hosur Football & Fitness Academy crest"
              width={160}
              height={160}
              className="h-28 w-28 drop-shadow-[0_18px_40px_oklch(0.68_0.21_42/0.45)] sm:h-36 sm:w-36"
            />
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full surface-glass-dark px-4 py-2 text-[0.68rem] font-bold tracking-[0.24em] text-gold uppercase">
              <MapPin className="size-3.5" aria-hidden="true" />
              Established 2018 · Hosur, Tamil Nadu
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-6 text-5xl leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              One Hosur.
              <br />
              One Passion.
              <br />
              <span className="text-flame">One Academy.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Elite football and fitness coaching for every age group — technical
              mastery, athletic conditioning and the mindset of a professional,
              built on the grass of our own home ground.
            </p>
          </Reveal>

          <Reveal delay={310}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="flame" size="pill">
                <a href="#contact">
                  Join Now <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="glass" size="pill">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <dl className="mt-10 grid grid-cols-2 gap-3 rounded-[2rem] surface-glass-dark p-5 sm:gap-6 sm:p-7 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dd className="font-display text-4xl leading-none text-white sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 text-[0.68rem] font-bold tracking-[0.18em] text-white/60 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-gold md:block"
      >
        <ChevronDown className="size-7" aria-hidden="true" />
      </a>
    </section>
  );
}
