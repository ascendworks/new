"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CaretDown, List, X, ArrowRight } from "@phosphor-icons/react";

const services = [
  { label: "ServiceNow Implementation", desc: "Full-lifecycle deployment in 6 weeks", href: "/services/servicenow" },
  { label: "Agentic AI & Automation", desc: "AI-driven workflows that work without you", href: "/services/agentic-ai" },
  { label: "ITSM & Platform Optimization", desc: "Unlock the ROI already in your instance", href: "/services/itsm" },
  { label: "Platform Architecture", desc: "Designed to scale with enterprise demands", href: "/services/architecture" },
  { label: "Strategic IT Advisory", desc: "C-suite partnership for transformation", href: "/services/advisory" },
  { label: "Talent & Staffing", desc: "Certified ServiceNow engineers on demand", href: "/services/staffing" },
];

const industries = [
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
  { label: "Financial Services", href: "/industries/financial" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Government & Public Sector", href: "/industries/government" },
  { label: "Energy & Utilities", href: "/industries/energy" },
  { label: "Technology & Media", href: "/industries/technology" },
];

const company = [
  { label: "About AscendWorksNow", href: "/about" },
  { label: "Leadership Team", href: "/about#team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Certifications & Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
];

type DropdownKey = "services" | "industries" | "company" | null;

export default function Navbar() {
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (key: DropdownKey) => setOpen((prev) => (prev === key ? null : key));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-9 rounded-lg bg-gold flex items-center justify-center px-2">
            <span className="text-navy font-display font-800 text-sm tracking-wide">AWN</span>
          </div>
          <span className="font-display font-700 text-white text-lg tracking-tight">
            Ascend<span className="text-gold">Works</span>Now
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services */}
          <div className="relative">
            <button
              onClick={() => toggle("services")}
              onMouseEnter={() => setOpen("services")}
              className="flex items-center gap-1 px-4 py-2 text-slate-light hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
            >
              What We Do
              <CaretDown
                size={13}
                weight="bold"
                className={`transition-transform ${open === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {open === "services" && (
              <div
                onMouseLeave={() => setOpen(null)}
                className="absolute top-full left-0 mt-2 w-80 bg-navy-light border border-gold/10 rounded-2xl shadow-2xl shadow-black/40 p-4"
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    onClick={() => setOpen(null)}
                  >
                    <span className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      {s.label}
                    </span>
                    <span className="text-slate text-xs">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => toggle("industries")}
              onMouseEnter={() => setOpen("industries")}
              className="flex items-center gap-1 px-4 py-2 text-slate-light hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
            >
              Industries
              <CaretDown
                size={13}
                weight="bold"
                className={`transition-transform ${open === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            {open === "industries" && (
              <div
                onMouseLeave={() => setOpen(null)}
                className="absolute top-full left-0 mt-2 w-64 bg-navy-light border border-gold/10 rounded-2xl shadow-2xl shadow-black/40 p-4"
              >
                {industries.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="block px-3 py-2 text-sm text-slate-light hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setOpen(null)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div className="relative">
            <button
              onClick={() => toggle("company")}
              onMouseEnter={() => setOpen("company")}
              className="flex items-center gap-1 px-4 py-2 text-slate-light hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
            >
              Company
              <CaretDown
                size={13}
                weight="bold"
                className={`transition-transform ${open === "company" ? "rotate-180" : ""}`}
              />
            </button>
            {open === "company" && (
              <div
                onMouseLeave={() => setOpen(null)}
                className="absolute top-full left-0 mt-2 w-56 bg-navy-light border border-gold/10 rounded-2xl shadow-2xl shadow-black/40 p-4"
              >
                {company.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-3 py-2 text-sm text-slate-light hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setOpen(null)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/insights"
            className="px-4 py-2 text-slate-light hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
          >
            Insights
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-gold text-navy text-sm font-600 rounded-xl hover:bg-gold-light transition-colors"
          >
            Talk to an Expert
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-light border-t border-gold/10 px-6 py-6 flex flex-col gap-2">
          <p className="text-gold text-xs font-600 uppercase tracking-widest mb-2">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-slate-light text-sm py-1.5 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-3" />
          <p className="text-gold text-xs font-600 uppercase tracking-widest mb-2">Industries</p>
          {industries.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-slate-light text-sm py-1.5 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {i.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-3" />
          {company.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="text-slate-light text-sm py-1.5 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {c.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-4" />
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 bg-gold text-navy font-600 rounded-xl text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Talk to an Expert <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      )}
    </header>
  );
}
