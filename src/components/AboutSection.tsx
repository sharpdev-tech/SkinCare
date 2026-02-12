import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skinCareImg from "@/assets/skin-care.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
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

        {/* Text */}
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
            Crafted with
            <br />
            <em className="italic font-normal text-accent">Precision</em>
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
            Every product is crafted with precision, combining high-performance
            formulas with a weightless feel on the skin. Rich pigments, silky
            textures, and long-lasting results come together to enhance your
            natural beauty effortlessly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Created for modern individuals with a passion for style, our
            collection transitions seamlessly from day to night.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
