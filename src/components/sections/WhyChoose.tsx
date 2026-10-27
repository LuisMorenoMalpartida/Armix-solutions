"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles, Zap, Shield, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyChoose() {
  const { t } = useLanguage();
  const icons = [Sparkles, Zap, Shield, HeartHandshake, CheckCircle];

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            {t.why.title}
          </h2>
          <p className="text-xl text-[#9ca3af]">{t.why.subtitle}</p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.why.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-[#f43f8e]/20 to-[#a855f7]/20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-[#e5e7eb] leading-relaxed">{point}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
