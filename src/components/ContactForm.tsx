import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageSquare, Zap, Mail as MailIcon, HeartHandshake } from "lucide-react";
import { addMessageToDB } from "@/lib/supabase-store";
import { toast } from "sonner";

const whyCards = [
  { icon: MessageSquare, title: "Free Consultation", desc: "Let's discuss your project needs", color: "from-[hsl(183,100%,50%)] to-[hsl(200,100%,60%)]", shadow: "hsl(183,100%,50%)" },
  { icon: Zap, title: "Quick Turnaround", desc: "Fast delivery without compromising quality", color: "from-[hsl(50,100%,50%)] to-[hsl(30,100%,55%)]", shadow: "hsl(50,100%,50%)" },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "We're here for you after launch", color: "from-[hsl(260,80%,55%)] to-[hsl(290,80%,65%)]", shadow: "hsl(260,80%,60%)" },
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all required fields");
      return;
    }

    setSending(true);
    try {
      await addMessageToDB({ name: form.name, email: form.email, subject: form.subject, message: form.message });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully!");
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast.error("Failed to send message");
    }
    setSending(false);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 border border-glass-border/30"
      >
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-accent tracking-wider text-foreground mb-2">
              Your Name <span className="text-primary">*</span>
            </label>
            <input
              type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-accent tracking-wider text-foreground mb-2">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-accent tracking-wider text-foreground mb-2">
            Subject <span className="text-primary">*</span>
          </label>
          <input
            type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
            maxLength={200}
            className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Project Inquiry"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-accent tracking-wider text-foreground mb-2">
            Your Message <span className="text-primary">*</span>
          </label>
          <textarea
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000} rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit" disabled={sending}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-accent text-sm tracking-wider uppercase bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_30px_hsl(183_100%_50%/0.4)] disabled:opacity-50 transition-all duration-300 font-semibold"
        >
          {sent ? <><CheckCircle className="w-5 h-5" /> Sent!</> : sending ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
        </button>
      </motion.form>

      <div className="lg:col-span-2 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-glass-border/30"
        >
          <h3 className="font-display text-lg neon-text mb-5">Why Work With Us?</h3>
          <div className="space-y-4">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  style={{ boxShadow: `0 4px 15px ${card.shadow}30` }}
                >
                  <card.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-accent font-semibold text-foreground text-sm">{card.title}</p>
                  <p className="text-muted-foreground text-xs">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 border border-glass-border/30"
        >
          <h3 className="font-display text-lg neon-text mb-3">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Email: <a href="mailto:techventures99@gmail.com" className="text-primary hover:underline">techventures99@gmail.com</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <a href="tel:+919328621177" className="text-primary hover:underline">+91 9328621177</a>
            </p>
            <p className="text-muted-foreground">
              <a href="https://wa.me/919328621177" target="_blank" rel="noopener noreferrer" className="text-[hsl(142,70%,45%)] hover:underline">💬 Chat on WhatsApp</a>
            </p>
            <p className="text-muted-foreground italic text-xs mt-2">Response time: Within 24 hours</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
