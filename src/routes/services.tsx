import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Droplet,
  Stethoscope,
  Activity,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  ClipboardCheck,
  Leaf,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  HeartHandshake,
  Brain,
  CalendarCheck,
  Navigation,
} from "lucide-react";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Healthcare Services in Hyderabad — Nephrology, Diabetes & Preventive Care | Siri Health Care" },
      {
        name: "description",
        content:
          "Comprehensive nephrology, kidney disease management, diabetes care, hypertension and preventive healthcare services at Siri Health Care, SR Nagar, Hyderabad.",
      },
      { property: "og:title", content: "Healthcare Services — Siri Health Care" },
      {
        property: "og:description",
        content:
          "Professional nephrology, diabetes management, preventive healthcare and general medicine consultations in Hyderabad.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Droplet, title: "Nephrology", desc: "Specialist kidney care — diagnosis, treatment and long-term renal protection." },
  { icon: ShieldCheck, title: "Kidney Disease Consultation", desc: "Expert evaluation of CKD, kidney stones, infections and electrolyte disorders." },
  { icon: Activity, title: "Diabetes Management", desc: "Personalised plans for sustainable blood sugar control and complication prevention." },
  { icon: HeartPulse, title: "Hypertension Care", desc: "Evidence-based BP management to reduce cardiovascular and kidney risk." },
  { icon: Stethoscope, title: "General Medicine", desc: "Trusted care for everyday illnesses, infections and complex internal conditions." },
  { icon: Sparkles, title: "Preventive Healthcare", desc: "Lifestyle counselling and screenings tailored to your age and risk profile." },
  { icon: ClipboardCheck, title: "Health Checkups", desc: "Comprehensive annual health assessments with clear, actionable reports." },
  { icon: Leaf, title: "Long-Term Wellness Guidance", desc: "Continuity of care that supports recovery and lasting health outcomes." },
];

const detailedServices = [
  {
    icon: Droplet,
    title: "Nephrology & Kidney Care",
    overview:
      "Comprehensive specialist care for kidney health — from early changes in lab results to advanced chronic kidney disease and dialysis support.",
    symptoms: ["Swelling in feet or face", "Foamy urine", "Persistent fatigue", "Reduced urine output", "High creatinine levels"],
    why: "Early kidney intervention can slow disease progression dramatically and protect your long-term quality of life.",
    approach: "Detailed evaluation, lab interpretation, lifestyle planning, medication optimisation and ongoing follow-up.",
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    overview:
      "Personalised diabetes care that goes beyond prescriptions — combining nutrition, monitoring, education and regular reviews.",
    symptoms: ["Frequent thirst or urination", "Unexplained weight loss", "Slow-healing wounds", "Blurred vision", "Constant fatigue"],
    why: "Well-managed diabetes prevents kidney, heart, eye and nerve complications years down the line.",
    approach: "HbA1c targets, structured monitoring, lifestyle coaching and medication tuned to your daily life.",
  },
  {
    icon: HeartPulse,
    title: "Hypertension Care",
    overview:
      "Sustainable blood pressure management with a focus on cardiovascular and kidney protection.",
    symptoms: ["Frequent headaches", "Dizziness or palpitations", "Vision changes", "Chest discomfort", "High home BP readings"],
    why: "Untreated hypertension is the leading silent cause of stroke, heart failure and kidney damage.",
    approach: "Accurate diagnosis, lifestyle guidance and evidence-based medication titrated to your profile.",
  },
  {
    icon: Sparkles,
    title: "Preventive Healthcare",
    overview:
      "Annual screenings and lifestyle plans designed around your age, family history and risk factors.",
    symptoms: ["No symptoms yet — that's the point", "Family history of disease", "Sedentary lifestyle", "Stress or sleep issues", "Pre-diabetes or borderline BP"],
    why: "Most chronic disease can be prevented or postponed by years with the right early action.",
    approach: "Tailored health checks, clear reports, and a calm long-term plan to keep you well.",
  },
];

const earlyCareItems = [
  { icon: TrendingUp, title: "Preventive Healthcare", desc: "Stay ahead of risk factors with regular screenings." },
  { icon: Brain, title: "Early Diagnosis", desc: "Detecting issues early opens far more treatment options." },
  { icon: ShieldCheck, title: "Long-Term Kidney Wellness", desc: "Protect renal function for decades, not just today." },
  { icon: Leaf, title: "Lifestyle Management", desc: "Sustainable habits that fit your life — not the other way round." },
];

const philosophy = [
  { icon: HeartHandshake, title: "Personalised Treatment", desc: "Care plans built around you — not a template." },
  { icon: HeartPulse, title: "Compassionate Care", desc: "Every consultation rooted in genuine listening." },
  { icon: Leaf, title: "Long-Term Wellness", desc: "Decisions made with your future health in mind." },
  { icon: ShieldCheck, title: "Preventive Guidance", desc: "We focus on stopping problems before they start." },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative container-px mx-auto max-w-6xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Services</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="h-3.5 w-3.5" /> Our Services
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05]">
                  Comprehensive <span className="text-gradient">Healthcare Services</span> for Long-Term Wellness
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Professional nephrology, diabetes management, preventive healthcare and general medicine consultations
                  designed around patient well-being.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">Book Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <a href="tel:04049551250"><Phone className="mr-1 h-4 w-4" /> Call Clinic</a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="relative h-[420px] hidden lg:block">
              {[
                { icon: Droplet, label: "Nephrology", x: "10%", y: "5%", delay: 0 },
                { icon: Activity, label: "Diabetes", x: "55%", y: "0%", delay: 0.5 },
                { icon: HeartPulse, label: "Hypertension", x: "0%", y: "55%", delay: 1 },
                { icon: Sparkles, label: "Preventive", x: "60%", y: "60%", delay: 1.5 },
                { icon: Stethoscope, label: "General Medicine", x: "30%", y: "32%", delay: 0.7 },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  style={{ left: c.x, top: c.y }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
                  className="absolute rounded-2xl bg-card border border-border shadow-soft px-4 py-3 flex items-center gap-3"
                >
                  <div className="h-9 w-9 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we offer</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Care across every stage of life.</h2>
              <p className="mt-4 text-muted-foreground">From routine check-ups to advanced specialist care — under one calm, modern roof.</p>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-11 w-11 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DETAILED ALTERNATING SECTIONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">In depth</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">A closer look at our specialist care.</h2>
            </div>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {detailedServices.map((d, i) => (
              <div key={d.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="relative rounded-3xl gradient-soft border border-border p-10 aspect-square grid place-items-center overflow-hidden">
                    <d.icon className="h-32 w-32 text-primary/30" />
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-6 right-6 rounded-xl bg-card border border-border shadow-soft px-3 py-2 text-xs font-semibold flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-secondary" /> Specialist-Led
                    </motion.div>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-semibold leading-tight">{d.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{d.overview}</p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-5">
                      <div className="rounded-2xl bg-card border border-border p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <AlertCircle className="h-4 w-4 text-primary" /> Common Symptoms
                        </div>
                        <ul className="space-y-1.5">
                          {d.symptoms.map((s) => (
                            <li key={s} className="text-xs text-muted-foreground flex gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-secondary mt-0.5 shrink-0" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-card border border-border p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <HeartHandshake className="h-4 w-4 text-primary" /> Our Approach
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{d.approach}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Why it matters</div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{d.why}</p>
                    </div>

                    <Button asChild className="rounded-full mt-6">
                      <Link to="/contact">Consult Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EARLY CARE — BENTO */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why early care matters</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Small steps today, lifelong wellness tomorrow.</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[200px]">
            {earlyCareItems.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className={`group h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated transition-all ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <div className={`rounded-xl gradient-primary text-primary-foreground grid place-items-center ${i === 0 ? "h-14 w-14" : "h-11 w-11"}`}>
                    <e.icon className={i === 0 ? "h-7 w-7" : "h-5 w-5"} />
                  </div>
                  <h3 className={`mt-4 font-semibold ${i === 0 ? "text-2xl" : "text-base"}`}>{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTHCARE APPROACH */}
      <section className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our approach</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">Patient-first care, every single visit.</h2>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {philosophy.map((p) => (
              <motion.div key={p.title} variants={itemVariants}
                className="rounded-2xl bg-card/80 backdrop-blur border border-border p-7 shadow-soft hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-10 md:p-16 shadow-elevated">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                    Ready to take the next step?
                  </h2>
                  <p className="mt-4 text-primary-foreground/85 max-w-xl">
                    Book your appointment at Siri Health Care — specialist consultations with Dr. Vikram Kumar in SR Nagar, Hyderabad.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                      <Link to="/contact"><CalendarCheck className="mr-1 h-4 w-4" /> Book Appointment</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                      <a href="tel:04049551250"><Phone className="mr-1 h-4 w-4" /> Call Now</a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                      <a href="https://www.google.com/maps/search/?api=1&query=Siri+Health+Care+SR+Nagar+Hyderabad" target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-1 h-4 w-4" /> Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-2xl bg-white/10 backdrop-blur p-5 border border-white/15">
                    <div className="text-xs uppercase tracking-wider opacity-80">Clinic</div>
                    <div className="text-lg font-semibold mt-1">Siri Health Care</div>
                  </div>
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
