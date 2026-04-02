"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "@phosphor-icons/react";

const articles = [
  {
    category: "ServiceNow",
    tag: "Guide",
    title: "The CIO's Playbook for ServiceNow ROI: What the Top 10% Do Differently",
    excerpt:
      "Most organizations use less than a third of their ServiceNow investment. Here's the systematic approach high-performing IT leaders use to close that gap.",
    readTime: "8 min read",
    date: "Mar 12, 2026",
    href: "/insights/cio-servicenow-roi-playbook",
    accent: "text-gold",
    tagBg: "bg-gold/10 text-gold",
  },
  {
    category: "Agentic AI",
    tag: "Research",
    title: "Autonomous IT Operations: How Agentic AI Is Redefining the Service Desk",
    excerpt:
      "Tier 1 support is being automated out of existence. We analyzed 50 deployments to understand what's working, what's hype, and what's next.",
    readTime: "11 min read",
    date: "Mar 5, 2026",
    href: "/insights/agentic-ai-service-desk",
    accent: "text-purple",
    tagBg: "bg-purple/10 text-purple",
  },
  {
    category: "Strategy",
    tag: "Case Study",
    title: "From 18-Month Backlog to 6-Week Go-Live: A Healthcare IT Transformation",
    excerpt:
      "How a 12,000-employee health system bypassed their IT transformation gridlock and achieved measurable results in one quarter.",
    readTime: "6 min read",
    date: "Feb 27, 2026",
    href: "/insights/healthcare-it-transformation-case-study",
    accent: "text-teal",
    tagBg: "bg-teal/10 text-teal",
  },
];

export default function InsightsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-navy-mid py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
              Insights
            </span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight">
              Thinking That Moves{" "}
              <span className="text-gold-gradient">Enterprise IT Forward</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="flex items-center gap-2 text-gold font-600 text-sm hover:gap-3 transition-all shrink-0"
          >
            View All Insights <ArrowRight size={14} weight="bold" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link
                href={article.href}
                className="group flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-navy hover:border-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-600 ${article.tagBg}`}>
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1 text-slate text-xs">
                    <Clock size={11} weight="bold" />
                    {article.readTime}
                  </div>
                </div>
                <span className={`text-xs font-600 uppercase tracking-wider mb-2 ${article.accent}`}>
                  {article.category}
                </span>
                <h3 className="font-display font-700 text-base text-white leading-snug mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <span className="text-slate/60 text-xs">{article.date}</span>
                  <span className={`flex items-center gap-1 text-sm font-600 ${article.accent} group-hover:gap-2 transition-all`}>
                    Read More <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
