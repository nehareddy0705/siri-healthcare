import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Siri Health Care" },
      { name: "description", content: "Get in touch, find directions, or book your appointment with Siri Health Care." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  { icon: MapPin, title: "Visit us", text: "Hyderabad, India" },
  { icon: Phone, title: "Call", text: "+91 00000 00000" },
  { icon: Mail, title: "Email", text: "care@sirihealthcare.in" },
  { icon: Clock, title: "Hours", text: "Mon–Sat · 9:00 – 20:00" },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We're here to help."
        description="Have a question, or ready to book? Reach out — we'll respond within one business day."
      />

      <section className="py-20 md:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c) => (
              <motion.div key={c.title} variants={itemVariants}
                className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.text}</div>
              </motion.div>
            ))}
          </Stagger>

          <div className="mt-16 grid lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
                <h2 className="text-2xl md:text-3xl font-semibold">Book an appointment</h2>
                <p className="mt-2 text-muted-foreground">Share your details and we'll be in touch shortly.</p>
                <form className="mt-8 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Full name" className="h-12 rounded-xl" />
                  <Input placeholder="Phone number" className="h-12 rounded-xl" />
                  <Input placeholder="Email" type="email" className="h-12 rounded-xl sm:col-span-2" />
                  <Input placeholder="Reason for visit" className="h-12 rounded-xl sm:col-span-2" />
                  <Textarea placeholder="Message (optional)" rows={4} className="rounded-xl sm:col-span-2" />
                  <Button type="submit" className="sm:col-span-2 h-12 rounded-full gradient-primary text-primary-foreground hover:opacity-95">
                    Send request <Send className="ml-1 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-full min-h-[420px] gradient-soft grid place-items-center relative">
                <MapPin className="h-16 w-16 text-primary/30" />
                <div className="absolute bottom-0 inset-x-0 bg-background/90 backdrop-blur p-5 border-t border-border">
                  <div className="text-sm font-semibold">Map preview</div>
                  <div className="text-xs text-muted-foreground mt-1">Embed coming soon — call us for directions.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
