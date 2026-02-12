import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import skinCareImg from "@/assets/skin-care.jpg";
import faceMaskImg from "@/assets/face-mask.jpg";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="Our Story"
        title="A Philosophy of Refined Beauty"
        subtitle="Our brand was created with one vision: to redefine beauty through quality, elegance, and authenticity."
        image={faceMaskImg}
        imageAlt="Beauty philosophy"
      />

      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={skinCareImg}
                alt="Luxury ingredients"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
              Beauty in the{" "}
              <em className="italic font-normal text-accent">Details</em>
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              We believe luxury is found in the details — from carefully selected
              ingredients to personalized care and timeless design.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Every product and treatment reflects our commitment to excellence,
              sustainability, and the art of making people feel confident in
              their own skin.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
