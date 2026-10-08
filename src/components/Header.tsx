import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Store", href: "#store" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-brand-dark/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-amber to-brand-crimson flex items-center justify-center shadow-lg shadow-brand-amber/20 group-hover:scale-105 transition-transform">
            <span className="text-brand-dark font-extrabold text-xl leading-none">H</span>
          </div>
          <div className="leading-none">
            <span className="block text-xl font-extrabold tracking-tight text-white">Habibizz</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-amber">Kitchen</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-amber transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-brand-crimson text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-lg shadow-brand-crimson/40"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-white" aria-label="Menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-brand-card border-b border-white/10"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 text-base font-medium text-slate-200">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="hover:text-brand-amber">{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
