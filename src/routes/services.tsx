import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Droplet, Stethoscope, Activity, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Stagger, itemVariants } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Siri Health Care" },
      { name: "description", content: "Nephrology, general medicine, diabetes, hypertension, kidney care and preventive health." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Droplet, title: "Nephrology", desc: "Comprehensive kidney care — from early detection to advanced therapy." },
  { icon: Stethoscope, title: "General Medicine", desc: "Trusted care for everyday illnesses and complex internal conditions." },
  { icon: Activity, title: "Diabetes Care", desc: "Personalised plans for blood sugar control and long-term wellness." },
  { icon: HeartPulse, title: "Hypertension", desc: "Sustainable blood pressure management and cardiovascular risk reduction." },
  { icon: ShieldCheck, title: "Kidney Care", desc: "CKD management, dialysis support and preventive screening." },
  { icon: Sparkles, title: "Preventive Health", desc: "Annual health checks and lifestyle counselling tailored to you." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Care across every stage of life."
        description="From routine consultations to advanced specialist care — under one calm, modern roof."
      />
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
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
    </>
  );
}
