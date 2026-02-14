import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";

import skinNatural from "@/assets/skin-natural.jpg";
import skinHydrated from "@/assets/skin-hydrated.jpg";
import skinNoWrinkles from "@/assets/skin-no-wrinkles.jpg";
import skinDarkCircles from "@/assets/skin-dark-circles.jpg";
import skinClear from "@/assets/skin-clear.jpg";
import skinAcne from "@/assets/skin-acne.png";

import productAntiWrinkle from "@/assets/product-anti-wrinkle.jpg";
import productEyeCream from "@/assets/product-eye-cream.jpg";
import productHydrating from "@/assets/product-hydrating.jpg";
import productPigmentation from "@/assets/product-pigmentation.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  productImage: string;
  beforeImage: string;
  afterImage: string;
  feedback: string;
  area: string;
}

const products: Product[] = [
  {
    id: "anti-wrinkle",
    name: "Anti-Wrinkle Cream",
    description: "PDRN Essence Stick Balm",
    productImage: productAntiWrinkle,
    beforeImage: skinNatural,
    afterImage: skinNoWrinkles,
    feedback: "Visually smoother skin texture after 14 days*",
    area: "Forehead & smile lines",
  },
  {
    id: "eye-cream",
    name: "Eye Cream",
    description: "Advanced Snail Peptide Eye Cream",
    productImage: productEyeCream,
    beforeImage: skinDarkCircles,
    afterImage: skinHydrated,
    feedback: "Reduced appearance of dark circles after 7 days*",
    area: "Under-eye area",
  },
  {
    id: "hydrating",
    name: "Hydrating Cream",
    description: "Mixsoon Moisturizer",
    productImage: productHydrating,
    beforeImage: skinNatural,
    afterImage: skinHydrated,
    feedback: "Deeply hydrated, plump skin after 3 days*",
    area: "Full face",
  },
  {
    id: "pigmentation",
    name: "Pigmentation Treatment",
    description: "Anua Niacinamide 10% + TXA Serum",
    productImage: productPigmentation,
    beforeImage: skinAcne,
    afterImage: skinClear,
    feedback: "Visibly clearer, even-toned skin after 28 days*",
    area: "Cheeks & forehead",
  },
];

const SkincareSimulation = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAfter, setShowAfter] = useState(false);

  const currentImage = selectedProduct
    ? showAfter
      ? selectedProduct.afterImage
      : selectedProduct.beforeImage
    : skinNatural;

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowAfter(false);
    // Auto-switch to "after" with a short delay
    setTimeout(() => setShowAfter(true), 600);
  };

  const handleReset = () => {
    setSelectedProduct(null);
    setShowAfter(false);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans-ui text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4"
          >
            Interactive Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6"
          >
            See the <em className="italic font-normal text-accent">difference</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="luxury-divider mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Select a product to visualize its skincare benefits
          </motion.p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Face image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={
                    selectedProduct
                      ? `Skin ${showAfter ? "after" : "before"} ${selectedProduct.name}`
                      : "Natural skin"
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Status badge */}
              <AnimatePresence>
                {selectedProduct && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-4 left-4 right-4 glass-panel rounded-sm px-4 py-3"
                  >
                    <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                      {showAfter ? "After Treatment" : "Before Treatment"} — {selectedProduct.area}
                    </p>
                    {showAfter && (
                      <p className="font-body text-sm text-foreground/80">
                        {selectedProduct.feedback}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Before/After toggle */}
            {selectedProduct && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`font-sans-ui text-xs tracking-[0.2em] uppercase px-4 py-2 transition-colors duration-300 ${
                    !showAfter
                      ? "text-foreground border-b border-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`font-sans-ui text-xs tracking-[0.2em] uppercase px-4 py-2 transition-colors duration-300 ${
                    showAfter
                      ? "text-foreground border-b border-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  After
                </button>
                <button
                  onClick={handleReset}
                  className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
                  title="Reset"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            )}
          </motion.div>

          {/* Product cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {products.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`flex items-center gap-5 p-4 rounded-sm text-left transition-all duration-300 border ${
                  selectedProduct?.id === product.id
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background hover:border-accent/50"
                }`}
              >
                <div className="w-16 h-16 flex-shrink-0 bg-muted rounded-sm overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Target: {product.area}
                  </p>
                </div>
                {selectedProduct?.id === product.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                  />
                )}
              </motion.button>
            ))}

            {/* Disclaimer */}
            <p className="font-body text-xs text-muted-foreground/60 mt-4 leading-relaxed">
              * Visual simulation for demonstration purposes only. Results may
              vary depending on individual skin type and condition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkincareSimulation;
