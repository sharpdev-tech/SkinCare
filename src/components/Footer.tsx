import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Treatments", path: "/treatments" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-foreground text-primary-foreground/60">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-2xl text-primary-foreground mb-2">
          Luxury Makeup
        </h3>
        <p className="font-body text-sm tracking-wider mb-8">
          Where Beauty Comes to Life
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-12 h-px bg-accent mx-auto mb-8" />
        <p className="font-sans-ui text-xs tracking-wider">
          © 2026 Luxury Makeup. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
