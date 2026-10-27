"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const logoKeys = [
  "aws",
  "gcp",
  "azure",
  "nvidia",
  "hf",
  "replicate",
  "langchain",
  "wandb",
];

export function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 border-y border-white/[0.08] bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {logoKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-[0.2em] uppercase text-[#9ca3af] grayscale hover:grayscale-0 hover:text-white transition-all duration-300 cursor-default"
            >
              {t.clients[key as keyof typeof t.clients]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
