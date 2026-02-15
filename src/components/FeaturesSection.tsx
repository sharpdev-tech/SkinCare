import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Sparkles, Heart, Users } from "lucide-react";
import productsImg from "@/assets/products.jpg";
import spaImg from "@/assets/spa-flat-lay.jpg";

const features = [
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Thoughtfully selected formulas free from harsh chemicals.",
  },
  {
    icon: Sparkles,
    title: "High-Performance Care",
    description: "Designed to deliver visible, radiant results.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free Beauty",
    description: "Never tested on animals.",
  },
  {
    icon: Users,
    title: "For All Skin Types",
    description: "Gentle, effective, and inclusive.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-card">
      {/* Feature cards */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-4"
        >
          What Sets Us Apart
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-center font-medium mb-4"
        >
          Why <em className="italic font-normal text-accent">Lumina</em>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="luxury-divider mb-20"
        />

        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full border border-accent/30 group-hover:border-accent transition-colors duration-500">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Parallax images row */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-[4/3] overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            src={productsImg}
            alt="Lumina skincare products"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="aspect-[4/3] overflow-hidden md:mt-16"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            src={spaImg}
            alt="Natural beauty ingredients"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
