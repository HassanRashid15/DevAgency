"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Monitor, Cpu, Smartphone, Cloud, Palette, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about-us" },
  { 
    label: "Services", 
    path: "/services",
    dropdown: [
      { label: "Web Development", path: "/services/web-development", icon: Monitor, description: "Custom websites and CMS" },
      { label: "Web App Development", path: "/services/web-app-development", icon: Cpu, description: "Scalable web applications" },
      { label: "Ecommerce", path: "/services/ecommerce-development", icon: Smartphone, description: "Online store solutions" },
      { label: "Dedicated Teams", path: "/services/dedicated-teams", icon: Cloud, description: "Expert talent for your project" },
      { label: "AI Solutions", path: "/services/custom-ai-solutions", icon: Palette, description: "Next-gen AI integration" },
    ]
  },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blogs", path: "/blogs" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "glass shadow-card border-b border-border/50"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-base shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform"
          >
            DS
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading font-bold text-xl text-foreground tracking-tight"
          >
            Dev<span className="text-gradient">Stitch</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative py-4"
            >
              <Link
                href={link.path}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                  pathname === link.path || (link.dropdown && pathname.startsWith(link.path))
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-[280px] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-3 overflow-hidden z-50"
                    >
                      <div className="flex flex-col gap-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group/item"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                              <sub.icon size={20} className="text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-foreground">{sub.label}</div>
                              <div className="text-[11px] text-muted-foreground line-clamp-1">{sub.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="hidden lg:flex items-center gap-3"
        >
          <Link href="/contact-us">
            <Button variant="hero" size="sm" className="rounded-full px-6 font-bold">
              Get a Quote
            </Button>
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground hover:bg-primary/5 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col gap-2">
                  <Link
                    href={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-base font-bold rounded-xl transition-colors ${
                      pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="grid grid-cols-1 gap-2 pl-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                            pathname === sub.path ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <sub.icon size={16} className="text-primary" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact-us" onClick={() => setIsOpen(false)} className="mt-4 w-full">
                <Button variant="hero" size="lg" className="w-full rounded-full font-bold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
