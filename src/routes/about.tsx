import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award, Building2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siri Health Care" },
      { name: "description", content: "The story, mission, and values behind Siri Health Care." },
    ],
  }),
  component: AboutPage,
});

const blocks = [
  { icon: Building2, eyebrow: "Our story", title: "Built around the patient.", text: "Siri Health Care was founded with one simple belief: thoughtful medicine, delivered with empathy, changes lives. From the way we listen to the way we explain, every detail is designed around you." },
  { icon: Target, eyebrow: "Mission", title: "Make expert care accessible.", text: "We bring specialist-level expertise — particularly in kidney care and chronic disease management — within reach of every family we serve." },
  { icon: Eye, eyebrow: "Vision", title: "A healthier community.", text: "To be the most trusted clinic in our region for nephrology and general medicine, defined by clinical outcomes and patient love." },
  { icon: Award, eyebrow: "Experience & infrastructure", title: "Modern facility, decades of expertise.", text: "Equipped with contemporary diagnostics and led by experienced consultants, our clinic combines clinical excellence with a calm, welcoming environment." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Care, defined by craft."
        description="Get to know the people, principles and place behind Siri Health Care."
      />
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl space-y-24 md:space-y-32">
          {blocks.map((b, i) => (
            <Reveal key={b.title}>
              <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-3xl gradient-soft border border-border shadow-soft grid place-items-center">
                  <b.icon className="h-20 w-20 text-primary/30" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">{b.eyebrow}</span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">{b.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20 bg-muted/40 border-y border-border">
        <div className="container-px mx-auto max-w-6xl">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { n: "15+", l: "Years of experience" },
              { n: "10k+", l: "Lives touched" },
              { n: "98%", l: "Patient satisfaction" },
              { n: "24/7", l: "Support availability" },
            ].map((s) => (
              <motion.div key={s.l} variants={itemVariants} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
                <div className="text-4xl font-display font-semibold text-primary">{s.n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
