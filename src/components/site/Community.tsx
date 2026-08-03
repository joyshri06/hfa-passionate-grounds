import { useState } from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Send,
  Youtube,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./primitives";
import { galleryImages } from "./Sections";
import logo from "@/assets/hfa-logo.png";

export const WHATSAPP_NUMBER = "919876543210";
const MAPS_QUERY = "Hosur+Football+Academy+Hosur+Tamil+Nadu";

const testimonials = [
  {
    quote:
      "My son joined at seven, barely able to trap a ball. Three years later he's captaining his school team. The coaches genuinely care.",
    name: "Lakshmi S.",
    role: "Parent, U-11",
  },
  {
    quote:
      "The fitness programme changed how I play. Strength work, recovery, nutrition advice — it's run like a professional setup.",
    name: "Mohammed A.",
    role: "Player, Elite Youth",
  },
  {
    quote:
      "Best decision we made in Hosur. Disciplined, safe, and the match exposure is far beyond any other academy nearby.",
    name: "Ravi Kumar",
    role: "Parent, U-15",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Words from our families</>}
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-card p-7 shadow-lift transition-transform duration-400 hover:-translate-y-1.5">
                <Quote className="size-7 text-orange" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block font-display text-base text-navy">{item.name}</span>
                  <span className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What age can my child start?",
    a: "We accept players from age five in our Little Kickers group. There is no upper limit — we run adult fitness football sessions in the evenings too.",
  },
  {
    q: "Is there a trial session?",
    a: "Yes. Every new player gets one free trial session so you and your child can experience the coaching before committing.",
  },
  {
    q: "What should players bring?",
    a: "Football boots, shin guards, a water bottle and comfortable training kit. Academy jerseys are provided after enrolment.",
  },
  {
    q: "How often are the sessions?",
    a: "Most groups train three days a week with weekend match play. Elite Youth adds an extra strength and conditioning slot.",
  },
  {
    q: "Do you help with district and state trials?",
    a: "Absolutely. We prepare players technically and physically, arrange highlight footage and refer them to district and state selectors.",
  },
  {
    q: "Where is the academy located?",
    a: "Our home ground is in Hosur, Tamil Nadu. Use the map below for directions, or message us on WhatsApp for the exact landmark.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions parents ask</>}
          description="Still unsure about something? Message us on WhatsApp and we'll answer the same day."
        />
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-3 overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-sm last:mb-0"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base text-navy hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function Social() {
  return (
    <section id="social" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Community"
          align="center"
          title={<>Follow the journey</>}
          description="Match highlights, training clips and academy news, posted every week."
        />

        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl bg-card p-5 shadow-lift sm:flex sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-flame text-white">
                <Instagram className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-lg text-navy">@hosurfootballacademy</p>
                <p className="text-xs text-muted-foreground">Latest from Instagram</p>
              </div>
            </div>
            <Button asChild variant="navy" size="pillSm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </a>
            </Button>
          </div>
        </Reveal>

        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={`ig-${image.src}`} delay={(i % 4) * 70}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl shadow-lift"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-navy-ink/0 text-white opacity-0 transition-all duration-400 group-hover:bg-navy-ink/55 group-hover:opacity-100">
                  <Instagram className="size-6" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl bg-navy p-6 shadow-lift sm:flex sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                <Facebook className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-lg text-white">
                  Hosur Football & Fitness Academy
                </p>
                <p className="text-xs text-white/60">
                  Fixtures, results and community updates on Facebook
                </p>
              </div>
            </div>
            <Button asChild variant="gold" size="pillSm">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Like Page
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi HFA! I'm ${data.get("name")} (${data.get("phone")}).%0AProgram: ${data.get("program")}%0A${data.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/30";

  return (
    <section id="contact" className="relative overflow-hidden bg-pitch py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-orange/20 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Contact"
          title={
            <>
              Ready to <span className="text-flame">join HFA?</span>
            </>
          }
          description="Send us a message and our team will get back to you with trial timings and fee details."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-card p-6 shadow-lift sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                    Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={fieldClass}
                    placeholder="+91 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="program" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                    Program of interest
                  </label>
                  <select id="program" name="program" className={fieldClass} defaultValue="Little Kickers">
                    <option>Little Kickers (5–8)</option>
                    <option>Development Squad (9–13)</option>
                    <option>Elite Youth (14–18)</option>
                    <option>Strength & Fitness</option>
                    <option>Goalkeeper Lab</option>
                    <option>Adult Fitness Football</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-bold tracking-[0.16em] text-navy uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about the player — age, experience, preferred timings."
                  />
                </div>
              </div>
              <Button type="submit" variant="flame" size="pill" className="mt-6 w-full">
                Send via WhatsApp <Send className="size-4" aria-hidden="true" />
              </Button>
              <p aria-live="polite" className="mt-3 min-h-5 text-center text-xs text-muted-foreground">
                {sent ? "Thanks! Your message is ready in WhatsApp." : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={110}>
            <div className="flex h-full flex-col gap-4">
              <ul className="grid gap-3 rounded-[2rem] surface-glass-dark p-6 sm:p-7">
                {[
                  { icon: MapPin, label: "HFA Ground, Hosur, Tamil Nadu 635109" },
                  { icon: Phone, label: "+91 98765 43210" },
                  { icon: Mail, label: "hello@hosurfootballacademy.in" },
                  { icon: Clock, label: "Mon–Sat · 6:00–9:00 AM & 4:30–8:00 PM" },
                ].map((item) => (
                  <li key={item.label} className="flex min-w-0 items-center gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <item.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 text-sm text-white/80">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1 overflow-hidden rounded-[2rem] shadow-lift">
                <iframe
                  title="Map showing Hosur Football & Fitness Academy location"
                  src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 lg:h-full lg:min-h-[18rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-ink py-14 text-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="Hosur Football & Fitness Academy crest"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0"
              />
              <span className="min-w-0">
                <span className="block truncate font-display text-lg text-white">
                  Hosur Football
                </span>
                <span className="block text-[0.6rem] font-bold tracking-[0.26em] text-gold uppercase">
                  & Fitness Academy
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              One Hosur. One Passion. One Academy. Developing footballers and
              athletes in Hosur since 2018.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm tracking-[0.2em] text-white">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#about", "About"],
                ["#programs", "Programs"],
                ["#coaches", "Coaches"],
                ["#achievements", "Achievements"],
                ["#events", "Events"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm tracking-[0.2em] text-white">Visit us</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic">
              <p>HFA Ground, Hosur,<br />Tamil Nadu 635109</p>
              <p>
                <a href="tel:+919876543210" className="transition-colors hover:text-gold">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@hosurfootballacademy.in"
                  className="break-all transition-colors hover:text-gold"
                >
                  hello@hosurfootballacademy.in
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hosur Football & Fitness Academy. All rights reserved.</p>
          <p>Established 2018 · Hosur, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HFA on WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-flame transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
