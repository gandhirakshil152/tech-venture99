import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import projects from "./pages/Projects";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with better visibility */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-accent text-primary text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Welcome to
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold gradient-text leading-tight mb-4 sm:mb-6">
            TECH-VENTURE
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-3 sm:mb-4 font-body leading-relaxed">
            A young startup fueled by curiosity and passion. We may be new, but we dream big
            and build bold — one project at a time.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/60 font-accent tracking-wider mb-8 sm:mb-10">
            Learning • Building • Growing • Shipping
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-accent text-xs sm:text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(183_100%_50%/0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-accent text-xs sm:text-sm tracking-wider uppercase border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
