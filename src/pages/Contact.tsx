import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageCircle as MessageCircleIcon, Clock, Zap, MessageCircle } from "lucide-react";

const infoCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "techventures99@gmail.com",
    href: "mailto:techventures99@gmail.com",
    color: "from-[hsl(183,100%,50%)] to-[hsl(200,100%,60%)]",
    shadow: "hsl(183,100%,50%)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9328621177",
    href: "tel:+919328621177",
    color: "from-[hsl(260,80%,55%)] to-[hsl(290,80%,65%)]",
    shadow: "hsl(260,80%,60%)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919328621177",
    color: "from-[hsl(142,70%,45%)] to-[hsl(152,60%,50%)]",
    shadow: "hsl(142,70%,45%)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujarat, India",
    href: undefined,
    color: "from-[hsl(120,60%,40%)] to-[hsl(170,70%,50%)]",
    shadow: "hsl(120,60%,45%)",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
    color: "from-[hsl(50,100%,50%)] to-[hsl(30,100%,55%)]",
    shadow: "hsl(50,100%,50%)",
  },
];

const Contact = () => {
  return (
    <main className="pt-24 md:pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(260,80%,55%)] to-[hsl(183,100%,50%)] flex items-center justify-center mx-auto mb-6 shadow-lg"
            style={{ boxShadow: "0 8px 40px hsl(260 80% 60% / 0.3)" }}
          >
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-4">Let's Connect</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Got an idea? We'd love to hear about it. Drop us a message and let's build something great together.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass rounded-2xl p-4 text-center group relative overflow-hidden cursor-pointer"
              onClick={() => card.href && (card.href.startsWith("http") ? window.open(card.href, "_blank") : (window.location.href = card.href))}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${card.shadow}, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}
                  style={{ boxShadow: `0 4px 15px ${card.shadow}40` }}
                >
                  <card.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-accent text-xs text-muted-foreground tracking-wider mb-1">{card.label}</p>
                <p className="text-foreground text-xs font-medium break-all">{card.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 justify-center mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground font-accent tracking-wider">Send us a message</p>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
