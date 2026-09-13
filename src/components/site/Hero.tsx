import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, Reveal } from "./primitives";
import hero from "@/assets/hero-stadium.jpg";
import logo from "@/assets/hfa-logo.png";

const stats = [
  { value: 500, suffix: "+", label: "Players Trained" },
  { value: 8, suffix: "", label: "Years Since 2018" },
  { value: 25, suffix: "+", label: "Trophies Won" },
  { value: 12, suffix: "", label: "Certified Coaches" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-navy-ink"
    >
      {/* Full-bleed stadium background */}
      <img
        src={hero}
        alt="Floodlit football stadium at dusk"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      {/* Left-weighted directional gradient: dark on left (content), open on right (stadium) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.16_0.05_262/0.97)_0%,oklch(0.16_0.05_262/0.88)_38%,oklch(0.16_0.05_262/0.45)_62%,oklch(0.16_0.05_262/0.12)_100%)]"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
      />

      {/* Constrained layout container */}
      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-36 pb-8 lg:pb-14">

        {/* Hero content — left column on desktop (≈50% wide), full width on mobile */}
        <div className="w-full lg:max-w-[54%]">
          <Reveal>
            <img
              src={logo}
              alt="Hosur Football & Fitness Academy crest"
              width={160}
              height={160}
              className="h-16 w-16 drop-shadow-[0_16px_40px_oklch(0.68_0.21_42/0.55)] sm:h-20 sm:w-20 lg:h-28 lg:w-28"
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full surface-glass-dark px-5 py-2 text-[0.7rem] sm:text-xs font-extrabold tracking-[0.26em] text-gold uppercase shadow-lg">
              <MapPin className="size-3.5" aria-hidden="true" />
              Established 2018 · Hosur, Tamil Nadu
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-4 font-display font-extrabold tracking-tight leading-[0.9] text-white text-[clamp(2.1rem,5.5vw,4.5rem)]">
              One Hosur.
              <br />
              One Passion.
              <br />
              <span className="text-flame">One Academy.</span>
            </h1>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/85 font-medium max-w-[42ch]">
              Elite football and fitness coaching for every age group —
              technical mastery, athletic conditioning and the mindset of a
              professional, built on the grass of our own home ground.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                variant="flame"
                size="pill"
                className="px-6 py-3 text-sm sm:px-7 sm:text-base font-extrabold shadow-flame"
              >
                <Link to="/registration">
                  Join Now <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="pill"
                className="px-6 py-3 text-sm sm:px-7 sm:text-base font-extrabold"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Statistics — full container width, tile/card grid design */}
        <Reveal delay={370}>
          <dl className="mt-8 lg:mt-12 grid grid-cols-2 gap-px rounded-xl sm:rounded-2xl overflow-hidden bg-white/8 shadow-lift lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="surface-glass-dark px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7"
              >
                <dd className="font-display text-[1.75rem] sm:text-[2.5rem] lg:text-5xl leading-none text-gold font-extrabold">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1.5 text-[0.6rem] sm:text-xs font-extrabold tracking-[0.2em] text-white/75 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <Link
        to="/about"
        aria-label="Learn more about HFA"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-gold md:block"
      >
        <ChevronDown className="size-7" aria-hidden="true" />
      </Link>
    </section>
  );
}
