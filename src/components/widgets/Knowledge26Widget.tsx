"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  MagnifyingGlass,
  BookmarkSimple,
  Bookmark,
  Copy,
  Check,
  ArrowSquareOut,
  Fire,
  Clock,
  TrendUp,
  Lightning,
  Newspaper,
  Megaphone,
  Lightbulb,
  Video,
  Info,
  Star,
  Buildings,
  Brain,
  Wrench,
  Desktop,
  Factory,
  Users,
} from "@phosphor-icons/react";
import {
  KNOWLEDGE_ITEMS,
  CATEGORIES,
  TYPE_LABELS,
  LAST_UPDATED,
  TOTAL_ITEMS,
  type KnowledgeItem,
  type KnowledgeCategory,
  type ContentType,
} from "@/data/knowledge26";

// ── Visitor behavior keys ────────────────────────────────────────────────────
const LS_SAVED = "k26_saved";
const LS_VIEWED = "k26_viewed";
const LS_CAT_COUNTS = "k26_cat_counts";
const LS_OPEN_COUNT = "k26_opens";

type SortMode = "trending" | "latest" | "saved";

const CATEGORY_ICONS: Record<KnowledgeCategory, React.ElementType> = {
  "knowledge26": Star,
  "agentic-ai":  Brain,
  "itsm":        Wrench,
  "wsd":         Buildings,
  "platform":    Desktop,
  "industry":    Factory,
  "staffing":    Users,
};

const TYPE_ICONS: Record<ContentType, React.ElementType> = {
  news:         Newspaper,
  announcement: Megaphone,
  trend:        TrendUp,
  session:      Video,
  tip:          Lightbulb,
  viral:        Fire,
  insight:      Lightbulb,
};

const LEAD_DOT: Record<string, string> = {
  high:   "bg-red-500",
  medium: "bg-amber-400",
  low:    "bg-teal-400",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function lsGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function lsSet(key: string, val: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch { /* quota exceeded — ignore */ }
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ── Item card ────────────────────────────────────────────────────────────────

function ItemCard({
  item,
  saved,
  onSave,
}: {
  item: KnowledgeItem;
  saved: boolean;
  onSave: (id: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const CatIcon = CATEGORY_ICONS[item.category];
  const TypeIcon = TYPE_ICONS[item.type];
  const catMeta = CATEGORIES[item.category];

  function handleCopy() {
    navigator.clipboard.writeText(
      `${item.title} — via AscendWorksNow Knowledge Hub`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative rounded-xl border border-white/8 bg-white/4 p-4 transition-all duration-200 hover:border-white/16 hover:bg-white/8">
      {/* Lead signal dot — internal AscendWorks indicator */}
      {item.leadSignal && (
        <span
          className={`absolute right-3 top-3 h-2 w-2 rounded-full ${LEAD_DOT[item.leadSignal]} opacity-60`}
          title={`Lead signal: ${item.leadSignal}`}
        />
      )}

      {/* Top row: type badge + category */}
      <div className="mb-2.5 flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-600 uppercase tracking-wider"
          style={{ color: catMeta.color, background: catMeta.bg }}
        >
          <CatIcon size={10} weight="bold" />
          {catMeta.label}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-2 py-0.5 text-[10px] font-500 text-white/50">
          <TypeIcon size={10} />
          {TYPE_LABELS[item.type]}
        </span>
        {item.trending && (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-600 text-red-400">
            <Fire size={10} weight="fill" />
            Hot
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="mb-1.5 text-sm font-700 leading-snug text-white/92 group-hover:text-white">
        {item.title}
      </h4>

      {/* Summary */}
      <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-white/55">
        {item.summary}
      </p>

      {/* Stats (if any) */}
      {item.stats && item.stats.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {item.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white/6 px-2.5 py-1.5 text-center"
            >
              <div
                className="text-[13px] font-700 leading-none"
                style={{ color: CATEGORIES[item.category].color }}
              >
                {s.value}
              </div>
              <div className="mt-0.5 text-[10px] text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {item.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/6 px-2 py-0.5 text-[10px] text-white/45"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-white/35">
          <Clock size={10} />
          <span>{formatDate(item.date)}</span>
          <span>·</span>
          <span className="max-w-[120px] truncate">{item.source}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            className="rounded-lg p-1.5 text-white/35 transition hover:bg-white/10 hover:text-white/70"
            title="Copy to clipboard"
          >
            {copied ? <Check size={12} className="text-teal-400" /> : <Copy size={12} />}
          </button>
          <button
            onClick={() => onSave(item.id)}
            className="rounded-lg p-1.5 transition hover:bg-white/10"
            title={saved ? "Remove bookmark" : "Save for later"}
          >
            {saved ? (
              <Bookmark size={12} weight="fill" className="text-gold" />
            ) : (
              <BookmarkSimple size={12} className="text-white/35 hover:text-white/70" />
            )}
          </button>
          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-white/35 transition hover:bg-white/10 hover:text-white/70"
              title="View source"
            >
              <ArrowSquareOut size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main widget ──────────────────────────────────────────────────────────────

export default function Knowledge26Widget() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<KnowledgeCategory | "all">("all");
  const [sort, setSort] = useState<SortMode>("trending");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [viewed, setViewed] = useState<string[]>([]);
  const [catCounts, setCatCounts] = useState<Record<string, number>>({});
  const [pulse, setPulse] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  // Load visitor state from localStorage
  useEffect(() => {
    setSaved(lsGet<string[]>(LS_SAVED, []));
    setViewed(lsGet<string[]>(LS_VIEWED, []));
    setCatCounts(lsGet<Record<string, number>>(LS_CAT_COUNTS, {}));
  }, []);

  // Stop pulse after first open
  useEffect(() => {
    if (open) {
      setPulse(false);
      const opens = lsGet<number>(LS_OPEN_COUNT, 0);
      lsSet(LS_OPEN_COUNT, opens + 1);
      setTimeout(() => searchRef.current?.focus(), 300);
    }
  }, [open]);

  const trackView = useCallback(
    (item: KnowledgeItem) => {
      if (!viewed.includes(item.id)) {
        const next = [...viewed, item.id];
        setViewed(next);
        lsSet(LS_VIEWED, next);
      }
      const counts = { ...catCounts, [item.category]: (catCounts[item.category] ?? 0) + 1 };
      setCatCounts(counts);
      lsSet(LS_CAT_COUNTS, counts);
    },
    [viewed, catCounts]
  );

  const toggleSave = useCallback(
    (id: string) => {
      const next = saved.includes(id) ? saved.filter((s) => s !== id) : [...saved, id];
      setSaved(next);
      lsSet(LS_SAVED, next);
    },
    [saved]
  );

  // Top interest category based on click history
  const topInterest =
    Object.entries(catCounts).sort((a, b) => b[1] - a[1])[0]?.[0] as
      | KnowledgeCategory
      | undefined;

  // Filter + sort items
  const filtered = KNOWLEDGE_ITEMS.filter((item) => {
    if (sort === "saved" && !saved.includes(item.id)) return false;
    if (activeCategory !== "all" && item.category !== activeCategory) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  }).sort((a, b) => {
    if (sort === "trending") {
      const aScore = (a.trending ? 2 : 0) + (a.featured ? 1 : 0);
      const bScore = (b.trending ? 2 : 0) + (b.featured ? 1 : 0);
      return bScore - aScore || new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sort === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

  const trendingCount = KNOWLEDGE_ITEMS.filter((i) => i.trending).length;

  return (
    <>
      {/* ── Floating trigger button ──────────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 rounded-2xl bg-navy px-4 py-3 shadow-2xl ring-1 ring-white/15 transition-all duration-200 hover:ring-gold/40 hover:shadow-gold/10"
        aria-label="Open Knowledge26 Hub"
      >
        {/* Pulse dot */}
        <span className="relative flex h-2.5 w-2.5">
          {pulse && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
          )}
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
        </span>
        <span className="text-[11px] font-700 uppercase tracking-widest text-gold">K26</span>
        <span className="hidden text-xs font-500 text-white/60 group-hover:text-white/80 sm:block">
          Live Feed
        </span>
        <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-600 text-white/70">
          {TOTAL_ITEMS}
        </span>
      </button>

      {/* ── Backdrop ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Slide-over panel ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 38 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#070D2E] shadow-2xl sm:w-[480px]"
            role="dialog"
            aria-label="Knowledge26 Intelligence Hub"
          >
            {/* ── Header ─────────────────────────────────────────────────── */}
            <div className="flex-shrink-0 border-b border-white/8 px-5 pb-4 pt-5">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-700 text-white">Knowledge Hub</h2>
                    <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-700 uppercase tracking-wider text-red-400">
                      ● Live Feed
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/40">
                    ServiceNow intelligence for enterprise IT leaders
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-white/40 transition hover:bg-white/8 hover:text-white"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Stats bar */}
              <div className="mb-3 flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-white/45">
                  <Newspaper size={11} />
                  <span>{TOTAL_ITEMS} items</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/45">
                  <Fire size={11} className="text-red-400" />
                  <span>{trendingCount} trending</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/45">
                  <Bookmark size={11} className="text-gold" />
                  <span>{saved.length} saved</span>
                </div>
                <div className="ml-auto text-[10px] text-white/30">
                  Updated {formatDate(LAST_UPDATED)}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <MagnifyingGlass
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search AI, ITSM, WSD, Knowledge26…"
                  className="w-full rounded-xl border border-white/10 bg-white/6 py-2.5 pl-8 pr-4 text-xs text-white placeholder-white/30 outline-none transition focus:border-gold/40 focus:bg-white/8"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* ── Personalization bar ─────────────────────────────────────── */}
            {topInterest && viewed.length > 2 && (
              <div className="flex-shrink-0 border-b border-white/6 bg-white/3 px-5 py-2">
                <div className="flex items-center gap-2 text-[11px] text-white/45">
                  <Lightning size={11} className="text-gold" weight="fill" />
                  <span>Your focus:</span>
                  <button
                    onClick={() => setActiveCategory(topInterest as KnowledgeCategory)}
                    className="font-600 text-gold hover:underline"
                    style={{ color: CATEGORIES[topInterest as KnowledgeCategory]?.color }}
                  >
                    {CATEGORIES[topInterest as KnowledgeCategory]?.label}
                  </button>
                  <span className="text-white/25">· based on your activity</span>
                </div>
              </div>
            )}

            {/* ── Category tabs ───────────────────────────────────────────── */}
            <div className="flex-shrink-0 border-b border-white/8 px-5 py-3">
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`flex-shrink-0 rounded-full px-3 py-1.5 text-[11px] font-600 transition ${
                    activeCategory === "all"
                      ? "bg-white text-navy"
                      : "bg-white/8 text-white/55 hover:bg-white/12 hover:text-white/80"
                  }`}
                >
                  All
                </button>
                {(Object.keys(CATEGORIES) as KnowledgeCategory[]).map((cat) => {
                  const Icon = CATEGORY_ICONS[cat];
                  const meta = CATEGORIES[cat];
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        const counts = { ...catCounts, [cat]: (catCounts[cat] ?? 0) + 1 };
                        setCatCounts(counts);
                        lsSet(LS_CAT_COUNTS, counts);
                      }}
                      className="flex flex-shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-600 transition"
                      style={
                        active
                          ? { background: meta.color, color: "#070D2E" }
                          : { background: meta.bg, color: meta.color }
                      }
                    >
                      <Icon size={10} weight={active ? "fill" : "regular"} />
                      {meta.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Sort strip ──────────────────────────────────────────────── */}
            <div className="flex flex-shrink-0 items-center gap-1 border-b border-white/6 px-5 py-2.5">
              {(
                [
                  { key: "trending", label: "Trending", icon: Fire },
                  { key: "latest",   label: "Latest",   icon: Clock },
                  { key: "saved",    label: `Saved (${saved.length})`, icon: Bookmark },
                ] as { key: SortMode; label: string; icon: React.ElementType }[]
              ).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setSort(key)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-600 transition ${
                    sort === key
                      ? "bg-white/12 text-white"
                      : "text-white/40 hover:bg-white/8 hover:text-white/60"
                  }`}
                >
                  <Icon size={11} weight={sort === key ? "fill" : "regular"} />
                  {label}
                </button>
              ))}
              <div className="ml-auto text-[10px] text-white/30">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </div>
            </div>

            {/* ── Item list ───────────────────────────────────────────────── */}
            <div
              className="flex-1 overflow-y-auto px-4 py-3"
              onScroll={() => {}} // future: load more
            >
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Info size={32} className="mb-3 text-white/20" />
                  <p className="text-sm font-500 text-white/40">
                    {sort === "saved" ? "No saved items yet." : "No results found."}
                  </p>
                  <p className="mt-1 text-xs text-white/25">
                    {sort === "saved"
                      ? "Bookmark items to find them here."
                      : "Try a different search or category."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map((item) => (
                    <div key={item.id} onClick={() => trackView(item)}>
                      <ItemCard
                        item={item}
                        saved={saved.includes(item.id)}
                        onSave={toggleSave}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Footer ─────────────────────────────────────────────────── */}
            <div className="flex-shrink-0 border-t border-white/8 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="text-[10px] text-white/30">
                  Curated by <span className="text-gold font-600">AscendWorks</span> for enterprise IT leaders
                </div>
                <a
                  href="/insights"
                  className="flex items-center gap-1 rounded-lg bg-white/8 px-3 py-1.5 text-[11px] font-600 text-white/60 transition hover:bg-white/14 hover:text-white"
                >
                  Full Insights
                  <ArrowSquareOut size={10} />
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
