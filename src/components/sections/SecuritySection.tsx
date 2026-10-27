"use client";

import { motion } from "framer-motion";
import { Shield, Database, Cpu, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SecuritySection() {
  const { t } = useLanguage();

  const certifications = [
    { name: "SOC 2 Type II" },
    { name: "HIPAA Compliant" },
    { name: "GDPR Ready" },
    { name: "ISO 27001" },
  ];

  const features = [
    {
      icon: Database,
      title: t.why.points[2],
      description: t.about.reasons[2],
    },
    {
      icon: Cpu,
      title: t.why.points[3],
      description: t.about.reasons[3],
    },
    {
      icon: Shield,
      title: t.why.points[4],
      description: t.about.reasons[4],
    },
  ];

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
            {t.why.title}{" "}
            <span className="bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent">
              {t.why.subtitle}
            </span>
          </h2>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-xl"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="font-mono text-xs tracking-wide text-white uppercase">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-6 hover:shadow-[0_20px_60px_rgba(244,63,142,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#f43f8e]/20 to-[#a855f7]/20 border border-white/[0.08] w-fit mb-4">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
