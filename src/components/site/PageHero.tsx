import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";
import hero from "@/assets/hero-stadium.jpg";

export function PageHero({
  eyebrow,
  title,
  description,
  image = hero,
  align = "left",
  breadcrumb,
  children,
  accent = "flame",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  align?: "left" | "center";
  breadcrumb?: string;
  children?: ReactNode;
  accent?: "flame" | "gold";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-ink pt-32 lg:pt-40">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(85%_75%_at_30%_0%,transparent,oklch(0.16_0.05_262/0.95))]"
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-24 h-80 w-80 rounded-full blur-3xl",
          accent === "flame" ? "right-10 bg-orange/25" : "left-10 bg-gold/20",
        )}
      />

      <div
        className={cn(
          "relative mx-auto w-full max-w-[1380px] px-4 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-32 lg:px-16 xl:px-20",
          align === "center" && "text-center",
        )}
      >
        {breadcrumb ? (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-[0.22em] text-white/70 uppercase",
                align === "center" && "justify-center",
              )}
            >
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-gold">{breadcrumb}</span>
            </nav>
          </Reveal>
        ) : null}

        <Reveal delay={60}>
          <span className="mt-6 inline-flex items-center gap-2.5 rounded-full surface-glass-dark px-5 py-2 text-xs sm:text-sm font-extrabold tracking-[0.26em] text-gold uppercase shadow-md">
            <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={130}>
          <h1
            className={cn(
              "mt-6 text-[clamp(2.1rem,5vw,4.25rem)] leading-[1.08] text-white font-display font-extrabold tracking-[0.02em]",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={200}>
            <p
              className={cn(
                "mt-5 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl font-medium",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}

        {children ? <Reveal delay={260}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
