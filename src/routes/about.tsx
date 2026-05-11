import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Target, Eye, Heart, ShieldCheck, Sparkles, Users, GraduationCap, Briefcase,
  Stethoscope, ArrowRight, Building2, BadgeCheck, Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siri Health Care | Trusted Kidney & General Medicine Clinic" },
      { name: "description", content: "Compassionate healthcare backed by 19+ years of experience in nephrology, kidney care, diabetes management and preventive medicine." },
      { property: "og:title", content: "About Siri Health Care" },
      { property: "og:description", content: "The story, mission and people behind Siri Health Care." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl gradient-primary opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-px mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">About us</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Compassionate Healthcare,<br className="hidden md:block" /> <span className="text-gradient">Backed by Experience.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For nearly two decades, Siri Health Care has earned patient trust through specialist nephrology care, preventive medicine and a commitment to long-term wellness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLINIC STORY — TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our story</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">A clinic shaped by patient need, not trend.</h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
            <div className="space-y-14">
              {[
                {
                  year: "The beginning",
                  title: "A different kind of consultation room",
                  text: "Siri Health Care began with one belief: that medicine works best when patients are heard first. Our consultation rooms were built around time, not throughput.",
                  icon: Building2,
                },
                {
                  year: "The vision",
                  title: "Specialist care, calmly delivered",
                  text: "We saw too many patients confused, hurried, and over-prescribed. Our vision became clear — bring expert nephrology and internal medicine within reach, without the chaos of large hospitals.",
                  icon: Eye,
                },
                {
                  year: "The commitment",
                  title: "Long-term care, not transactions",
                  text: "Every patient becomes part of a long-term relationship. We track outcomes, follow up proactively, and keep families informed at every step.",
                  icon: Heart,
                },
              ].map((s, i) => (
                <Reveal key={i}>
                  <div className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 ? "" : ""}`}>
                    <div className={`md:text-right ${i % 2 ? "md:order-2 md:text-left" : ""}`}>
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary">{s.year}</span>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight">{s.title}</h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                    <div className={`relative ${i % 2 ? "md:order-1" : ""}`}>
                      <div className="aspect-[4/3] rounded-3xl gradient-soft border border-border shadow-soft grid place-items-center">
                        <s.icon className="h-16 w-16 text-primary/30" />
                      </div>
                    </div>
                    <span className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full gradient-primary ring-4 ring-background" aria-hidden />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">What drives us</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Mission, vision and values.</h2>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: "Mission", text: "Make expert kidney and internal medicine accessible to every family — with empathy, precision and time." },
              { icon: Eye, title: "Vision", text: "To be Hyderabad's most trusted clinic for nephrology and preventive health, defined by outcomes and patient love." },
              { icon: Heart, title: "Values", text: "Trust, transparency, compassion, and ethical practice — non-negotiable in every consultation." },
            ].map((b) => (
              <motion.div key={b.title} variants={itemVariants}
                className="relative overflow-hidden rounded-3xl bg-card/70 backdrop-blur border border-border p-8 shadow-soft hover:shadow-elevated transition-shadow group">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold">{b.title}</h3>
                <p className="relative mt-3 text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DOCTOR EXPERIENCE */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Lead consultant</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Two decades of clinical craft.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl gradient-soft border border-border shadow-soft grid place-items-center">
                    <Stethoscope className="h-24 w-24 text-primary/25" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-card border border-border px-5 py-4 shadow-elevated"
                  >
                    <div className="flex items-center gap-3">
                      <BadgeCheck className="h-6 w-6 text-secondary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Board certified</div>
                        <div className="text-sm font-semibold">DM Nephrology</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Nephrology", "Internal Medicine", "Diabetes", "Hypertension"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-semibold">Dr. Vikram Kumar</h3>
                <p className="text-primary text-sm font-medium mt-1">Consultant Nephrologist & General Physician</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  "I believe in medicine that listens first. Every patient brings a story — clinical decisions are best when we honour both the science and the person."
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: GraduationCap, title: "MBBS — General Medicine", sub: "Foundational clinical training" },
                    { icon: GraduationCap, title: "MD — General Medicine", sub: "Internal medicine specialisation" },
                    { icon: GraduationCap, title: "DM — Nephrology", sub: "Super-specialty in kidney care" },
                    { icon: Briefcase, title: "19 years of experience", sub: "Across hospital and outpatient practice" },
                  ].map((c) => (
                    <div key={c.title} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft">
                      <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{c.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild className="rounded-full gradient-primary text-primary-foreground hover:opacity-95">
                    <Link to="/contact">Book Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLINIC ENVIRONMENT — MASONRY */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Inside the clinic</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">A calm, modern space — built around patient comfort.</h2>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { label: "Reception", h: "h-72 md:h-80" },
              { label: "Consultation Room", h: "h-72 md:h-[26rem]" },
              { label: "Patient Lounge", h: "h-72 md:h-72" },
              { label: "Diagnostic Area", h: "h-72 md:h-72" },
              { label: "Care Suite", h: "h-72 md:h-80" },
              { label: "Wellness Corner", h: "h-72 md:h-[22rem]" },
            ].map((g, i) => (
              <motion.div key={i} variants={itemVariants}
                className={`group relative overflow-hidden rounded-3xl gradient-soft border border-border shadow-soft ${g.h} ${i === 1 ? "md:row-span-2" : ""}`}>
                <div className="absolute inset-0 grid place-items-center transition-transform duration-500 group-hover:scale-105">
                  <Camera className="h-12 w-12 text-primary/25" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                  <span className="text-sm font-medium">{g.label}</span>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* VALUES / PATIENT CARE */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Patient care principles</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">The values behind every consultation.</h2>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: "Trust", text: "Honest assessments and clear treatment options — always." },
              { icon: Eye, title: "Transparency", text: "Open conversations about diagnosis, plan and cost." },
              { icon: Heart, title: "Compassion", text: "Care that recognises the person behind every chart." },
              { icon: BadgeCheck, title: "Ethical Healthcare", text: "Evidence-led decisions, never influenced by anything else." },
              { icon: Sparkles, title: "Long-term Wellness", text: "Plans that work today and protect tomorrow." },
              { icon: Users, title: "Family-Centric", text: "We care for individuals as part of the families they love." },
            ].map((v) => (
              <motion.div key={v.title} variants={itemVariants}
                className="rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated transition-shadow">
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-20 text-primary-foreground shadow-elevated">
              <motion.div
                aria-hidden
                className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/15 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Begin your care journey with Siri Health Care.</h2>
                <p className="mt-5 text-primary-foreground/85 text-lg">A calm consultation, a clear plan, and care you can rely on.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full h-12 px-7 bg-background text-primary hover:bg-background/95">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
