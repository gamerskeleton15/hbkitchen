import { motion } from "framer-motion";
import { Zap, Clock, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark via-[#111827] to-brand-dark">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=80" alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 text-brand-amber text-sm font-bold uppercase tracking-wider mb-6 border border-brand-amber/20">Fast • Fresh • Local</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-white mb-6">
            Crave <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-crimson">More</span>. <br />
            Wait <span className="text-brand-amber">Less.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-300 leading-relaxed mb-8 max-w-md">
            Premium fast food, delivered hot in minutes. Burgers, pizzas, sides, and shakes — all made with real ingredients, zero compromise.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
            <a href="#menu" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-amber to-amber-500 text-brand-dark font-extrabold shadow-xl shadow-brand-amber/25 hover:scale-105 transition-transform">Order Now</a>
            <a href="#store" className="px-8 py-3.5 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-colors">Store Info</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-brand-amber" /> 15 min avg</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-amber" /> Open until 11pm</div>
            <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-brand-amber" /> Free over $20</div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-brand-amber/30 shadow-2xl shadow-brand-amber/20 animate-float">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" alt="Food" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 right-4 bg-brand-card/90 backdrop-blur px-4 py-2 rounded-xl border border-white/10 shadow-2xl">
            <div className="text-xs text-slate-400">Avg delivery</div>
            <div className="text-xl font-extrabold text-white">14 <span className="text-brand-amber text-sm">min</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
