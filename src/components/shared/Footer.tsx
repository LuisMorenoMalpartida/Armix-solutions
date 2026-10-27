"use client";

import Link from "next/link";
import { X, GitBranch, Link2, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    { href: "#", label: t.footer.docs },
    { href: "#", label: t.footer.api },
    { href: "#", label: t.footer.pricing },
    { href: "#", label: t.footer.changelog },
  ];

  const resourceLinks = [
    { href: "#", label: t.footer.blog },
    { href: "#", label: t.footer.tutorials },
    { href: "#", label: t.footer.community },
    { href: "#", label: t.footer.support },
  ];

  const companyLinks = [
    { href: "#", label: t.footer.about },
    { href: "#", label: t.footer.careers },
    { href: "#", label: t.footer.contact },
    { href: "#", label: t.footer.privacy },
  ];

  const socialLinks = [
    { icon: X, href: "#" },
    { icon: GitBranch, href: "#" },
    { icon: Link2, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7]" />
                <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
                <div className="w-1 h-4 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
              </div>
              <span className="font-mono text-sm tracking-[0.3em] uppercase text-white ml-2">
                ARMIX SOLUTIONS
              </span>
            </div>
            <p className="text-[#9ca3af] mb-6 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg border border-white/[0.08] bg-black/40 hover:bg-white/5 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-[#9ca3af] hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white mb-4">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-white mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.08]">
          <p className="text-sm text-[#9ca3af] text-center">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
