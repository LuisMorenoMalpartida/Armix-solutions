"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function EnhancedCta() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f43f8e]/20 to-[#a855f7]/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] font-mono text-xs tracking-[0.3em] uppercase text-[#9ca3af]"
          >
            EMPECEMOS
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
            {t.contact.title}
          </h2>
          <p className="text-xl md:text-2xl text-[#9ca3af] mb-6 max-w-4xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
          <p className="text-lg text-[#9ca3af] mb-12 max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center justify-center gap-2 px-10 py-5 rounded-full font-mono text-sm tracking-[0.2em] uppercase",
                "bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white",
                "shadow-[0_20px_80px_rgba(244,63,142,0.4)] hover:shadow-[0_20px_100px_rgba(244,63,142,0.5)]",
                "transition-all duration-300"
              )}
            >
              <Mail className="w-5 h-5" />
              {t.contact.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center justify-center gap-2 px-10 py-5 rounded-full font-mono text-sm tracking-[0.2em] uppercase",
                "border border-white/[0.15] bg-black/40 backdrop-blur-xl text-white",
                "hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              {t.contact.cta2}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
