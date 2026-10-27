"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-[#f43f8e]/30 to-[#a855f7]/30 rounded-full blur-[120px] opacity-50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-[#9ca3af] mb-4 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
          <p className="text-md text-[#9ca3af] mb-8 max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs tracking-[0.2em] uppercase",
                "bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white",
                "shadow-[0_15px_50px_rgba(244,63,142,0.4)] hover:shadow-[0_15px_70px_rgba(244,63,142,0.5)]",
                "transition-all duration-300"
              )}
            >
              {t.contact.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs tracking-[0.2em] uppercase",
                "border border-white/[0.08] bg-black/40 backdrop-blur-xl text-white",
                "hover:bg-white/5 transition-all duration-300"
              )}
            >
              {t.contact.cta2}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
