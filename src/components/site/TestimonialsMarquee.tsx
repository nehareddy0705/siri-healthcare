import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya R.", role: "Patient · Diabetes Care", text: "The most thorough, kind doctor we've ever met. Dr. Kumar took time to listen and explain — truly grateful for the care." },
  { name: "Anil K.", role: "Patient · Nephrology", text: "Clear explanations, real follow-through. I felt cared for at every step of my treatment journey." },
  { name: "Sangeeta M.", role: "Patient · General Medicine", text: "Professional, calm, and genuinely concerned about my recovery. The clinic feels welcoming from the moment you walk in." },
  { name: "Ravi T.", role: "Patient · Hypertension", text: "After years of confusion about my BP, finally a doctor who explained everything clearly. Highly recommended." },
  { name: "Lakshmi N.", role: "Patient · Kidney Care", text: "Compassionate, attentive and deeply knowledgeable. Siri Health Care has been a blessing for my family." },
  { name: "Karthik S.", role: "Patient · Preventive", text: "My annual check-up was thorough yet unhurried. The team genuinely cares about long-term wellness." },
];

function Card({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 rounded-2xl bg-card border border-border p-7 shadow-soft">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.text}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full gradient-primary text-primary-foreground grid place-items-center text-sm font-semibold">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const loop = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => <Card key={i} t={t} />)}
      </motion.div>
    </div>
  );
}
