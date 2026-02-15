import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ClosingSection = () => {
  return (
    <section className="py-40 px-6 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          Your Ritual Awaits
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-medium leading-tight mb-8"
        >
          Elevate Your Skincare{" "}
          <em className="italic font-normal text-accent">Ritual</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="luxury-divider mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-xl text-muted-foreground leading-relaxed mb-12"
        >
          Experience the art of radiant skin with Lumina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/products"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
