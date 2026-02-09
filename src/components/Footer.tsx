import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";


const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tech-Venture" className="w-8 h-8" />
          <span className="font-display text-sm neon-text tracking-wider">TECH-VENTURE</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <a href="mailto:techventures99@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors"><Mail className="w-3 h-3 text-primary" /> techventures99@gmail.com</a>
          <a href="tel:+919328621177" className="flex items-center gap-1 hover:text-primary transition-colors"><Phone className="w-3 h-3 text-primary" /> +91 9328621177</a>
          <a href="https://wa.me/919328621177" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[hsl(142,70%,45%)] transition-colors"><MessageCircle className="w-3 h-3 text-[hsl(142,70%,45%)]" /> WhatsApp</a>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" /> Gujarat, India</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 gap-1">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Tech-Venture. All rights reserved.
        </p>
        {/* Secret admin access — looks like a plain dot */}
        <Link
          to="/admin"
          className="text-muted-foreground/20 hover:text-primary/40 transition-colors duration-700 text-xs select-none"
          title=""
        >
          ⚙
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
