"use client";

import Link from "next/link";
import { X, GitBranch, Link2, Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EnhancedFooter() {
  const { t } = useLanguage();

  const productLinks = [
    { href: "#", label: t.footer.docs },
    { href: "#", label: t.footer.api },
    { href: "#", label: t.footer.pricing },
    { href: "#", label: t.footer.changelog },
    { href: "#", label: t.footer.blog },
  ];

  const resourceLinks = [
    { href: "#", label: t.footer.tutorials },
    { href: "#", label: t.footer.community },
    { href: "#", label: t.footer.support },
  ];

  const companyLinks = [
    { href: "#company", label: t.footer.about },
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
    <footer className="border-t border-white/[0.08] bg-[#050505] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f43f8e] to-transparent" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-1 h-5 bg-gradient-to-b from-[#f43f8e] to-[#a855f7]" />
                <div className="w-1 h-5 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
                <div className="w-1 h-5 bg-gradient-to-b from-[#f43f8e] to-[#a855f7] ml-1" />
              </div>
              <span className="font-mono text-base tracking-[0.3em] uppercase text-white ml-2">
                ARMIX SOLUTIONS
              </span>
            </div>
            <p className="text-[#9ca3af] mb-6 max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
                <Mail className="w-4 h-4" />
                <span>contacto@armixsolutions.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
                <Phone className="w-4 h-4" />
                <span>+00 000 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
                <MapPin className="w-4 h-4" />
                <span>[Tu ciudad / país]</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="group p-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-[#9ca3af] group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-white mb-6">
              {t.footer.product}
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-white mb-6">
              {t.footer.resources}
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-white mb-6">
              {t.footer.company}
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors duration-200"
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
