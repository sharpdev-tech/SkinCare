import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import faceMaskImg from "@/assets/face-mask.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@luxurymakeup.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199" },
  { icon: MapPin, label: "Location", value: "New York, NY" },
];

const Contact = () => {
  return (
    <main className="overflow-x-hidden">
      <PageHero
        tag="Get in Touch"
        title="Let's Create Your Signature Look"
        subtitle="We invite you to connect with us for product guidance, treatment bookings, or personalized beauty consultations."
        image={faceMaskImg}
        imageAlt="Contact luxury beauty"
      />

      <section className="py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
          {/* Contact info */}
          <div>
            <p className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Reach Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8">
              We'd love to hear from you
            </h2>
            <div className="w-16 h-px bg-accent mb-10" />

            <div className="space-y-8">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <c.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-sans-ui text-xs tracking-wider uppercase text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-body text-lg text-foreground">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-sans-ui text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-sans-ui text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-sans-ui text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-border bg-transparent px-4 py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              className="w-full px-10 py-4 bg-primary text-primary-foreground font-sans-ui text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors duration-500"
            >
              Get in Touch →
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
