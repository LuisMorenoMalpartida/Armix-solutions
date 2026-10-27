"use client";

import { motion } from "framer-motion";
import { Code, Monitor, Bot, Brain, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesGrid() {
  const { t } = useLanguage();

  const icons = [Monitor, Code, Zap, Brain, ArrowRight];
  const gradients = [
    "from-[#f43f8e]/20 to-[#a855f7]/20",
    "from-blue-500/20 to-purple-500/20",
    "from-green-500/20 to-teal-500/20",
    "from-orange-500/20 to-pink-500/20",
    "from-cyan-500/20 to-indigo-500/20",
  ];

  return (
    <section id="use-cases" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,142,0.05),transparent_70%)]" />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            const gradient = gradients[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f43f8e] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative h-full rounded-3xl border border-white/[0.08] bg-black/60 backdrop-blur-xl p-8 hover:border-white/[0.15] transition-all duration-500 flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`mb-6 w-fit p-4 rounded-2xl bg-gradient-to-br ${gradient} border border-white/[0.08] group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#9ca3af] leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <p className="text-sm text-[#f43f8e] font-medium">
                    {item.ideal}
                  </p>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-5 h-5 text-[#f43f8e]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
