import { X, Minus, Plus, Trash2, MapPin, Phone, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { WHATSAPP_NUMBER, DELIVERY_FEE, FREE_DELIVERY_MIN } from "../config";

export default function CartDrawer() {
  const { items, open, setOpen, inc, dec, remove, total } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", mode: "delivery" as "delivery" | "pickup" });

  const delivery = form.mode === "delivery" ? (total >= FREE_DELIVERY_MIN ? 0 : DELIVERY_FEE) : 0;
  const grand = total + delivery;

  const buildMessage = () => {
    let msg = `*Habibizz Kitchen Order*\n\n`;
    msg += `Name: ${form.name || "N/A"}\n`;
    msg += `Phone: ${form.phone || "N/A"}\n`;
    msg += `Mode: ${form.mode === "delivery" ? "Delivery" : "Pickup"}\n`;
    if (form.mode === "delivery") msg += `Address: ${form.address || "N/A"}\n`;
    msg += `\n*Items:*\n`;
    items.forEach((it) => msg += `• ${it.name} x${it.qty} = $${(it.price * it.qty).toFixed(2)}\n`);
    msg += `\nSubtotal: $${total.toFixed(2)}\n`;
    if (delivery > 0) msg += `Delivery: $${delivery.toFixed(2)}\n`;
    msg += `*Total: $${grand.toFixed(2)}*`;
    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed right-0 top-0 h-full w-full md:w-[420px] bg-brand-dark border-l border-white/10 z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h2 className="text-xl font-extrabold text-white">Your Cart</h2>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/10 text-white" aria-label="Close"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-10 text-slate-400">Your cart is empty.</div>
              ) : (
                items.map((it) => (
                  <div key={it.id} className="flex gap-3 bg-brand-card rounded-xl p-3 border border-white/10">
                    <img src={it.image} alt={it.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h4 className="font-bold text-white truncate">{it.name}</h4>
                        <span className="text-brand-amber font-extrabold text-sm">${(it.price * it.qty).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">${it.price.toFixed(2)} / unit</p>
                      <div className="flex items-center gap-2">
                        <button onClick={() => dec(it.id)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white" aria-label="Decrease"><Minus className="w-3 h-3" /></button>
                        <span className="font-extrabold min-w-[1.5rem] text-center">{it.qty}</span>
                        <button onClick={() => inc(it.id)} className="w-7 h-7 rounded-full bg-brand-amber text-brand-dark flex items-center justify-center hover:brightness-110" aria-label="Increase"><Plus className="w-3 h-3" /></button>
                        <button onClick={() => remove(it.id)} className="ml-auto text-slate-400 hover:text-brand-crimson" aria-label="Remove"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-white/10 px-6 py-5 bg-brand-card/50">
              <div className="flex justify-between font-bold text-white mb-1"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
              {delivery > 0 ? <div className="flex justify-between text-sm text-slate-400 mb-1"><span>Delivery</span><span>${delivery.toFixed(2)}</span></div> : <div className="flex justify-between text-sm text-brand-amber mb-1"><span>Delivery</span><span>Free</span></div>}
              <div className="flex justify-between text-2xl font-extrabold text-white mb-4"><span>Grand Total</span><span className="text-brand-amber">${grand.toFixed(2)}</span></div>

              <div className="space-y-3 mb-4">
                <div className="relative"><User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" /><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber" /></div>
                <div className="relative"><Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" /><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber" /></div>
                <div className="relative"><MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" /><input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Delivery address" className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber" /></div>
                <div className="flex gap-2">
                  <button onClick={() => setForm({ ...form, mode: "delivery" })} className={`flex-1 py-2 rounded-xl text-sm font-bold border ${form.mode === "delivery" ? "bg-brand-amber text-brand-dark border-brand-amber" : "bg-brand-dark text-slate-300 border-white/10"}`}>Delivery</button>
                  <button onClick={() => setForm({ ...form, mode: "pickup" })} className={`flex-1 py-2 rounded-xl text-sm font-bold border ${form.mode === "pickup" ? "bg-brand-amber text-brand-dark border-brand-amber" : "bg-brand-dark text-slate-300 border-white/10"}`}>Pickup</button>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-center py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-extrabold shadow-lg shadow-green-500/20 hover:brightness-110 transition-all">Send Order via WhatsApp</a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
