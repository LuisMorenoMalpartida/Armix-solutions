"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 border-y border-white/[0.08] bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f43f8e]/5 via-transparent to-[#a855f7]/5" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Proyectos entregados", end: 50 },
            { label: "Clientes satisfechos", end: 40 },
            { label: "Horas ahorradas", end: 10000 },
            { label: "Tasa de satisfacción", end: 98 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#f43f8e] to-[#a855f7] bg-clip-text text-transparent mb-2">
                <CountUp end={stat.end} />
                {stat.label === "Tasa de satisfacción" ? "%" : ""}
              </div>
              <p className="text-sm text-[#9ca3af] uppercase tracking-wider font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
