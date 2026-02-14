import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/face-mask.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Load Spline viewer script dynamically
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.57/build/spline-viewer.js";
    script.onload = () => setSplineLoaded(true);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" ref={containerRef}>
        {!splineLoaded && (
          <img
            src={heroImg}
            alt="Luxury skincare application"
            className="w-full h-full object-cover"
          />
        )}
        {splineLoaded && (
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `<spline-viewer url="https://prod.spline.design/oiuenNvbJBhB5tM8/scene.splinecode" style="width:100%;height:100%"></spline-viewer>`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background pointer-events-none" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans-ui text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-8"
        >
          Luxury Beauty Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-[1.1] mb-6 text-gold-glow"
        >
          Luxury Beauty,
          <br />
          <em className="italic font-normal">Perfected</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-24 h-px bg-accent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-xl mx-auto"
        >
          Premium makeup and treatments designed to enhance your natural elegance
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
