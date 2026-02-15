import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SkincareSimulation from "@/components/SkincareSimulation";
import Footer from "@/components/Footer";
import skinCareImg from "@/assets/skin-care.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Index = () => {
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      {/* Intro Section */}
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
                alt="Premium skincare texture"
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
              Where innovation meets{" "}
              <em className="italic font-normal text-accent">artistry</em>
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
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Our brand blends high-performance beauty products with professional
              treatments, offering a complete luxury experience — from product to
              result.
            </motion.p>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <SkincareSimulation />

      {/* CTA Section */}
      <section className="py-40 px-6 bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-4xl md:text-6xl font-medium leading-tight mb-8"
          >
            Complete skincare,{" "}
            <em className="italic font-normal text-accent">real results</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="luxury-divider mb-10"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-10 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
              >
                Explore Our Full Skincare Collection →
              </motion.button>
            </Link>
            <Link to="/treatments">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-10 py-4 border border-foreground/30 text-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-foreground/5 transition-colors duration-500"
              >
                Book a Treatment →
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
