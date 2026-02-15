import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

import skinNatural from "@/assets/skin-natural.jpg";
import skinHydrated from "@/assets/skin-hydrated.jpg";
import skinNoWrinkles from "@/assets/skin-no-wrinkles.jpg";
import skinClear from "@/assets/skin-clear.jpg";
import skinAcne from "@/assets/skin-acne.png";
import skinDarkCircles from "@/assets/skin-dark-circles.jpg";

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
  /** Position around the face: "left-top" | "left-bottom" | "right-top" | "right-bottom" */
  position: string;
  /** SVG line target on the face (percentage-based) */
  faceAnchor: { x: number; y: number };
}

const products: Product[] = [
  {
    id: "anti-wrinkle",
    name: "Anti-Wrinkle Cream",
    description: "PDRN Essence Stick Balm",
    productImage: productAntiWrinkle,
    beforeImage: skinNatural,
    afterImage: skinNoWrinkles,
    feedback: "Visibly smoother skin texture after 14 days*",
    area: "Forehead & smile lines",
    position: "left-top",
    faceAnchor: { x: 50, y: 25 },
  },
  {
    id: "eye-cream",
    name: "Eye Cream",
    description: "Advanced Snail Peptide Eye Cream",
    productImage: productEyeCream,
    beforeImage: skinDarkCircles,
    afterImage: skinHydrated,
    feedback: "Reduced dark circles after 7 days*",
    area: "Under-eye area",
    position: "right-top",
    faceAnchor: { x: 55, y: 45 },
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
    position: "left-bottom",
    faceAnchor: { x: 45, y: 65 },
  },
  {
    id: "pigmentation",
    name: "Acne Treatment",
    description: "Anua Niacinamide 10% + TXA Serum",
    productImage: productPigmentation,
    beforeImage: skinAcne,
    afterImage: skinClear,
    feedback: "Visibly clearer, even-toned skin after 28 days*",
    area: "Cheeks & forehead",
    position: "right-bottom",
    faceAnchor: { x: 60, y: 55 },
  },
];

const SkincareSimulation = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [showAfter, setShowAfter] = useState(false);

  // Determine which image to show:
  // - Hovering a different product than selected: show that product's "before" (problem skin)
  // - Hovering the selected product or no hover with selection: show selected product's "after"
  // - Nothing: show natural skin
  const isHoveringDifferent = hoveredProduct && (!selectedProduct || hoveredProduct !== selectedProduct.id);
  const hoveredDiffProduct = isHoveringDifferent ? products.find(p => p.id === hoveredProduct) : null;

  const currentImage = hoveredDiffProduct
    ? hoveredDiffProduct.beforeImage
    : selectedProduct
      ? selectedProduct.afterImage
      : hoveredProduct
        ? (products.find(p => p.id === hoveredProduct)?.beforeImage ?? skinNatural)
        : skinNatural;

  const isShowingAfter = !hoveredDiffProduct && !!selectedProduct;

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowAfter(true);
  };

  const handleReset = () => {
    setSelectedProduct(null);
    setShowAfter(false);
    setHoveredProduct(null);
  };

  const leftProducts = products.filter((p) => p.position.startsWith("left"));
  const rightProducts = products.filter((p) => p.position.startsWith("right"));

  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
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
            Hover and click on a product to visualize its skincare benefits
          </motion.p>
        </div>

        {/* Desktop: Products around face */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {products.map((product) => {
                const isActive =
                  hoveredProduct === product.id || selectedProduct?.id === product.id;
                const isLeft = product.position.startsWith("left");
                const isTop = product.position.endsWith("top");
                // Product dot positions
                const px = isLeft ? 12 : 88;
                const py = isTop ? 25 : 70;
                // Face anchor
                const fx = product.faceAnchor.x;
                const fy = product.faceAnchor.y;

                return (
                  <line
                    key={product.id}
                    x1={`${px}%`}
                    y1={`${py}%`}
                    x2={`${fx}%`}
                    y2={`${fy}%`}
                    stroke={`hsl(var(--accent))`}
                    strokeWidth={isActive ? "0.3" : "0.15"}
                    strokeDasharray={isActive ? "none" : "1,1"}
                    opacity={isActive ? 1 : 0.4}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            <div className="grid grid-cols-[200px_1fr_200px] gap-8 items-center">
              {/* Left products */}
              <div className="flex flex-col gap-16 z-20">
                {leftProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={selectedProduct?.id === product.id}
                    isHovered={hoveredProduct === product.id}
                    onHover={setHoveredProduct}
                    onClick={handleSelectProduct}
                    align="right"
                  />
                ))}
              </div>

              {/* Center face */}
              <div className="relative z-0">
                <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-sm shadow-lg">
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

                  {/* Status overlay */}
                  <AnimatePresence>
                    {(hoveredDiffProduct || selectedProduct || hoveredProduct) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 glass-panel px-5 py-4"
                      >
                        <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                          {hoveredDiffProduct ? "Before" : selectedProduct ? "After" : "Before"} — {(hoveredDiffProduct || selectedProduct || products.find(p => p.id === hoveredProduct))!.area}
                        </p>
                        {isShowingAfter && (
                          <p className="font-body text-sm text-foreground/80">
                            {selectedProduct!.feedback}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Controls below face */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  {selectedProduct && (
                    <button
                      onClick={handleReset}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-sans-ui text-xs tracking-[0.2em] uppercase"
                      title="Reset to natural skin"
                    >
                      <RotateCcw size={16} />
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Right products */}
              <div className="flex flex-col gap-16 z-20">
                {rightProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={selectedProduct?.id === product.id}
                    isHovered={hoveredProduct === product.id}
                    onHover={setHoveredProduct}
                    onClick={handleSelectProduct}
                    align="left"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="lg:hidden">
          {/* Face image */}
          <div className="relative aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded-sm shadow-lg mb-8">
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
            <AnimatePresence>
              {selectedProduct && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-0 left-0 right-0 glass-panel px-4 py-3"
                >
                   <p className="font-sans-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                     After — {selectedProduct.area}
                   </p>
                   <p className="font-body text-sm text-foreground/80">
                     {selectedProduct.feedback}
                   </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          {selectedProduct && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={handleReset}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-sans-ui text-xs tracking-[0.2em] uppercase"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          )}

          {/* Mobile product cards */}
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-4 rounded-sm text-left transition-all duration-300 border ${
                  selectedProduct?.id === product.id
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background"
                }`}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-muted rounded-sm overflow-hidden">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-sans-ui text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    {product.area}
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
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/products"
            className="inline-block font-sans-ui text-xs tracking-[0.3em] uppercase px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            Explore more products in our store
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <p className="font-body text-xs text-muted-foreground/60 text-center mt-8 leading-relaxed">
          * Visual simulation for demonstration purposes only. Results may vary
          depending on individual skin type and condition.
        </p>
      </div>
    </section>
  );
};

/* ─── Product Card ─── */
interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick: (product: Product) => void;
  align: "left" | "right";
}

const ProductCard = ({
  product,
  isSelected,
  isHovered,
  onHover,
  onClick,
  align,
}: ProductCardProps) => {
  const active = isSelected || isHovered;

  return (
    <motion.button
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(product)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`flex flex-col items-center gap-3 p-3 rounded-sm transition-all duration-300 cursor-pointer ${
        active ? "bg-accent/10" : ""
      }`}
    >
      <div
        className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ${
          active ? "border-accent shadow-lg" : "border-border"
        }`}
      >
        <img
          src={product.productImage}
          alt={product.name}
          className="w-full h-full object-contain p-1.5 bg-muted"
        />
      </div>
      <div className={`text-center`}>
        <h3
          className={`font-display text-sm font-medium transition-colors duration-300 ${
            active ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {product.name}
        </h3>
        <p className="font-sans-ui text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
          {product.area}
        </p>
      </div>
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
      )}
    </motion.button>
  );
};

export default SkincareSimulation;
