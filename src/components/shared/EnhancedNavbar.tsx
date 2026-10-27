"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MessageCircle } from "lucide-react";

export function EnhancedNavbar() {
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
    { href: "#company", label: t.nav.company },
    { href: "#docs", label: t.nav.docs },
    { href: "#blog", label: t.nav.blog },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-1">
                <div className="w-1 h-6 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] group-hover:scale-110 transition-transform" />
                <div className="w-1 h-6 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1 group-hover:scale-110 transition-transform delay-75" />
                <div className="w-1 h-6 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1 group-hover:scale-110 transition-transform delay-150" />
              </div>
              <span className="font-mono text-sm tracking-[0.3em] uppercase text-white ml-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#f43f8e] group-hover:to-[#a855f7] group-hover:bg-clip-text transition-all">
                ARMIX SOLUTIONS
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative font-mono text-xs tracking-[0.25em] uppercase text-[#9ca3af] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#f43f8e] to-[#a855f7] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="#contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs tracking-[0.2em] uppercase bg-gradient-to-r from-[#f43f8e] to-[#a855f7] text-white hover:shadow-[0_10px_40px_rgba(244,63,142,0.4)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
