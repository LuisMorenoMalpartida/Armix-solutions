"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen bg-[#050505] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
      <div className="relative z-20 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight text-white">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#9ca3af] max-w-lg leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs tracking-[0.2em] uppercase",
                "bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white",
                "shadow-[0_10px_40px_rgba(244,63,142,0.3)] hover:shadow-[0_10px_60px_rgba(244,63,142,0.4)]",
                "transition-all duration-300"
              )}
            >
              {t.hero.tryItNow}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs tracking-[0.2em] uppercase",
                "border border-white/[0.08] bg-black/40 backdrop-blur-xl text-white",
                "hover:bg-white/5 transition-all duration-300"
              )}
            >
              {t.hero.bookDemo}
            </motion.button>
          </div>
          <div className="mt-12 flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#f43f8e] to-[#a855f7]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#f43f8e] to-[#a855f7] animate-ping" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#9ca3af]">
              {t.hero.clickAndHold}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
