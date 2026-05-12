import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  ArrowRight,
  Award,
  ShieldCheck,
  HeartPulse,
  Droplet,
  Activity,
  Sparkles,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  ClipboardList,
  Microscope,
  Repeat,
  Star,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import drVikramImg from "@/assets/dr-vikram-kumar.jpeg";
import { Counter } from "@/components/site/Counter";
import { TestimonialsMarquee } from "@/components/site/TestimonialsMarquee";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Best Nephrologist in Hyderabad — Dr. Vikram Kumar | Siri Health Care" },
      {
        name: "description",
        content:
          "Meet Dr. Vikram Kumar — MBBS, MD, DM (Nephrology) with 19+ years of experience. Premier kidney specialist & general physician at Siri Health Care, SR Nagar Hyderabad.",
      },
      { property: "og:title", content: "Best Nephrologist in Hyderabad — Dr. Vikram Kumar" },
      {
        property: "og:description",
        content:
          "Specialist nephrology and general medicine consultations focused on patient-first care and long-term wellness.",
      },
    ],
  }),
  component: DoctorsPage,
});

const specializations = [
  { icon: Droplet, title: "Nephrology", desc: "Comprehensive kidney care from early detection to advanced therapy." },
  { icon: ShieldCheck, title: "Kidney Disease Management", desc: "CKD staging, dialysis support and long-term renal protection." },
  { icon: Activity, title: "Diabetes Management", desc: "Personalised plans for sustainable blood sugar control." },
  { icon: HeartPulse, title: "Hypertension Care", desc: "Evidence-based BP management and cardiovascular risk reduction." },
  { icon: Sparkles, title: "Preventive Healthcare", desc: "Annual screenings and lifestyle counselling tailored to you." },
  { icon: Stethoscope, title: "General Physician Consultation", desc: "Trusted care for everyday illnesses and complex conditions." },
];

const credentials = [
  { icon: GraduationCap, label: "MBBS", sub: "General Medicine" },
  { icon: GraduationCap, label: "MD", sub: "General Medicine" },
  { icon: Award, label: "DM", sub: "Nephrology" },
];

const consultationSteps = [
  { icon: Calendar, title: "Book Appointment", desc: "Reserve a slot online or by calling the clinic — same-day visits often available." },
  { icon: ClipboardList, title: "Consultation & Evaluation", desc: "An unhurried discussion of your history, symptoms and concerns." },
  { icon: Microscope, title: "Diagnosis & Care Plan", desc: "Clear, evidence-based diagnosis with a personalised treatment plan." },
  { icon: Repeat, title: "Follow-up Guidance", desc: "Ongoing reviews to ensure progress and long-term wellness." },
];

const faqs = [
  { q: "How can I book an appointment with Dr. Vikram Kumar?", a: "Call the clinic at 040-49551250 or use the contact form. We confirm appointments within minutes during clinic hours." },
  { q: "What are the consultation timings?", a: "Consultations are available Monday to Saturday, mornings and evenings. Sunday visits by prior appointment." },
  { q: "Do you offer guidance for chronic kidney disease?", a: "Yes. Dr. Kumar provides full-spectrum CKD care — staging, lifestyle plans, medication, dialysis support and transplant counselling." },
  { q: "Can I consult for preventive health checkups?", a: "Absolutely. Annual preventive screenings tailored to your age, risk factors and family history are a core part of our practice." },
  { q: "How is diabetes management handled at the clinic?", a: "We design individualised plans combining medication, nutrition, monitoring and regular reviews to keep blood sugar within target." },
];

function DoctorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative container-px mx-auto max-w-6xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Doctors</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                  <Stethoscope className="h-3.5 w-3.5" /> Our Specialists
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
                  Experienced Healthcare <span className="text-gradient">Specialists</span> You Can Trust
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Expert nephrology and general healthcare consultations focused on patient-first treatment and long-term wellness.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <a href="tel:04049551250"><Phone className="mr-1 h-4 w-4" /> Contact Clinic</a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl bg-card border border-border shadow-elevated p-7">
                  <div className="aspect-[4/5] rounded-2xl gradient-soft border border-border overflow-hidden relative">
                    <img src={drVikramImg} alt="Dr. Vikram Kumar — Nephrologist & General Physician" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 left-4 rounded-xl bg-card border border-border shadow-soft px-3 py-2 text-xs font-semibold flex items-center gap-2"
                    >
                      <ShieldCheck className="h-4 w-4 text-secondary" /> Trusted Care
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 right-4 rounded-xl gradient-primary text-primary-foreground shadow-elevated px-4 py-3 text-sm font-semibold"
                    >
                      19+ Years
                      <div className="text-[10px] font-normal opacity-90">Experience</div>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 rounded-2xl bg-card border border-border shadow-soft p-4 hidden md:flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-full gradient-primary text-primary-foreground grid place-items-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">10,000+</div>
                    <div className="text-xs text-muted-foreground">Patients Cared For</div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
            <Reveal>
              <div className="lg:sticky lg:top-28 rounded-3xl bg-card border border-border shadow-soft p-7">
                <div className="aspect-square rounded-2xl gradient-soft border border-border overflow-hidden relative mb-6">
                  <img src={drVikramImg} alt="Dr. Vikram Kumar" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <h2 className="text-2xl font-semibold">Dr. Vikram Kumar</h2>
                <p className="text-sm text-primary font-medium mt-1">Nephrology · General Medicine</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="text-2xl font-semibold text-primary"><Counter to={19} suffix="+" /></div>
                    <div className="text-[11px] text-muted-foreground">Years</div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="text-2xl font-semibold text-primary"><Counter to={10} suffix="K+" /></div>
                    <div className="text-[11px] text-muted-foreground">Patients</div>
                  </div>
                </div>
                <Button asChild className="rounded-full w-full mt-6">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <div className="mt-4 rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold"><Clock className="h-4 w-4 text-secondary" /> Availability</div>
                  <div className="mt-2 text-xs text-muted-foreground">Mon–Sat · 10am–1pm & 5pm–8pm</div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">About the doctor</span>
                <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                  A patient-first approach to nephrology & internal medicine.
                </h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Dr. Vikram Kumar is a senior consultant nephrologist and general physician with over 19 years of clinical experience.
                  He combines deep specialist expertise with genuine warmth — taking time to listen, explain, and build a treatment
                  plan that fits each patient's life.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {credentials.map((c) => (
                    <div key={c.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                      <c.icon className="h-6 w-6 text-primary" />
                      <div className="mt-3 text-lg font-semibold">{c.label}</div>
                      <div className="text-xs text-muted-foreground">{c.sub}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8">
                  <div className="text-sm font-semibold text-foreground mb-3">Specialization</div>
                  <div className="flex flex-wrap gap-2">
                    {["Nephrology", "Kidney Care", "Diabetes", "Hypertension", "Preventive Health", "General Medicine"].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-6">
                  <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <HeartPulse className="h-4 w-4 text-secondary" /> Care Philosophy
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    "Medicine works best when patients feel heard. My commitment is simple — clear explanations, evidence-based
                    decisions, and care that fits the life you actually live."
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Areas of Practice</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Specialist care, delivered with warmth.</h2>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specializations.map((s) => (
              <motion.div key={s.title} variants={itemVariants}
                className="group rounded-2xl bg-card border border-border p-7 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all">
                <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EXPERIENCE & EXPERTISE */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Experience</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Nearly two decades of dedicated practice.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                From early-career training in general medicine to advanced super-specialty work in nephrology, every step has
                shaped a practice grounded in evidence, empathy and long-term patient outcomes.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">
                {[
                  { v: 19, s: "+", l: "Years Practice" },
                  { v: 10, s: "K+", l: "Patients" },
                  { v: 98, s: "%", l: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.l}>
                    <div className="text-3xl md:text-4xl font-semibold text-primary">
                      <Counter to={stat.v} suffix={stat.s} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative pl-8 border-l-2 border-primary/20">
                {[
                  { y: "Today", t: "Senior Consultant — Siri Health Care", d: "Leading nephrology & general medicine practice in SR Nagar." },
                  { y: "DM", t: "Nephrology Super-Specialty", d: "Advanced training in kidney disease, dialysis and transplant care." },
                  { y: "MD", t: "General Medicine", d: "Foundation in adult internal medicine and complex diagnostics." },
                  { y: "MBBS", t: "Medical Graduation", d: "Began the journey with a passion for evidence-based, compassionate care." },
                ].map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative pb-8 last:pb-0">
                    <div className="absolute -left-[37px] h-4 w-4 rounded-full gradient-primary ring-4 ring-background" />
                    <div className="text-xs font-semibold text-primary">{m.y}</div>
                    <div className="mt-1 font-semibold">{m.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">How it works</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">A calm, structured consultation process.</h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {consultationSteps.map((s, i) => (
                <motion.div key={s.title} variants={itemVariants}
                  className="relative rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                  <div className="h-12 w-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center relative">
                    <s.icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold grid place-items-center">{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl mb-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Patient Stories</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Trusted by families across Hyderabad.</h2>
            </div>
          </Reveal>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Questions, answered.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl bg-card border border-border shadow-soft px-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`q-${i}`} className="border-border">
                    <AccordionTrigger className="text-base font-semibold py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-10 md:p-16 shadow-elevated">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                    Consult Experienced Healthcare Specialists Today
                  </h2>
                  <p className="mt-4 text-primary-foreground/85 max-w-xl">
                    Book a consultation with Dr. Vikram Kumar — same-day appointments often available.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                      <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                      <a href="tel:04049551250"><Phone className="mr-1 h-4 w-4" /> Call Clinic</a>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-5 border border-white/15">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-80">Phone</div>
                        <a href="tel:04049551250" className="text-lg font-semibold">040-49551250</a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-5 border border-white/15">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5" />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-80">Location</div>
                        <div className="text-lg font-semibold">SR Nagar, Hyderabad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
