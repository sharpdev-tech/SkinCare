import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import productsImg from "@/assets/products.jpg";
import skinCareImg from "@/assets/skin-care.jpg";
import faceMaskImg from "@/assets/face-mask.jpg";
import spaFlatLayImg from "@/assets/spa-flat-lay.jpg";

const categories = [
  {
    title: "Face",
    description:
      "Products designed to perfect the complexion, enhance radiance, and create a smooth, natural finish.",
    icon: "✦",
  },
  {
    title: "Eyes",
    description:
      "Precision formulas that define, lift, and intensify the eyes with long-lasting elegance.",
    icon: "◆",
  },
  {
    title: "Lips",
    description:
      "Rich colors and nourishing textures that provide comfort, shine, and refined definition.",
    icon: "❖",
  },
  {
    title: "Skin Prep & Care",
    description:
      "Essential products that prepare and protect the skin, ensuring makeup looks better and lasts longer.",
    icon: "✧",
  },
];

const sampleProducts = [
  {
    name: "Radiant Silk Foundation",
    description:
      "A lightweight, buildable foundation that delivers a smooth, luminous complexion with all-day comfort.",
    benefits: [
      "Smooth, even coverage",
      "Natural radiant finish",
      "Lightweight and breathable",
      "Long-lasting performance",
    ],
    idealFor: "All skin types · Everyday wear · Special occasions",
    image: skinCareImg,
    category: "Face",
    howToUse:
      "Apply a small amount and blend evenly using a brush, sponge, or fingertips. Build coverage as desired.",
    whyLoveIt:
      "Designed to blend seamlessly into the skin, this formula enhances your natural features without feeling heavy or visible.",
    texture: "Silky texture · Natural to radiant finish",
  },
  {
    name: "Velvet Matte Lipstick",
    description:
      "A deeply pigmented lipstick with a luxurious velvet finish that lasts from day to night.",
    benefits: [
      "Intense color payoff",
      "Non-drying formula",
      "Comfortable velvet finish",
      "Smudge-resistant wear",
    ],
    idealFor: "All occasions · Bold and subtle looks",
    image: faceMaskImg,
    category: "Lips",
    howToUse:
      "Apply directly from the bullet or use a lip brush for precision. Layer for deeper intensity.",
    whyLoveIt:
      "Rich, creamy pigment glides on effortlessly, delivering bold color with a soft, velvety feel that never dries out.",
    texture: "Creamy texture · Velvet matte finish",
  },
  {
    name: "Luminous Eye Palette",
    description:
      "A curated palette of highly blendable shades designed to sculpt, define, and illuminate the eyes.",
    benefits: [
      "12 complementary shades",
      "Buttery, blendable formula",
      "Buildable intensity",
      "Zero fallout application",
    ],
    idealFor: "Day to night looks · All eye colors",
    image: spaFlatLayImg,
    category: "Eyes",
    howToUse:
      "Use a flat brush for packing color and a fluffy brush for blending. Layer shades to create depth and dimension.",
    whyLoveIt:
      "Each shade is crafted with micro-fine pigments that blend effortlessly and stay vibrant without creasing or fading.",
    texture: "Silky powder · Matte, shimmer & satin finishes",
  },
  {
    name: "Hydra Glow Primer",
    description:
      "A skin-perfecting primer that hydrates, smooths, and creates the ideal canvas for flawless makeup.",
    benefits: [
      "Deep hydration boost",
      "Pore-minimizing effect",
      "Extends makeup wear",
      "Luminous, dewy glow",
    ],
    idealFor: "All skin types · Pre-makeup prep",
    image: productsImg,
    category: "Skin Prep & Care",
    howToUse:
      "Apply evenly across cleansed, moisturized skin. Allow to set for 30 seconds before applying foundation.",
    whyLoveIt:
      "This lightweight gel formula floods skin with moisture while creating a smooth, blurred finish that makes makeup glide on beautifully.",
    texture: "Lightweight gel · Dewy finish",
  },
];

const trustPoints = [
  "High-quality ingredients",
  "Professional-grade formulas",
  "Designed for modern beauty routines",
];

const Products = () => {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });

  const catRef = useRef(null);
  const catInView = useInView(catRef, { once: true, margin: "-100px" });

  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });

  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="Our Collection"
        title="Products Crafted for Perfection"
        subtitle="Designed for Performance. Defined by Elegance."
        image={productsImg}
        imageAlt="Luxury makeup products arrangement"
      />

      {/* 1. Product Introduction */}
      <section ref={introRef} className="py-28 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={introInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
          >
            Luxury Beauty Essentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight mb-8"
          >
            Discover a curated selection of{" "}
            <em className="italic font-normal text-accent">makeup & skincare</em>{" "}
            created for flawless results
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={introInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="luxury-divider mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={introInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Each product combines performance, comfort, and timeless elegance — designed to enhance your beauty, not mask it.
          </motion.p>
        </div>
      </section>

      {/* 2. Product Categories */}
      <section ref={catRef} className="py-28 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={catInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-4"
          >
            Browse by Category
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={catInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl font-medium text-foreground text-center mb-16"
          >
            Our Collections
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={catInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="p-10 border border-border hover:border-accent/50 transition-all duration-500 group bg-background/50"
              >
                <span className="text-accent text-2xl mb-4 block opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.icon}
                </span>
                <div className="w-10 h-px bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
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

      {/* 3. Product Cards */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-4"
          >
            Featured Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl font-medium text-foreground text-center mb-16"
          >
            Curated for Excellence
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {sampleProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-border group hover:border-accent/40 transition-all duration-500 bg-card overflow-hidden"
              >
                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <p className="font-sans-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
                    {product.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-5">
                    <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                      Key Benefits
                    </p>
                    <ul className="space-y-1.5">
                      {product.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="font-body text-base text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <p className="font-body text-sm text-muted-foreground/70 italic mb-6">
                    Ideal for: {product.idealFor}
                  </p>

                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProduct === i ? "auto" : 0,
                      opacity: expandedProduct === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border pt-6 mb-6 space-y-5">
                      <div>
                        <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-foreground mb-2">
                          Why You'll Love It
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          {product.whyLoveIt}
                        </p>
                      </div>
                      <div>
                        <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-foreground mb-2">
                          How to Use
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          {product.howToUse}
                        </p>
                      </div>
                      <div>
                        <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-foreground mb-2">
                          Texture & Finish
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          {product.texture}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      onClick={() =>
                        setExpandedProduct(expandedProduct === i ? null : i)
                      }
                      className="px-8 py-3 bg-primary text-primary-foreground font-sans-ui text-[10px] tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
                    >
                      {expandedProduct === i ? "Close Details" : "View Details →"}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="px-8 py-3 border border-border text-foreground font-sans-ui text-[10px] tracking-[0.3em] uppercase hover:border-accent/50 transition-colors duration-500"
                    >
                      Add to Collection →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section ref={trustRef} className="py-28 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={trustInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <p className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
                Our Promise
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
                Crafted with Care
              </h2>
              <div className="w-12 h-px bg-accent mb-8" />
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Our products are created with attention to quality, comfort, and
                performance — designed to feel as good as they look.
              </p>
              <ul className="space-y-4">
                {trustPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={trustInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className="flex items-center gap-3 font-body text-lg text-foreground"
                  >
                    <span className="text-accent text-sm">✔</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={trustInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={skinCareImg}
                alt="Premium beauty products crafted with care"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Closing Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
          >
            Your Beauty Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8"
          >
            Elevate Your{" "}
            <em className="italic font-normal text-accent">Beauty Routine</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="luxury-divider mb-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto"
          >
            Explore products that combine luxury, performance, and simplicity — designed to enhance your beauty, not mask it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-10 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
            >
              Explore All Products →
            </motion.button>
            <Link to="/treatments">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-10 py-4 border border-border text-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:border-accent/50 transition-colors duration-500"
              >
                Book a Treatment →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
