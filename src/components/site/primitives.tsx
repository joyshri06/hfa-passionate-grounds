import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold tracking-[0.26em] uppercase shadow-sm",
          tone === "light"
            ? "bg-secondary text-navy"
            : "surface-glass-dark text-gold",
        )}
      >
        <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 text-[clamp(1.85rem,4.5vw,4rem)] leading-[0.9] font-display font-extrabold tracking-tight",
          tone === "light" ? "text-navy" : "text-background",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg xl:text-xl font-medium",
            tone === "light" ? "text-muted-foreground" : "text-background/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
