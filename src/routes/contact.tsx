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
  {
    icon: MapPin,
    title: "Visit us",
    text: "7-1-397, BK Guda Rd, near Community hall cross roads, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038",
    href: "https://www.google.com/maps/place/Siri+Health+Care+%7C+SR+Nagar/@17.4436204,78.4464169,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91f4a295bd91:0x7868f44ae2310fb1!8m2!3d17.4436204!4d78.4464169!16s%2Fg%2F11zbx6r858?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    icon: Phone,
    title: "Call",
    text: "+91 9290582121",
    href: "tel:+919290582121"
  },
  {
    icon: Mail,
    title: "Email",
    text: "sirispecialityclinic@gmail.com",
    href: "mailto:sirispecialityclinic@gmail.com"
  },
  {
    icon: Clock,
    title: "Hours",
    text: "Mon–Sat · 7:00 PM – 9:00 PM"
  },
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
                className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300">
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block h-full"
                  >
                    <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center group-hover:scale-105 transition-transform duration-350">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                      {c.title}
                      {c.href.startsWith("http") && <span className="text-xs font-normal text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">↗</span>}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">{c.text}</div>
                  </a>
                ) : (
                  <>
                    <div className="h-10 w-10 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-sm font-semibold">{c.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.text}</div>
                  </>
                )}
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
              <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-full min-h-[420px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2458428807954!2d78.44383637516315!3d17.443625401399863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f4a295bd91%3A0x7868f44ae2310fb1!2sSiri%20Health%20Care%20%7C%20SR%20Nagar!5e0!3m2!1sen!2sin!4v1717478000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Siri Health Care Location Map"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur p-4 border border-border rounded-2xl shadow-soft flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">Siri Health Care</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Sanjeeva Reddy Nagar, Hyderabad</div>
                  </div>
                  <Button asChild size="sm" className="rounded-full shadow-soft shrink-0">
                    <a
                      href="https://www.google.com/maps/place/Siri+Health+Care+%7C+SR+Nagar/@17.4436204,78.4464169,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91f4a295bd91:0x7868f44ae2310fb1!8m2!3d17.4436204!4d78.4464169!16s%2Fg%2F11zbx6r858?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
