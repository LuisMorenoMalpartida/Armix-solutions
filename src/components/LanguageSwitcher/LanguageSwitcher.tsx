"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleLanguage}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full font-mono text-xs tracking-[0.2em] uppercase",
          "border border-white/[0.08] bg-black/40 backdrop-blur-xl text-[#9ca3af] hover:text-white",
          "transition-all duration-300"
        )}
        aria-label={t.language.switch}
      >
        <Languages className="w-4 h-4" />
        <span>{language === "en" ? "ES" : "EN"}</span>
      </button>
    </div>
  );
}
