import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import CartDrawer from "./components/CartDrawer";
import StoreInfo from "./components/StoreInfo";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-amber selection:text-brand-dark">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <StoreInfo />
        </main>
        <footer id="contact" className="border-t border-white/10 bg-brand-card/40">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-extrabold tracking-tight">Habibizz Kitchen</h4>
              <p className="text-sm text-slate-400">Fast, fresh, local. Open until late.</p>
            </div>
            <div className="text-xs text-slate-500">© 2026 Habibizz Kitchen. All rights reserved.</div>
          </div>
        </footer>
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
