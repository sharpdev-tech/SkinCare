import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import spaImg from "@/assets/spa-flat-lay.jpg";

const treatments = [
  {
    title: "Luxury Makeup Application",
    description:
      "Personalized makeup looks tailored for special occasions, events, and photoshoots.",
  },
  {
    title: "Skin Preparation & Glow Treatment",
    description:
      "Deep hydration and skin refinement for a flawless, radiant appearance.",
  },
  {
    title: "Bridal Beauty Experience",
    description:
      "A complete luxury beauty service designed for your most important moments.",
  },
  {
    title: "Personal Beauty Consultation",
    description:
      "One-on-one consultation to define your ideal look and routine.",
  },
];

const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="Professional Care"
        title="Professional Beauty Treatments"
        subtitle="Our treatments are designed to restore, enhance, and elevate your natural beauty using advanced techniques and premium products."
        image={spaImg}
        imageAlt="Spa treatment setting"
      />

      <section ref={ref} className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="py-12 border-b border-border last:border-b-0 group"
            >
              <div className="flex items-start gap-8">
                <span className="font-sans-ui text-xs text-muted-foreground mt-2">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-12 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
            >
              Book Your Treatment →
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Treatments;
