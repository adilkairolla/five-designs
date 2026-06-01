import { motion } from "motion/react";
import { Upload, ArrowUpRight, FileText, Lightbulb, Quote, BookOpen } from "lucide-react";

// Design 5: "Swiss Precision" - Clean grid system, bold typography, red accents, International style
export function Design5() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-hidden" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
      {/* Grid system visualization */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-8">
          <div className="h-full grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-x border-[#1a1a1a]/[0.03]" />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation - Minimal Swiss style */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm"
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between py-6 border-b border-[#1a1a1a]/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#e63946] flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Ratio Reader</span>
            </div>
            <div className="hidden md:flex items-center gap-12 text-sm">
              <a href="#" className="tracking-wide hover:text-[#e63946] transition-colors">Product</a>
              <a href="#" className="tracking-wide hover:text-[#e63946] transition-colors">Features</a>
              <a href="#" className="tracking-wide hover:text-[#e63946] transition-colors">Pricing</a>
              <a href="#" className="tracking-wide hover:text-[#e63946] transition-colors">About</a>
            </div>
            <button className="bg-[#1a1a1a] text-white px-6 py-3 text-sm font-bold tracking-wide hover:bg-[#e63946] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Grid-based layout */}
      <section className="min-h-screen pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Left - Large number */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-2 flex items-start pt-8"
            >
              <span className="text-[12rem] font-bold leading-none text-[#1a1a1a]/5 select-none hidden md:block">
                01
              </span>
            </motion.div>

            {/* Center - Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-12 md:col-span-7"
            >
              <div className="mb-8">
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e63946]">
                  PDF Analysis Tool
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tight mb-12">
                Read<br />
                <span className="text-[#e63946]">Less,</span><br />
                Know<br />
                More.
              </h1>

              <div className="max-w-lg">
                <p className="text-xl leading-relaxed text-[#1a1a1a]/70 mb-10">
                  Upload your PDFs. Receive precise summaries, key insights, and notable quotes. Understanding distilled to its purest form.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-[#e63946] text-white px-8 py-4 font-bold tracking-wide flex items-center gap-3 hover:bg-[#1a1a1a] transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    Upload PDF
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                  <a href="#" className="text-sm font-bold tracking-wide border-b-2 border-[#1a1a1a] pb-1 hover:border-[#e63946] hover:text-[#e63946] transition-colors">
                    View Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-12 md:col-span-3 md:border-l border-[#1a1a1a]/10 md:pl-8 mt-12 md:mt-0"
            >
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                {[
                  { value: "2.5M", label: "Documents Processed" },
                  { value: "73%", label: "Time Saved" },
                  { value: "99.2%", label: "Accuracy Rate" },
                  { value: "<3s", label: "Average Speed" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="border-b border-[#1a1a1a]/10 pb-6"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-[#1a1a1a]/50 tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Strict grid */}
      <section className="py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 mb-20">
            <div className="col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e63946] block mb-4">
                  02 — Features
                </span>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                  What<br />You Get
                </h2>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-[#1a1a1a]/70 leading-relaxed"
              >
                Four essential tools designed with precision. No excess. No fluff. Just the information architecture you need to understand any document.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]/10">
            {[
              {
                icon: FileText,
                number: "01",
                title: "Smart Summaries",
                description: "Intelligent compression that preserves context and meaning. Get the full picture in a fraction of the text.",
              },
              {
                icon: Lightbulb,
                number: "02",
                title: "Key Insights",
                description: "Critical information extracted and highlighted. Never miss what matters most.",
              },
              {
                icon: Quote,
                number: "03",
                title: "Notable Quotes",
                description: "Significant passages identified and organized. Ready for reference or citation.",
              },
              {
                icon: BookOpen,
                number: "04",
                title: "Reading Hints",
                description: "Contextual notes and background information to enhance comprehension.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 group hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <feature.icon className="w-8 h-8 text-[#e63946]" />
                  <span className="text-sm font-bold text-[#1a1a1a]/30 group-hover:text-white/30 transition-colors">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#1a1a1a]/60 group-hover:text-white/60 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 mb-20">
            <div className="col-span-12 md:col-span-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e63946] block mb-4">
                  03 — Process
                </span>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                  Three Steps.<br />
                  <span className="text-white/40">That's All.</span>
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {[
              {
                step: "A",
                title: "Upload",
                description: "Drop your PDF into the interface. Any document, any length. We handle the rest.",
              },
              {
                step: "B",
                title: "Process",
                description: "Our algorithms analyze, categorize, and extract. Results in under 3 seconds.",
              },
              {
                step: "C",
                title: "Read",
                description: "Access your personalized summary, insights, quotes, and hints. Understanding achieved.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="border-t border-white/20 pt-8"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-6xl md:text-7xl font-bold text-[#e63946]">{item.step}</span>
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/40">{item.title}</span>
                </div>
                <p className="text-white/60 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-2"
            >
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e63946]">
                04 — Testimonial
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8"
            >
              <blockquote className="text-4xl md:text-5xl font-bold leading-[1.2] mb-12">
                "Ratio Reader has fundamentally changed how I approach research. What used to take hours now takes minutes—
                <span className="text-[#e63946]">with better comprehension.</span>"
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#1a1a1a]" />
                <div>
                  <div className="font-bold text-lg">Dr. Marcus Chen</div>
                  <div className="text-[#1a1a1a]/50">Research Director, Stanford University</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-32 border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-4 mb-20">
            <div className="col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e63946] block mb-4">
                  05 — Pricing
                </span>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">
                  Simple.<br />
                  Transparent.
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {[
              {
                name: "Free",
                price: "$0",
                description: "For casual readers",
                features: ["50 pages/month", "Basic summaries", "Standard processing"],
                cta: "Start Free",
                featured: false,
              },
              {
                name: "Pro",
                price: "$12",
                description: "For serious readers",
                features: ["Unlimited pages", "Advanced insights", "Priority processing", "API access"],
                cta: "Get Pro",
                featured: true,
              },
              {
                name: "Team",
                price: "$49",
                description: "For organizations",
                features: ["Everything in Pro", "5 team members", "Shared library", "Admin controls"],
                cta: "Contact Us",
                featured: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 md:p-16 ${plan.featured ? "bg-[#1a1a1a] text-white" : "bg-white"}`}
              >
                <div className="text-sm font-bold tracking-[0.2em] uppercase mb-2 opacity-50">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-50">/month</span>
                </div>
                <div className={`text-sm mb-8 ${plan.featured ? "text-white/60" : "text-[#1a1a1a]/60"}`}>
                  {plan.description}
                </div>
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`w-1.5 h-1.5 ${plan.featured ? "bg-[#e63946]" : "bg-[#1a1a1a]"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 font-bold tracking-wide transition-colors ${
                    plan.featured
                      ? "bg-[#e63946] text-white hover:bg-white hover:text-[#1a1a1a]"
                      : "bg-[#1a1a1a] text-white hover:bg-[#e63946]"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#e63946] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1400px] mx-auto px-8 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
            Start Reading<br />Smarter Today.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-lg mx-auto">
            Join thousands who have transformed their reading experience. Your first 50 pages are on us.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#e63946] px-10 py-5 font-bold text-lg tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#e63946] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase">Ratio Reader</span>
              </div>
              <p className="text-sm text-[#1a1a1a]/50 max-w-xs">
                Precision reading tools for the modern knowledge worker.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "API", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security"] },
            ].map((col, i) => (
              <div key={i} className="col-span-6 md:col-span-2">
                <h4 className="font-bold text-sm tracking-wide mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#1a1a1a]/50 hover:text-[#e63946] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-[#1a1a1a]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#1a1a1a]/40">
              © 2024 Ratio Reader. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-[#1a1a1a]/50 hover:text-[#e63946] transition-colors">Twitter</a>
              <a href="#" className="text-[#1a1a1a]/50 hover:text-[#e63946] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#1a1a1a]/50 hover:text-[#e63946] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
