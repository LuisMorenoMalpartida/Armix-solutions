"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#use-cases", label: t.nav.useCases },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#docs", label: t.nav.docs },
    { href: "#blog", label: t.nav.blog },
    { href: "#company", label: t.nav.company },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled
          ? "opacity-80"
          : "opacity-100"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-300",
          "border border-white/[0.08]",
          "bg-black/40 backdrop-blur-xl backdrop-saturate-150",
          isScrolled ? "shadow-[0_8px_32px_rgba(244,63,142,0.15)]" : ""
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7]" />
            <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
            <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] uppercase text-white ml-2">
            ARMIX SOLUTIONS
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] uppercase text-[#9ca3af] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
