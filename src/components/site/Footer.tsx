import { Link } from "@tanstack/react-router";
import { HeartPulse, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-muted/40">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="font-display font-semibold text-lg">Siri Health Care</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Compassionate, expert care in nephrology and general medicine. Trusted by families for everyday health and complex conditions.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                 className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/doctors", label: "Our Doctors" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Health Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Nephrology", "General Medicine", "Diabetes Care", "Hypertension", "Kidney Care", "Preventive Health"].map((s) => (
              <li key={s} className="hover:text-primary transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div className="flex flex-col gap-1">
                <a
                  href="https://www.google.com/maps/place/Siri+Health+Care+%7C+SR+Nagar/@17.4436204,78.4464169,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91f4a295bd91:0x7868f44ae2310fb1!8m2!3d17.4436204!4d78.4464169!16s%2Fg%2F11zbx6r858?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-left"
                >
                  7-1-397, BK Guda Rd, near Community hall cross roads, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038
                </a>
                <a
                  href="https://www.google.com/maps/place/Siri+Health+Care+%7C+SR+Nagar/@17.4436204,78.4464169,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91f4a295bd91:0x7868f44ae2310fb1!8m2!3d17.4436204!4d78.4464169!16s%2Fg%2F11zbx6r858?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:+919290582121" className="hover:text-primary transition-colors">
                +91 9290582121
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:sirispecialityclinic@gmail.com" className="hover:text-primary transition-colors">
                sirispecialityclinic@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Siri Health Care. All rights reserved.</p>
          <p>Built with care for our patients.</p>
        </div>
      </div>
    </footer>
  );
}
