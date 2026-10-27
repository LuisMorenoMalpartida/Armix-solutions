"use client";
//apoco si stilin
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function EnhancedHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#f43f8e]/10 to-[#a855f7]/10 rounded-full blur-[120px] z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-[#f43f8e]" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#9ca3af]">
                INNOVACIÓN DIGITAL
              </span>
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.08] tracking-tight text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#9ca3af] max-w-2xl leading-relaxed mb-10">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-mono text-sm tracking-[0.2em] uppercase",
                  "bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white",
                  "shadow-[0_15px_60px_rgba(244,63,142,0.4)] hover:shadow-[0_15px_80px_rgba(244,63,142,0.5)]",
                  "transition-all duration-300"
                )}
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.tryItNow}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-mono text-sm tracking-[0.2em] uppercase",
                  "border border-white/[0.15] bg-black/40 backdrop-blur-xl text-white",
                  "hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                )}
              >
                {t.hero.bookDemo}
              </motion.button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gradient-to-br from-[#f43f8e] to-[#a855f7] opacity-80"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-medium">+40 clientes satisfechos</p>
                <p className="text-sm text-[#9ca3af]">Confían en Armix Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
