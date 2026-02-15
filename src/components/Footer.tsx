import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "#" },
  { label: "Terms & Conditions", path: "#" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-foreground text-primary-foreground/60">
      <div className="max-w-6xl mx-auto text-center">
        <img src={logo} alt="Lumina" className="h-16 mx-auto mb-2 brightness-0 invert opacity-80" />
        <p className="font-body text-sm tracking-wider mb-8">
          Radiance. Artistry. Elevated.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="w-12 h-px bg-accent mx-auto mb-8" />
        <p className="font-body text-xs text-primary-foreground/40 mb-2">
          hello@lumina.com
        </p>
        <p className="font-sans-ui text-xs tracking-wider">
          © 2026 Lumina. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
