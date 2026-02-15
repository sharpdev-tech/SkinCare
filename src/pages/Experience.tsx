import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import SkincareSimulation from "@/components/SkincareSimulation";
import spaImg from "@/assets/spa-flat-lay.jpg";
import productsImg from "@/assets/products.jpg";

const pillars = [
  { title: "Refined Aesthetics", description: "Every visual detail curated for elegance and calm." },
  { title: "Expert Techniques", description: "Professional-grade methods applied with artistry and care." },
  { title: "Effortless Beauty", description: "Results that feel natural, confident, and unmistakably you." },
];

const Experience = () => {
  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="The Journey"
        title="An Elevated Beauty Experience"
        subtitle="From the moment you enter our digital space to the final result on your skin, every step is designed to feel exclusive, calm, and inspiring."
        image={spaImg}
        imageAlt="Luxury beauty experience"
      />

      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-24"
          >
            Expect refined aesthetics, expert techniques, and beauty that feels effortless.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="w-12 h-px bg-accent mx-auto mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-2xl font-medium mb-4 text-foreground">
                  {p.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="aspect-[21/9] overflow-hidden"
      >
        <img
          src={productsImg}
          alt="Beauty products arrangement"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <SkincareSimulation />

      <Footer />
    </main>
  );
};

export default Experience;
