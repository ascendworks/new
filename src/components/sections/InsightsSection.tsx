"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Fire } from "@phosphor-icons/react";
import { KNOWLEDGE_ITEMS, CATEGORIES, type KnowledgeItem } from "@/data/knowledge26";

// Category → editorial cover image (Unsplash CDN, static export compatible)
const CAT_IMAGES: Record<string, string> = {
  "knowledge26": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop",
  "agentic-ai":  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
  "itsm":        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  "wsd":         "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
  "platform":    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop",
  "industry":    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop",
  "staffing":    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
};

const ease = [0.22, 1, 0.36, 1] as const;

function img(item: KnowledgeItem) {
  return item.image ?? CAT_IMAGES[item.category] ?? CAT_IMAGES["knowledge26"];
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function CatPill({ cat, xs }: { cat: KnowledgeItem["category"]; xs?: boolean }) {
  const c = CATEGORIES[cat];
  return (
    <span
      style={{ color: c.color, background: c.bg, border: `1px solid ${c.color}50` }}
      className={`inline-block rounded-full font-semibold uppercase tracking-widest ${xs ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}
    >
      {c.label}
    </span>
  );
}

// ── Hero / featured card (Corexcorp-style: image left, content right) ─────────
function HeroCard({ item }: { item: KnowledgeItem }) {
  const c = CATEGORIES[item.category];
  const isInternal = !!item.pageSlug;
  const href = item.pageSlug ? `/insights/${item.pageSlug}` : (item.sourceUrl ?? "/insights");
  return (
    <motion.a
      href={href}
      target={isInternal ? undefined : (item.sourceUrl ? "_blank" : undefined)}
      rel={isInternal ? undefined : (item.sourceUrl ? "noopener noreferrer" : undefined)}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease }}
      className="group grid lg:grid-cols-[1.2fr_0.8fr] bg-white rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(9,15,82,0.18)] hover:shadow-[0_24px_72px_rgba(9,15,82,0.28)] hover:-translate-y-0.5 transition-all duration-300 mb-6"
    >
      {/* Image column */}
      <div className="relative h-64 lg:h-auto overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(item)}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <CatPill cat={item.category} />
          {item.trending && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/90 px-2.5 py-1 text-[9px] font-700 text-white uppercase tracking-wider backdrop-blur-sm">
              <Fire size={10} weight="fill" /> Trending
            </span>
          )}
        </div>
      </div>

      {/* Content column */}
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <p className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
          <Clock size={11} />
          {fmtDate(item.date)} · {item.source}
        </p>
        <h3 className="font-display font-800 text-navy text-2xl lg:text-[27px] leading-tight mb-4 group-hover:text-gold transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm leading-7 mb-5 line-clamp-4">{item.summary}</p>

        {item.stats && (
          <div className="grid grid-cols-2 gap-4 pb-5 mb-5 border-b border-slate-100">
            {item.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <div className="font-display font-800 text-xl" style={{ color: c.color }}>{s.value}</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="inline-flex items-center gap-2 text-sm font-700 group-hover:gap-3 transition-all" style={{ color: c.color }}>
          Read Full Analysis <ArrowRight size={14} weight="bold" />
        </div>
      </div>
    </motion.a>
  );
}

// ── Grid insight card (Corexcorp: image top, content below) ───────────────────
function GridCard({ item, delay }: { item: KnowledgeItem; delay: number }) {
  const c = CATEGORIES[item.category];
  const isInternal = !!item.pageSlug;
  const href = item.pageSlug ? `/insights/${item.pageSlug}` : (item.sourceUrl ?? "/insights");
  return (
    <motion.a
      href={href}
      target={isInternal ? undefined : (item.sourceUrl ? "_blank" : undefined)}
      rel={isInternal ? undefined : (item.sourceUrl ? "noopener noreferrer" : undefined)}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(9,15,82,0.10)] hover:shadow-[0_16px_50px_rgba(9,15,82,0.22)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(item)}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-3 left-3"><CatPill cat={item.category} xs /></div>
        {item.trending && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-red-500/90 px-2 py-0.5 text-[9px] font-700 text-white uppercase tracking-wider backdrop-blur-sm">
            <Fire size={9} weight="fill" /> Trending
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-slate-400 text-xs mb-2.5">{fmtDate(item.date)} · {item.source}</p>
        <h3 className="font-display font-700 text-navy text-[15px] leading-snug mb-2.5 group-hover:text-gold transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-3">{item.summary}</p>

        {item.stats && item.stats.length > 0 && (
          <div className="flex gap-4 pt-3 mb-3 border-t border-slate-100">
            {item.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <div className="font-display font-700 text-sm" style={{ color: c.color }}>{s.value}</div>
                <div className="text-[10px] text-slate-400 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1.5 text-sm font-600 group-hover:gap-2.5 transition-all" style={{ color: c.color }}>
          Read Insight <ArrowRight size={13} weight="bold" />
        </div>
      </div>
    </motion.a>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function InsightsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { hero, grid } = useMemo(() => {
    const sorted = [...KNOWLEDGE_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
    const featured = sorted.filter((i) => i.featured);
    const heroItem = featured[0] ?? sorted[0];
    const gridItems = [
      ...featured.filter((i) => i.id !== heroItem.id),
      ...sorted.filter((i) => !i.featured && i.id !== heroItem.id),
    ].slice(0, 3);
    return { hero: heroItem, grid: gridItems };
  }, []);

  return (
    <section ref={ref} className="section-navy-mid py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest">
                Insights
              </span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight">
              Thinking That Moves{" "}
              <span className="text-gold-gradient">Enterprise IT Forward</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("k26:open"))}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gold/30 bg-gold/8 text-gold hover:bg-gold/15 hover:border-gold/60 transition-all text-sm font-600"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <Fire size={13} weight="fill" className="text-red-400" />
              K26 Live
            </button>
            <Link href="/insights" className="flex items-center gap-2 text-gold font-600 text-sm hover:gap-3 transition-all">
              View All <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </motion.div>

        {/* Hero card */}
        {inView && <HeroCard item={hero} />}

        {/* 3-column grid */}
        {inView && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((item, i) => (
              <GridCard key={item.id} item={item} delay={0.1 + i * 0.1} />
            ))}
          </div>
        )}

        {/* Footer attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10"
        >
          <p className="text-slate/60 text-xs">
            Enterprise IT intelligence curated by AscendWorks
          </p>
          <Link
            href="/insights"
            className="flex items-center gap-2 text-sm font-600 text-white/70 hover:text-gold transition-colors"
          >
            View all {KNOWLEDGE_ITEMS.length} insights <ArrowRight size={12} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
