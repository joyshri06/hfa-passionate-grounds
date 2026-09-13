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
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,transparent,oklch(0.16_0.05_262/0.95))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-4 pt-36 pb-24 sm:px-6 sm:pt-44 sm:pb-28",
          align === "center" && "text-center",
        )}
      >
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "flex items-center gap-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-white/55 uppercase",
              align === "center" && "justify-center",
            )}
          >
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight className="size-3" aria-hidden="true" />
            <span className="text-gold">{eyebrow}</span>
          </nav>
        </Reveal>

        <Reveal delay={90}>
          <h1
            className={cn(
              "mt-6 text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl",
              align === "center" && "mx-auto max-w-4xl",
            )}
          >
            {title}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={160}>
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

        {children ? <Reveal delay={230}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
