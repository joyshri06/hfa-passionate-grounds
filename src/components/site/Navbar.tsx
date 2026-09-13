import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/hfa-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4 sm:py-6",
      )}
    >
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between gap-3 sm:gap-4 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-500",
            scrolled
              ? "surface-glass-dark shadow-lift"
              : "border border-white/15 bg-navy-ink/50 backdrop-blur-md shadow-lg",
          )}
        >
          <Link to="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <img
              src={logo}
              alt="Hosur Football & Fitness Academy crest"
              width={56}
              height={56}
              className={cn(
                "shrink-0 drop-shadow-md transition-all duration-500",
                scrolled ? "h-8 w-8 sm:h-10 sm:w-10" : "h-9 w-9 sm:h-11 sm:w-11",
              )}
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm sm:text-lg leading-none text-white font-extrabold">
                Hosur Football
              </span>
              <span className="block truncate text-[0.5rem] sm:text-[0.58rem] font-extrabold tracking-[0.2em] sm:tracking-[0.24em] text-gold uppercase">
                & Fitness Academy
              </span>
            </span>
          </Link>

          <ul className="hidden items-center justify-center gap-0.5 xl:gap-1 lg:flex min-w-0">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="shrink-0">
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-full px-2 py-1 text-[0.65rem] xl:px-2.5 xl:py-1.5 xl:text-[0.75rem] 2xl:px-3.5 2xl:text-xs font-extrabold tracking-wide text-white/90 uppercase transition-colors hover:bg-white/15 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none whitespace-nowrap",
                      isActive && "bg-white/15 text-gold font-extrabold shadow-sm",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button asChild variant="flame" size="pill" className="hidden sm:inline-flex px-4 py-2 text-xs xl:px-5 xl:py-2.5 xl:text-xs 2xl:text-sm font-extrabold uppercase shadow-flame">
              <Link to="/registration">Join Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:text-gold lg:hidden"
            >
              {open ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        data-open={open}
        className="mobile-menu mx-4 mt-3 overflow-hidden rounded-3xl surface-glass-dark shadow-lift lg:hidden"
      >
        <div className="p-6">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-2xl px-5 py-4 font-display text-2xl text-white transition-colors hover:bg-white/10 hover:text-gold",
                      isActive && "text-gold bg-white/15 font-bold",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button asChild variant="flame" size="pill" className="mt-5 w-full py-4 text-lg font-extrabold uppercase shadow-flame">
            <Link to="/registration" onClick={() => setOpen(false)}>
              Join Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
