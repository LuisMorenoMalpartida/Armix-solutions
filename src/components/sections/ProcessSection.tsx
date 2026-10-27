"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            {t.process.title}
          </h2>
          <p className="text-lg text-[#9ca3af]">{t.process.subtitle}</p>
        </motion.div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
              <div className="text-4xl font-light bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent mb-2">
                {step.num}
              </div>
              <h3 className="text-xl font-light text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[#9ca3af]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
