import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container-px mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Siri Health Care Logo"
            className="h-14 md:h-18 w-auto rounded-md object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-primary rounded-lg" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full px-6 gradient-primary text-primary-foreground hover:opacity-95 shadow-soft">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-background"
          >
            <div className="container-px mx-auto max-w-7xl py-8 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-4 text-lg font-medium border-b border-border"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="mt-6 h-12 rounded-full gradient-primary text-primary-foreground">
                <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
