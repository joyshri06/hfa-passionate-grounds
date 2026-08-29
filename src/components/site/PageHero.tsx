import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
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
    <section className="relative isolate overflow-hidden bg-navy-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(85%_75%_at_30%_0%,transparent,oklch(0.16_0.05_262/0.95))]"
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-24 h-72 w-72 rounded-full blur-3xl",
          accent === "flame" ? "right-10 bg-orange/25" : "left-10 bg-gold/20",
        )}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />

      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-24",
          align === "center" && "text-center",
        )}
      >
        {breadcrumb ? (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "flex items-center gap-1.5 text-[0.7rem] font-bold tracking-[0.18em] text-white/55 uppercase",
                align === "center" && "justify-center",
              )}
            >
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="text-gold">{breadcrumb}</span>
            </nav>
          </Reveal>
        ) : null}

        <Reveal delay={60}>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full surface-glass-dark px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.22em] text-gold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={130}>
          <h1
            className={cn(
              "mt-5 max-w-3xl text-4xl leading-[0.92] text-white sm:text-6xl lg:text-7xl",
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
                "mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg",
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
