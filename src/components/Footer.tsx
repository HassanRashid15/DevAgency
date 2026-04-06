import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">
                DS
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Dev<span className="text-gradient">Stitch</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Custom web solutions development agency driven by AI and focused on performance and security. We ensure quality work with a strong commitment to customer satisfaction.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/web-app-development" className="hover:text-primary transition-colors">Web App Development</Link></li>
              <li><Link href="/services/ecommerce-development" className="hover:text-primary transition-colors">E-commerce Development</Link></li>
              <li><Link href="/services/dedicated-team" className="hover:text-primary transition-colors">Dedicated Team</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                inquiry@devstitch.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +1 (555) DEV-STITCH
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                Global AI-Driven Development Agency
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevStitch. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
