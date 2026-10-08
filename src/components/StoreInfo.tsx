import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

export default function StoreInfo() {
  return (
    <section id="store" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Visit Us</h2>
          <p className="text-slate-400 mb-8">Come taste the difference. We open early and stay late.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-brand-card rounded-2xl border border-white/10 p-6 hover:border-brand-amber/40 transition-colors">
              <Clock className="w-8 h-8 text-brand-amber mb-3" />
              <h3 className="font-extrabold text-white mb-1">Hours</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>Mon - Thu: 11am - 11pm</li>
                <li>Fri - Sat: 11am - 12am</li>
                <li>Sun: 12pm - 10pm</li>
              </ul>
            </div>
            <div className="bg-brand-card rounded-2xl border border-white/10 p-6 hover:border-brand-amber/40 transition-colors">
              <MapPin className="w-8 h-8 text-brand-amber mb-3" />
              <h3 className="font-extrabold text-white mb-1">Address</h3>
              <p className="text-sm text-slate-300">42 Main Street, City Center</p>
              <p className="text-sm text-slate-400">Free parking behind store</p>
            </div>
            <div className="bg-brand-card rounded-2xl border border-white/10 p-6 hover:border-brand-amber/40 transition-colors sm:col-span-2">
              <Phone className="w-8 h-8 text-brand-amber mb-3" />
              <h3 className="font-extrabold text-white mb-1">Contact</h3>
              <p className="text-sm text-slate-300">+1 (555) 019-2834</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-brand-dark/50">
          <div className="h-72 relative">
            <iframe
              title="Store location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aacf255fb5%3A0xa000c5a3!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.6) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-3 left-3 bg-brand-dark/80 backdrop-blur px-3 py-2 rounded-xl text-xs font-bold text-white border border-white/10">Habibizz Kitchen</div>
          </div>
          <div className="p-6 flex items-center justify-between">
            <div>
              <h4 className="font-extrabold text-white">Get Directions</h4>
              <p className="text-xs text-slate-400">Open in Google Maps</p>
            </div>
            <a href="https://maps.google.com/?q=New+York" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-amber text-brand-dark font-extrabold text-sm hover:brightness-110 transition-all"><ExternalLink className="w-4 h-4" /> Open</a>
          </div>
        </div>
      </div>
    </section>
  );
}
