import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import productsImg from "@/assets/products.jpg";
import skinCareImg from "@/assets/skin-care.jpg";

const categories = [
  {
    title: "Face",
    description:
      "Silky foundations, concealers, and powders created to perfect and illuminate the skin with a natural, refined finish.",
  },
  {
    title: "Eyes",
    description:
      "Highly pigmented eyeshadows, liners, and mascaras that define the eyes with precision and elegance.",
  },
  {
    title: "Lips",
    description:
      "Luxurious lipsticks and glosses with rich color payoff and a soft, comfortable feel.",
  },
  {
    title: "Skincare",
    description:
      "Essential formulas that prepare, protect, and enhance the skin for a radiant makeup application.",
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="Our Collection"
        title="Products Crafted for Perfection"
        subtitle="Premium makeup and skincare essentials designed to deliver flawless results, elegant textures, and lasting confidence."
        image={productsImg}
        imageAlt="Luxury makeup products"
      />

      <section ref={ref} className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="p-10 border border-border hover:border-accent/50 transition-colors duration-500 group"
              >
                <div className="w-10 h-px bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-3xl font-medium mb-4 text-foreground">
                  {cat.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img
              src={skinCareImg}
              alt="Radiant Silk Foundation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Featured
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Radiant Silk Foundation
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              A lightweight, buildable foundation that delivers a smooth,
              luminous complexion. Designed to feel like a second skin while
              providing all-day coverage and radiance.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-10 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
