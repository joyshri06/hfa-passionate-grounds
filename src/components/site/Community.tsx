import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Send,
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

export function Testimonials({ isPreview = false }: { isPreview?: boolean }) {
  return (
    <section id="testimonials" className="bg-secondary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Words from our families</>}
          description="Read real feedback from parents and players in the HFA community."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-[2rem] bg-card p-6 sm:p-9 shadow-lift transition-transform duration-400 hover:-translate-y-2">
                <Quote className="size-8 text-orange" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-sm sm:text-base leading-relaxed text-foreground/85 font-medium">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-display text-lg sm:text-xl text-navy font-bold">{item.name}</span>
                  <span className="text-xs font-extrabold tracking-[0.22em] text-muted-foreground uppercase">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {isPreview ? (
          <Reveal delay={140}>
            <div className="mt-12 text-center">
              <Button asChild variant="navy" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold">
                <Link to="/testimonials">
                  Read All Testimonials <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
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

export function FAQ({ isPreview = false }: { isPreview?: boolean }) {
  const displayFaqs = isPreview ? faqs.slice(0, 4) : faqs;

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto grid w-full max-w-[1380px] gap-10 lg:gap-16 px-4 sm:px-8 lg:px-16 xl:px-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions parents ask</>}
            description="Still unsure about something? Message us on WhatsApp and we'll answer the same day."
          />
          {isPreview ? (
            <Reveal delay={140}>
              <div className="mt-8">
                <Button asChild variant="flame" size="pill" className="px-8 py-3.5 text-sm sm:text-base font-extrabold shadow-flame">
                  <Link to="/faq">
                    View Complete FAQ List <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-4 overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card px-5 sm:px-7 shadow-sm last:mb-0"
              >
                <AccordionTrigger className="py-5 sm:py-7 text-left font-display text-lg sm:text-xl text-navy hover:no-underline font-bold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-7 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
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
    <section id="social" className="bg-secondary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
        <SectionHeading
          eyebrow="Community"
          align="center"
          title={<>Follow the journey</>}
          description="Match highlights, training clips and academy news, posted every week."
        />

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-card p-5 sm:p-7 shadow-lift">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-flame text-white shadow-flame">
                <Instagram className="size-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-xl sm:text-2xl text-navy font-bold">@hosurfootballacademy</p>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Latest from Instagram</p>
              </div>
            </div>
            <Button asChild variant="navy" size="pillSm" className="px-6 py-2.5 text-sm font-extrabold">
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

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={`ig-${image.src}`} delay={(i % 4) * 70}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl shadow-lift"
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
                  <Instagram className="size-7 sm:size-9" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-navy p-6 sm:p-8 shadow-lift">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-white">
                <Facebook className="size-6" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-xl sm:text-2xl text-white font-bold">
                  Hosur Football & Fitness Academy
                </p>
                <p className="text-sm sm:text-base text-white/80 font-medium">
                  Fixtures, results and community updates on Facebook
                </p>
              </div>
            </div>
            <Button asChild variant="gold" size="pillSm" className="px-6 py-2.5 text-sm font-extrabold">
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

export function Contact({ isPreview = false }: { isPreview?: boolean }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi HFA! I'm ${data.get("name")} (${data.get("phone")}).%0AProgram: ${data.get("program")}%0A${data.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-xl sm:rounded-2xl border border-border bg-background px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/30 font-medium";

  return (
    <section id="contact" className="relative overflow-hidden bg-pitch py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-orange/20 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-8 lg:px-16 xl:px-20">
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

        <div className="mt-12 grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-card p-6 sm:p-10 shadow-lift"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs font-extrabold tracking-[0.2em] text-navy uppercase">
                    Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your full name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-2 block text-xs font-extrabold tracking-[0.2em] text-navy uppercase">
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
                  <label htmlFor="program" className="mb-2 block text-xs font-extrabold tracking-[0.2em] text-navy uppercase">
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
                  <label htmlFor="message" className="mb-2 block text-xs font-extrabold tracking-[0.2em] text-navy uppercase">
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
              <Button type="submit" variant="flame" size="pill" className="mt-7 w-full py-4 text-base font-extrabold shadow-flame">
                Send via WhatsApp <Send className="ml-2 size-5" aria-hidden="true" />
              </Button>
              <p aria-live="polite" className="mt-4 min-h-6 text-center text-sm text-muted-foreground font-semibold">
                {sent ? "Thanks! Your message is ready in WhatsApp." : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={110}>
            <div className="flex h-full flex-col gap-5">
              <ul className="grid gap-4 rounded-[2rem] surface-glass-dark p-6 sm:p-9 shadow-lift">
                {[
                  { icon: MapPin, label: "HFA Ground, Hosur, Tamil Nadu 635109" },
                  { icon: Phone, label: "+91 98765 43210" },
                  { icon: Mail, label: "hello@hosurfootballacademy.in" },
                  { icon: Clock, label: "Mon–Sat · 6:00–9:00 AM & 4:30–8:00 PM" },
                ].map((item) => (
                  <li key={item.label} className="flex min-w-0 items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 text-base text-white/90 font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1 overflow-hidden rounded-[2rem] shadow-lift min-h-[16rem]">
                <iframe
                  title="Map showing Hosur Football & Fitness Academy location"
                  src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 sm:h-full w-full border-0 lg:min-h-[20rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Footer, WhatsAppButton } from "./Footer";
