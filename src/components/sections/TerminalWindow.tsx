"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function TerminalWindow() {
  const { t } = useLanguage();
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const lines = [
    { text: '$ armix deploy', delay: 0.3 },
    { text: '✓ Building project...', delay: 0.8 },
    { text: '✓ Installing dependencies...', delay: 1.3 },
    { text: '✓ Compiling...', delay: 1.8 },
    { text: '✓ Deploying...', delay: 2.3 },
    { text: '🚀 Success!', delay: 2.8 },
    { text: '✓ Ready', delay: 3.2 },
  ];

  useEffect(() => {
    setVisibleLines([]);
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay * 1000);
    });
  }, [t]);

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
            {t.process.title}{" "}
            <span className="bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent">
              {t.process.subtitle}
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <div className="ml-4 text-xs text-[#9ca3af] font-mono">terminal</div>
          </div>
          <div className="p-6 font-mono text-sm space-y-2 min-h-[280px]">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={visibleLines.includes(index) ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  line.text.includes('Success') || line.text.includes('Ready')
                    ? "text-[#27c93f]"
                    : line.text.startsWith("$")
                    ? "text-white"
                    : "text-[#9ca3af]"
                }
              >
                {line.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
