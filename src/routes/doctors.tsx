import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Stethoscope, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Siri Health Care" },
      { name: "description", content: "Meet the consultants leading care at Siri Health Care." },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    name: "Dr. Vikram Kumar",
    qualification: "MD (Medicine), DM (Nephrology)",
    experience: "15+ years",
    specialty: "Nephrology · General Medicine",
    bio: "Dedicated to compassionate, evidence-based care for kidney disease, diabetes and complex internal medicine.",
  },
];

function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our doctors"
        title="Specialist-led, patient-loved."
        description="Our consultants combine deep clinical expertise with genuine warmth."
      />
      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <motion.div key={d.name} variants={itemVariants}
                className="group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-elevated transition-shadow">
                <div className="aspect-[4/5] rounded-2xl gradient-soft border border-border grid place-items-center mb-6 overflow-hidden">
                  <Stethoscope className="h-20 w-20 text-primary/30 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{d.specialty}</p>
                <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-0.5 text-primary" /> {d.qualification}</p>
                  <p className="flex items-start gap-2"><Briefcase className="h-4 w-4 mt-0.5 text-primary" /> {d.experience}</p>
                </div>
                <p className="mt-5 text-sm text-foreground/75 leading-relaxed">{d.bio}</p>
                <Button asChild variant="outline" className="mt-6 rounded-full w-full">
                  <Link to="/contact">Book Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
