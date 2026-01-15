"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Train, Truck, Factory, BadgeCheck, ShieldCheck, Leaf, Clock, Globe, FileCheck2 } from "lucide-react";

// Maxi‑Tech Greasing – One‑Page Website
// Tech stack: React + Tailwind (preloaded in Canvas). Uses shadcn-compatible utility classes only.
// Export this component as a single file that can be dropped into Vite/Next.js, etc.

export default function Website() {
  const [open, setOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "mission", label: "Mission & Vision" },
    { id: "values", label: "Core Values" },
    { id: "products", label: "Products & Services" },
    { id: "markets", label: "Markets" },
    { id: "clients", label: "Client History" },
    { id: "company", label: "Company Info" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white grid place-items-center font-bold">MT</div>
              <div>
                <div className="font-semibold leading-tight">Maxi‑Tech Greasing (Pty) Ltd</div>
                <div className="text-xs text-neutral-500">Botswana & Southern Africa</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-neutral-700 hover:text-neutral-900">
                  {n.label}
                </button>
              ))}
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:opacity-90">
                Request a Quote
              </a>
            </nav>

            {/* Mobile */}
            <button className="md:hidden p-2 rounded-xl border border-neutral-300" onClick={() => setOpen(!open)} aria-label="Open menu">
              <div className="w-5 h-[2px] bg-neutral-900 mb-1"/>
              <div className="w-5 h-[2px] bg-neutral-900"/>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-sm py-2">
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="text-left inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Reliable Coal Supply & Logistics for Southern Africa
              </h1>
              <p className="mt-5 text-neutral-700 max-w-prose">
                Maxi‑Tech Greasing sources directly from Morupule Coal Mine and delivers packaged and bulk thermal coal across Botswana, South Africa, Namibia, Zimbabwe, and Zambia. We pair energy reliability with compliance, safety, and sustainability.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#products" onClick={(e)=>{e.preventDefault();scrollTo("products");}} className="rounded-xl px-5 py-3 text-sm font-semibold bg-neutral-900 text-white">View Products</a>
                <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="rounded-xl px-5 py-3 text-sm font-semibold border border-neutral-300">Get a Quote</a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4"/> Registered: BW00001959098</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Compliance‑driven operations</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> Efficient lead times</div>
                <div className="flex items-center gap-2"><Leaf className="w-4 h-4"/> Responsible sourcing</div>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
                <div className="relative w-full h-80">
  <Image
    alt="Coal logistics"
    src="/hero.jpeg"
    fill
    className="object-cover"
    priority
  />
</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                <div className="absolute bottom-4 left-4 text-white text-sm flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur"><Truck className="w-4 h-4"/> Road haulage</span>
                  <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur"><Train className="w-4 h-4"/> Rail (cross‑border pending)</span>
                  <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur"><Factory className="w-4 h-4"/> Industrial supply</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Founded in 2018, Maxi‑Tech Greasing (Pty) Ltd is Botswana’s rising force in industrial energy supply. We built our name delivering premium lubricants for heavy industries — and today, we power Southern Africa with reliable, compliant, and scalable coal solutions. From mines to manufacturers, we deliver energy that moves industries forward while upholding Botswana’s standards for responsible resource management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-neutral-700">Deliver consistent, high‑quality coal and industrial solutions that support industrial growth and help alleviate energy shortages in Southern Africa, while maintaining responsible environmental and operational practices.</p>
            </div>
            <div className="p-6 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-neutral-700">Become a leading, trusted supplier of coal and energy solutions across Southern Africa and beyond — recognized for reliability, innovation, and commitment to sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Core Values</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { title: "Reliability", desc: "Always delivering on our promises with quality and consistency." },
              { title: "Collaboration", desc: "Building long‑term, strategic partnerships." },
              { title: "Efficiency", desc: "Timely, optimized logistics and compliant supply chains." },
              { title: "Sustainability", desc: "Environmental stewardship and regulatory compliance." },
              { title: "Customer‑Centricity", desc: "Tailored solutions with high safety standards." },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Products & Services</h2>
            <span className="text-sm text-neutral-500">Lab certificates available on request</span>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Filter cake", size: "-75 µm" },
              { title: "Duff", size: "0–16 mm" },
              { title: "Peas", size: "16–26 mm" },
              { title: "Nuts", size: "26–40 mm" },
              { title: "Cobbles", size: "40–75 mm" },
              { title: "Thermal washed", size: "0–50 mm" },
              { title: "Thermal / Raw", size: "9–32 mm" },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <div className="text-sm text-neutral-500">Thermal coal</div>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
                <div className="text-sm text-neutral-600">Sizing: {p.size}</div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full border">Bulk</span>
                  <span className="px-2 py-1 rounded-full border">Packaged</span>
                </div>
              </div>
            ))}
          </div>

          {/* Logistics */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: <Truck className="w-5 h-5"/>, title: "Road haulage", desc: "Nationwide Botswana + cross‑border deliveries." },
              { icon: <Train className="w-5 h-5"/>, title: "Rail transport", desc: "Cross‑border via Botswana Railways (pending finalization)." },
              { icon: <Globe className="w-5 h-5"/>, title: "Custom haulage", desc: "Tailored to client location, volumes, and schedules." },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex items-center gap-2 text-neutral-700"><span>{c.icon}</span><span className="font-semibold">{c.title}</span></div>
                <p className="mt-2 text-sm text-neutral-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Markets We Serve</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold">Geographic</h3>
              <ul className="mt-3 space-y-2 text-neutral-700 text-sm list-disc list-inside">
                <li>Botswana (nationwide)</li>
                <li>South Africa</li>
                <li>Namibia</li>
                <li>Zimbabwe</li>
                <li>Zambia</li>
                <li>Locations with sidings for efficient rail‑based deliveries</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Industries</h3>
              <ul className="mt-3 space-y-2 text-neutral-700 text-sm list-disc list-inside">
                <li>Power generation</li>
                <li>Manufacturing</li>
                <li>Mining</li>
                <li>Cement & steel industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client History */}
      <section id="clients" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Client History</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <h3 className="font-semibold">PETROHYPER</h3>
              <p className="mt-2 text-neutral-700 text-sm">Supply partner for Gazpromneft Lubricants, outperforming in‑house brands and becoming a preferred choice for earth‑moving fleets in mining and construction.</p>
            </div>
            <div className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <h3 className="font-semibold">Morupule Coal Mine</h3>
              <p className="mt-2 text-neutral-700 text-sm">Ongoing collaboration positioning Maxi‑Tech as a key player in coal sales and supply, supporting regional energy needs.</p>
              <div className="mt-3 text-xs text-neutral-600 inline-flex items-center gap-2"><FileCheck2 className="w-4 h-4"/> Non‑binding LOI dated 12 March 2025 available upon request.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info / Compliance */}
      <section id="company" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Company Information</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl border border-neutral-200 bg-neutral-50">
              <h3 className="font-semibold">Registration</h3>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li><span className="font-medium">Company:</span> Maxi‑Tech Greasing (Pty) Ltd</li>
                <li><span className="font-medium">UIN:</span> BW00001959098</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-neutral-200 bg-neutral-50">
              <h3 className="font-semibold">Addresses</h3>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li><span className="font-medium">Registered Office:</span> Raserura Ward, Mochudi, Botswana</li>
                <li><span className="font-medium">Principal Place:</span> Raserura Ward, Mochudi, Botswana</li>
                <li><span className="font-medium">Postal:</span> P.O. Box 20451, Mochudi, Botswana</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-neutral-200 bg-neutral-50">
              <h3 className="font-semibold">Directors</h3>
              <div className="mt-2 text-sm text-neutral-700">Refilwe Legae Mangadi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Need dependable coal supply?</h3>
            <p className="mt-2 text-white/80">Tell us your location, tonnage, sizing, and delivery window. Our team will revert with pricing and logistics options.</p>
          </div>
          <div className="justify-self-end">
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-neutral-900">Request a Quote</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5"/><div><div className="font-medium">Botswana</div><div>(+267) 746 746 80</div></div></div>
                <div className="flex items-start gap-3"><Phone className="w-4 h-4 mt-0.5"/><div><div className="font-medium">South Africa</div><div>(+27) 63 443 8212</div></div></div>
                <div className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5"/><div><div className="font-medium">Email</div><a className="underline" href="mailto:maxitech10@gmail.com">maxitech10@gmail.com</a></div></div>
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5"/><div><div className="font-medium">Postal</div><div>P.O. Box 20451, Mochudi, Botswana</div></div></div>
              </div>
              <div className="mt-6 text-xs text-neutral-500">Director: Legae Refilwe Mangadi</div>
            </div>

            <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We will get back to you shortly.");}} className="p-6 rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Name</label>
                  <input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Your full name"/>
                </div>
                <div>
                  <label className="text-sm">Company</label>
                  <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Company name"/>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="name@example.com"/>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">Requirements</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Location, tonnage/month, sizing, delivery window"></textarea>
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl px-4 py-3 font-semibold bg-neutral-900 text-white">Send Request</button>
              <p className="mt-3 text-xs text-neutral-500">By submitting, you agree to be contacted regarding your inquiry.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-neutral-800">Maxi‑Tech Greasing (Pty) Ltd</div>
              <div>UIN BW00001959098 • © {new Date().getFullYear()}</div>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-neutral-900" href="#company" onClick={(e)=>{e.preventDefault();scrollTo("company");}}>Company Info</a>
              <a className="hover:text-neutral-900" href="#products" onClick={(e)=>{e.preventDefault();scrollTo("products");}}>Products</a>
              <a className="hover:text-neutral-900" href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}