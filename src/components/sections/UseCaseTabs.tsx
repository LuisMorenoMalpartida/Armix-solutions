"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState("web");
  const { t } = useLanguage();

  const tabs = t.services.items.map((item, idx) => ({
    id: ["web", "custom", "auto", "ai", "integr"][idx],
    label: item.title.toUpperCase(),
    title: item.title,
    description: item.desc,
    features: [item.ideal],
  }));

  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="use-cases" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            {t.services.title}{" "}
            <span className="bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent">
              {t.services.subtitle}
            </span>
          </h2>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white shadow-[0_10px_40px_rgba(244,63,142,0.3)]"
                    : "border border-white/[0.08] bg-black/40 backdrop-blur-xl text-[#9ca3af] hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                  {active.title}
                </h3>
                <p className="text-lg text-[#9ca3af] mb-6 leading-relaxed">
                  {active.description}
                </p>
                <ul className="space-y-3">
                  {active.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#f43f8e] to-[#a855f7]" />
                      <span className="text-white font-mono text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-gradient-to-r from-[#f43f8e]/20 to-[#a855f7]/20 rounded-full blur-3xl" />
                <div className="relative w-48 h-48 bg-gradient-to-br from-[#f43f8e] to-[#a855f7] rounded-full opacity-20 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
