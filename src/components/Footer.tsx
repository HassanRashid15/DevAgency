import { Link } from "react-router-dom";
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
                NX
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Nexus<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. From startups to enterprises, we build what matters.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                hello@nexustech.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                123 Tech Avenue, San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NexusTech. All rights reserved.
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
