import { motion } from "framer-motion";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

const PageHero = ({ tag, title, subtitle, image, imageAlt }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans-ui text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-6"
        >
          {tag}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-6 text-gold-glow"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-px bg-accent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
