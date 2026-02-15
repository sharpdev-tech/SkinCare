import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SkincareSimulation from "@/components/SkincareSimulation";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import skinCareImg from "@/assets/skin-care.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    quote: "My skin feels smoother, brighter, and healthier than ever.",
    author: "Anna M.",
  },
  {
    quote: "Minimal, elegant, and incredibly effective.",
    author: "Sophia L.",
  },
  {
    quote: "Luxury skincare that actually delivers results.",
    author: "Emily R.",
  },
];

const Index = () => {
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      {/* Philosophy Section */}
      <section ref={introRef} className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={skinCareImg}
                alt="Lumina skincare philosophy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8"
            >
              Intentional &{" "}
              <em className="italic font-normal text-accent">Luxurious</em>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="luxury-divider !mx-0 mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
            >
              Lumina was created with one belief in mind — skincare should be both intentional and luxurious.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We combine refined artistry with clean, effective formulations to elevate everyday self-care into a radiant experience.
            </motion.p>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <SkincareSimulation />

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-4"
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-center font-medium mb-4"
          >
            Loved by Our <em className="italic font-normal text-accent">Community</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="luxury-divider mb-16"
          />

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                className="text-center p-8 border border-border/50 bg-background"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  — {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
