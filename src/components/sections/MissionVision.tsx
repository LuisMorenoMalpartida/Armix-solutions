"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function MissionVision() {
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
            {t.mission.title}
          </h2>
        </motion.div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
            <h3 className="text-2xl font-light text-white mb-4">{t.mission.missionTitle}</h3>
            <p className="text-[#9ca3af] leading-relaxed">{t.mission.missionDesc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
            <h3 className="text-2xl font-light text-white mb-4">{t.mission.visionTitle}</h3>
            <p className="text-[#9ca3af] leading-relaxed">{t.mission.visionDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
