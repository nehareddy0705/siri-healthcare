import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Blog — Siri Health Care" },
      { name: "description", content: "Trusted, easy-to-read articles on kidney health, diabetes, hypertension and wellness." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "5 early signs of kidney trouble most people miss", category: "Nephrology", date: "Coming soon" },
  { title: "How to manage diabetes during festive seasons", category: "Diabetes", date: "Coming soon" },
  { title: "Hypertension at 30: what young adults should know", category: "Heart", date: "Coming soon" },
  { title: "Annual health checks — what really matters", category: "Preventive", date: "Coming soon" },
  { title: "Hydration myths that hurt your kidneys", category: "Wellness", date: "Coming soon" },
  { title: "When should you see a nephrologist?", category: "Nephrology", date: "Coming soon" },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Health journal"
        title="Plain-spoken medicine, in your pocket."
        description="Articles written by clinicians — without the jargon."
      />
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles…" className="pl-11 h-12 rounded-full bg-card shadow-soft" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid md:grid-cols-5 gap-8 rounded-3xl bg-card border border-border p-6 md:p-10 shadow-soft">
              <div className="md:col-span-2 aspect-[4/3] rounded-2xl gradient-soft border border-border" />
              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">
                  Understanding chronic kidney disease — and why early action changes everything.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  A clear, calm guide to recognising the signs and taking the right next step.
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <motion.article key={p.title} variants={itemVariants}
                className="group rounded-2xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-elevated transition-all">
                <div className="aspect-[16/10] gradient-soft border-b border-border" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-muted text-foreground/70">{p.category}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  </div>
                  <h3 className="mt-3 font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
