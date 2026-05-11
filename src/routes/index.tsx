import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Stethoscope, HeartPulse, Activity, Droplet, Sparkles,
  Users, Award, Clock, Star, CheckCircle2, BadgeCheck, Phone, GraduationCap, Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { TestimonialsMarquee } from "@/components/site/TestimonialsMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siri Health Care — Best Nephrology & General Medicine in Hyderabad" },
      { name: "description", content: "Expert kidney care, diabetes management, hypertension and preventive healthcare in Hyderabad. Specialist-led, patient-first consultation by Dr. Vikram Kumar." },
      { name: "keywords", content: "Best Nephrologist in Hyderabad, Kidney Care Clinic, General Physician Consultation, Preventive Healthcare, Diabetes Management" },
      { property: "og:title", content: "Siri Health Care — Expert Nephrology & General Medicine" },
      { property: "og:description", content: "Trusted nephrology and general medicine clinic — kidney care, diabetes, hypertension, preventive health." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Droplet, title: "Nephrology", desc: "Comprehensive kidney care from prevention to advanced therapy." },
  { icon: Stethoscope, title: "General Medicine", desc: "Trusted everyday care for adults and families." },
  { icon: Activity, title: "Diabetes Management", desc: "Personalised plans to manage and prevent complications." },
  { icon: HeartPulse, title: "Hypertension Care", desc: "Long-term blood pressure management with empathy." },
  { icon: ShieldCheck, title: "Kidney Disease Consultation", desc: "Expert evaluation of CKD, stones and dialysis support." },
  { icon: Sparkles, title: "Preventive Health Checkups", desc: "Annual screenings tailored to your risk profile." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 -z-10 gradient-soft" />
        <motion.div
          aria-hidden
          className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl gradient-primary opacity-25"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl bg-secondary/30"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/70 backdrop-blur text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  Now accepting new patients in Hyderabad
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.04] tracking-tight">
                  Expert Kidney & <br className="hidden md:block" />
                  General Healthcare <span className="text-gradient">You Can Trust.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Professional nephrology, diabetes care, preventive healthcare and general medicine consultations — delivered with compassionate, patient-first care.
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
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                  {["19+ years experience", "Specialist-led care", "Evidence-based"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary" /> {t}
                    </span>
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
                      <HeartPulse className="h-44 w-44 text-primary/20" />
                    </div>

                    {/* Floating trust badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-6 left-6 rounded-2xl bg-background/90 backdrop-blur p-4 border border-border shadow-soft"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-secondary/15 text-secondary grid place-items-center">
                          <BadgeCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Verified Specialist</div>
                          <div className="text-sm font-semibold">DM, Nephrology</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating experience card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.65 }}
                      className="absolute top-1/2 -translate-y-1/2 -right-6 rounded-2xl bg-background/95 backdrop-blur p-4 border border-border shadow-elevated"
                    >
                      <div className="text-3xl font-display font-semibold text-primary leading-none">19+</div>
                      <div className="text-xs text-muted-foreground mt-1 max-w-[110px]">Years of clinical experience</div>
                    </motion.div>

                    {/* Doctor card */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 backdrop-blur p-5 border border-border shadow-soft"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-primary-foreground">
                          <Stethoscope className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Dr. Vikram Kumar</div>
                          <div className="text-xs text-muted-foreground">MBBS, MD, DM (Nephrology)</div>
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

      {/* TRUST INDICATORS */}
      <section className="py-16 md:py-20 border-y border-border bg-muted/40">
        <div className="container-px mx-auto max-w-7xl">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, value: 19, suffix: "+", label: "Years Experience" },
              { icon: Droplet, value: 5000, suffix: "+", label: "Nephrology Cases" },
              { icon: Users, value: 10, suffix: "k+", label: "Patients Cared For" },
              { icon: Star, value: 98, suffix: "%", label: "Satisfaction Rate" },
            ].map((s) => (
              <motion.div key={s.label} variants={itemVariants}
                className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-3xl md:text-4xl font-display font-semibold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl gradient-soft border border-border shadow-soft grid place-items-center">
                <Stethoscope className="h-28 w-28 text-primary/25" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 md:-right-10 w-64 rounded-2xl bg-card border border-border p-5 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/15 text-secondary grid place-items-center">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Trusted by families</div>
                    <div className="text-xs text-muted-foreground">10,000+ patients served</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-4 md:-left-10 w-56 rounded-2xl bg-card border border-border p-5 shadow-elevated"
              >
                <div className="text-xs text-muted-foreground">Our promise</div>
                <div className="mt-1 text-sm font-semibold">Calm, unhurried consultations.</div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">About Siri Health Care</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              A modern clinic built around <span className="text-gradient">timeless values of care.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We exist for patients who want clarity, time and genuine expertise. Siri Health Care brings together specialised nephrology and general medicine in a calm, patient-first environment — every consultation unhurried, every plan personalised.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personalised treatment plans built around your life",
                "Specialist-led care for kidney and chronic conditions",
                "Transparent, easy-to-understand communication",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="rounded-full" variant="outline">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our Services</span>
                <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Comprehensive care, all in one place.</h2>
                <p className="mt-5 text-muted-foreground">From routine consultations to advanced specialist care.</p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/services">View all services <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}
                className="group relative rounded-2xl bg-card border border-border p-7 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Meet your doctor</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Care you can put a name to.</h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-card border border-border p-8 md:p-12 shadow-soft grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 relative">
                <div className="aspect-square rounded-3xl gradient-soft border border-border grid place-items-center">
                  <Stethoscope className="h-20 w-20 text-primary/30" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 rounded-2xl bg-background border border-border px-5 py-3 shadow-elevated"
                >
                  <div className="text-2xl font-display font-semibold text-primary leading-none">19+</div>
                  <div className="text-xs text-muted-foreground mt-1">years</div>
                </motion.div>
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Nephrology", "Internal Medicine", "Dialysis Care"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">Dr. Vikram Kumar</h3>
                <p className="text-primary text-sm font-medium mt-1">Consultant Nephrologist & Physician</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: GraduationCap, t: "MBBS — General Medicine" },
                    { icon: GraduationCap, t: "MD — General Medicine" },
                    { icon: GraduationCap, t: "DM — Nephrology" },
                    { icon: Briefcase, t: "19 years experience" },
                  ].map((c) => (
                    <div key={c.t} className="flex items-start gap-2 text-muted-foreground">
                      <c.icon className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {c.t}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Dedicated to compassionate, evidence-based care for kidney disease, diabetes and complex internal medicine.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full gradient-primary text-primary-foreground hover:opacity-95">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link to="/doctors">View Profile <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US — Bento */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why Siri Health Care</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">A different kind of clinic experience.</h2>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 auto-rows-[minmax(180px,_auto)]">
            <motion.div variants={itemVariants}
              className="md:col-span-2 md:row-span-2 rounded-3xl gradient-primary text-primary-foreground p-8 md:p-10 shadow-elevated relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <Award className="h-8 w-8" />
              <h3 className="mt-6 text-2xl md:text-3xl font-semibold leading-tight">Experienced specialists, focused on outcomes.</h3>
              <p className="mt-4 text-primary-foreground/85 max-w-md leading-relaxed">
                Two decades of clinical practice in nephrology and internal medicine — the difference shows in every consultation.
              </p>
            </motion.div>

            {[
              { icon: HeartPulse, title: "Compassionate care", desc: "We listen, then treat." },
              { icon: Users, title: "Personalised treatment", desc: "Built around your life." },
              { icon: Sparkles, title: "Modern approach", desc: "Latest evidence, calm delivery." },
              { icon: ShieldCheck, title: "Preventive focus", desc: "Stay well, longer." },
            ].map((b) => (
              <motion.div key={b.title} variants={itemVariants}
                className="rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated transition-shadow">
                <b.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Patient stories</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Care that leaves a lasting impression.</h2>
            </div>
          </Reveal>
        </div>
        <div className="mt-14">
          <TestimonialsMarquee />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Answers to common questions.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {[
                { q: "How do I book an appointment?", a: "You can book via our Contact page form, by calling the clinic, or by sending an email. We confirm appointments within one business day." },
                { q: "What are the consultation hours?", a: "Monday to Saturday, 9:00 AM to 8:00 PM. Sundays are reserved for emergencies and follow-up calls only." },
                { q: "What services do you offer?", a: "Nephrology, general medicine, diabetes care, hypertension management, kidney disease consultation, and preventive health checkups." },
                { q: "Do you provide emergency support?", a: "Yes. Existing patients have access to a priority phone line for urgent concerns. For life-threatening emergencies, please dial your nearest hospital." },
                { q: "How do you approach preventive health?", a: "We tailor screening packages based on your age, family history and lifestyle — focused on catching issues early and supporting long-term wellness." },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl bg-card px-6 shadow-soft">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
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
              <motion.div
                aria-hidden
                className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-secondary/40 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight">Your Health Deserves Expert Care.</h2>
                <p className="mt-5 text-primary-foreground/85 text-lg">
                  Book a consultation today — we'll take it from here.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full h-12 px-7 bg-background text-primary hover:bg-background/95">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                    <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Contact Clinic</Link>
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
