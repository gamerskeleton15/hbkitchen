import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import { menu } from "../menu";
import type { MenuItem } from "../menu";
import { useCart } from "../context/CartContext";

const categories = ["All", "Burgers", "Pizzas", "Sides", "Drinks"] as const;

export default function MenuSection() {
  const { add } = useCart();
  const [filter, setFilter] = useState<string>("All");
  const [toast, setToast] = useState<string | null>(null);

  const filtered = filter === "All" ? menu : menu.filter((m) => m.category === filter);

  const handleAdd = (item: MenuItem) => {
    add(item);
    setToast(item.name);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">The Menu</h2>
          <p className="text-slate-400 mt-2">Hand-crafted favorites, ready in minutes.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${filter === cat ? "bg-brand-amber text-brand-dark shadow-lg shadow-brand-amber/20" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group bg-brand-card rounded-2xl border border-white/10 overflow-hidden hover:border-brand-amber/40 transition-colors"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-brand-dark/70 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-extrabold text-white border border-white/10">{item.category}</div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-lg font-extrabold text-white leading-tight">{item.name}</h3>
                <span className="text-brand-amber font-extrabold text-lg whitespace-nowrap">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{item.description}</p>
              <button onClick={() => handleAdd(item)} className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-amber to-amber-500 text-brand-dark font-extrabold shadow-lg shadow-brand-amber/20 hover:brightness-110 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {toast && (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-brand-card border border-brand-amber/40 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-medium backdrop-blur-xl">
          <span className="w-6 h-6 rounded-full bg-brand-amber text-brand-dark flex items-center justify-center"><Check className="w-4 h-4" /></span>
          Added <span className="text-brand-amber font-bold">{toast}</span> to cart
        </motion.div>
      )}
    </section>
  );
}
