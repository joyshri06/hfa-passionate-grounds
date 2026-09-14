import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/site";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 max-w-full",
        scrolled ? "py-2.5" : "py-3 sm:py-5",
      )}
    >
      <div className="mx-auto w-full max-w-[1380px] px-3 sm:px-6 lg:px-8 xl:px-10">
        <nav
          aria-label="Main"
          className={cn(
            "flex items-center justify-between gap-2 xl:gap-3 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 transition-all duration-500 w-full max-w-full box-border overflow-hidden",
            scrolled
              ? "surface-glass-dark shadow-lift"
              : "border border-white/15 bg-navy-ink/50 backdrop-blur-md shadow-lg",
          )}
        >
          {/* LEFT SECTION: BRAND — flex-shrink-0 ensures logo and brand name are protected */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
              <img
                src={logo}
                alt="Hosur Football & Fitness Academy crest"
                width={56}
                height={56}
                className={cn(
                  "shrink-0 drop-shadow-md transition-all duration-500",
                  scrolled ? "h-8 w-8 sm:h-9 sm:w-9" : "h-9 w-9 xl:h-10 xl:w-10",
                )}
              />
              <div className="flex flex-col justify-center text-left">
                <span className="font-display text-xs sm:text-sm xl:text-base leading-none text-white font-extrabold whitespace-nowrap tracking-[0.02em]">
                  Hosur Football
                </span>
                <span className="mt-0.5 text-[0.48rem] xl:text-[0.52rem] font-extrabold tracking-[0.14em] text-gold uppercase whitespace-nowrap">
                  & Fitness Academy
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER SECTION: NAVIGATION LINKS — flex: 1, responsive gap and font sizing */}
          <div className="hidden xl:flex items-center justify-center shrink min-w-0 px-1">
            <ul className="flex items-center justify-center gap-0.5 2xl:gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="shrink-0">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-full px-2 py-1 text-[0.66rem] 2xl:px-2.5 2xl:py-1.5 2xl:text-xs font-extrabold tracking-normal text-white/90 uppercase transition-colors hover:bg-white/15 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none whitespace-nowrap",
                        isActive && "bg-white/15 text-gold font-extrabold shadow-sm",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SECTION: JOIN NOW & HAMBURGER MENU — shrink-0 guarantees JOIN NOW is 100% visible inside navbar */}
          <div className="flex items-center gap-2 shrink-0 justify-end">
            <Button asChild variant="flame" size="pill" className="hidden sm:inline-flex px-3.5 py-1.5 text-xs 2xl:px-5 2xl:py-2.5 2xl:text-sm font-extrabold uppercase shadow-flame whitespace-nowrap">
              <Link to="/registration">Join Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:text-gold xl:hidden"
            >
              {open ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        data-open={open}
        className="mobile-menu mx-4 mt-3 overflow-hidden rounded-3xl surface-glass-dark shadow-lift xl:hidden"
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

