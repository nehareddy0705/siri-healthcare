import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Stethoscope, HeartPulse, Activity, Droplet, Sparkles, Users, Award, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siri Health Care — Expert Nephrology & General Medicine" },
      { name: "description", content: "Compassionate, evidence-based care for kidney health, diabetes, hypertension and everyday medicine." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Droplet, title: "Nephrology", desc: "Comprehensive kidney care from prevention to advanced therapy." },
  { icon: Stethoscope, title: "General Medicine", desc: "Trusted everyday care for adults and families." },
  { icon: Activity, title: "Diabetes Care", desc: "Personalized plans to manage and prevent complications." },
  { icon: HeartPulse, title: "Hypertension", desc: "Long-term blood pressure management with care." },
  { icon: ShieldCheck, title: "Preventive Health", desc: "Annual checks and screenings tailored to you." },
  { icon: Sparkles, title: "Wellness", desc: "Lifestyle guidance for a healthier tomorrow." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 gradient-soft">
        <div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(60%_60%_at_50%_0%,oklch(0.55_0.13_220/0.18),transparent)]" />
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/60 backdrop-blur text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  Now accepting new patients
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                  Healthcare you can <span className="text-gradient">truly trust.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Expert nephrology and general medicine — delivered with empathy, precision and the latest clinical practice.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="rounded-full h-12 px-7 gradient-primary text-primary-foreground shadow-elevated hover:opacity-95">
                    <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { n: "15+", l: "Years experience" },
                    { n: "10k+", l: "Patients cared for" },
                    { n: "4.9★", l: "Patient rating" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl md:text-3xl font-display font-semibold text-primary">{s.n}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative">
                  <div className="absolute -inset-4 gradient-primary opacity-20 blur-2xl rounded-[2rem]" />
                  <div className="relative aspect-[4/5] rounded-[2rem] bg-card border border-border shadow-elevated overflow-hidden">
                    <div className="absolute inset-0 gradient-soft" />
                    <div className="absolute inset-0 grid place-items-center">
                      <HeartPulse className="h-40 w-40 text-primary/20" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 backdrop-blur p-5 border border-border shadow-soft"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-primary-foreground">
                          <Stethoscope className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Dr. Vikram Kumar</div>
                          <div className="text-xs text-muted-foreground">Consultant Nephrologist</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">About the clinic</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              A modern clinic built on timeless values of care.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Siri Health Care brings together specialised expertise and a calm, patient-first environment. Every consultation is unhurried, every plan personalised, and every patient treated like family.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/about">Learn more about us <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Award, title: "Specialist-led", desc: "Care led by experienced consultants." },
              { icon: Users, title: "Patient-first", desc: "Empathy in every interaction." },
              { icon: Clock, title: "On time", desc: "Respect for your schedule." },
              { icon: ShieldCheck, title: "Evidence-based", desc: "Latest clinical practice." },
            ].map((f) => (
              <motion.div key={f.title} variants={itemVariants}
                className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Services</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Comprehensive care, all in one place.</h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}
                className="group rounded-2xl bg-card border border-border p-7 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all">
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex mt-5 text-sm font-medium text-primary group-hover:gap-2 gap-1 items-center transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Meet your doctor</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Trusted by thousands of patients.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 max-w-3xl mx-auto rounded-3xl bg-card border border-border p-8 md:p-12 shadow-soft grid md:grid-cols-3 gap-8 items-center">
              <div className="aspect-square rounded-2xl gradient-soft border border-border grid place-items-center">
                <Stethoscope className="h-16 w-16 text-primary/30" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold">Dr. Vikram Kumar</h3>
                <p className="text-primary text-sm font-medium mt-1">Consultant Nephrologist & Physician</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  MD (Medicine), DM (Nephrology) — bringing over a decade of clinical experience in kidney care, diabetes, and complex medical management.
                </p>
                <Button asChild className="mt-6 rounded-full" variant="outline">
                  <Link to="/doctors">View profile <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Patient stories</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Care that leaves a lasting impression.</h2>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { name: "Priya R.", text: "The most thorough, kind doctor we've ever met. Truly grateful." },
              { name: "Anil K.", text: "Clear explanations, real follow-through. Felt cared for at every step." },
              { name: "Sangeeta M.", text: "Professional, calm, and genuinely concerned about my recovery." },
            ].map((t) => (
              <motion.div key={t.name} variants={itemVariants}
                className="rounded-2xl bg-card border border-border p-7 shadow-soft">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="mt-5 text-sm font-semibold">{t.name}</div>
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
              <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                  Take the next step in your health journey.
                </h2>
                <p className="mt-5 text-primary-foreground/85 text-lg">
                  Book a consultation today — we'll take it from here.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full h-12 px-7 bg-background text-primary hover:bg-background/95">
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                    <Link to="/services">View services</Link>
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
