import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

// ─── Zentrox Palette v3 ───────────────────────────────────────────────────────
// --black:       #000000   Primary BG
// --black-2:     #0A0A0F   Section BG
// --black-3:     #10101A   Cards & Panels
// --blue-dark:   #1040B0   Borders & BG tints
// --blue:        #2563EB   Primary / CTA  ★
// --blue-mid:    #3B7BF5   Hover States
// --blue-light:  #60A0FF   Accents
// --blue-glow:   #93C5FD   Links & Subtle Accents
// --steel:       #94A3B8   Muted / Captions
// --light:       #CBD5E1   Secondary Text
// --white:       #F0F6FF   Primary Text
// ─────────────────────────────────────────────────────────────────────────────

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardHoverVariants = {
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqData = [
  {
    id: 1,
    question: "What does Zentrox Solutions do?",
    answer:
      "Zentrox Solutions is a full-service web development agency. We design, build, and launch high-performance websites, custom web applications, and scalable digital platforms tailored to your business goals.",
    category: "general",
    tags: ["overview", "agency", "services"],
  },
  {
    id: 2,
    question: "Who is Zentrox Solutions for?",
    answer:
      "We work with startups, SMEs, and established businesses across all industries who want a professional, high-performing digital presence — from a brand-new website to a complex web application.",
    category: "general",
    tags: ["clients", "target", "businesses"],
  },
  {
    id: 3,
    question: "What services does Zentrox Solutions offer?",
    answer:
      "We offer custom website development, landing page design, e-commerce development, UI/UX design, SEO optimisation, website speed optimisation, cloud deployment, website maintenance, and monthly care plans.",
    category: "services",
    tags: ["services", "web", "design", "development"],
  },
  {
    id: 4,
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We build fully custom e-commerce platforms with secure payment gateway integration, inventory management, and conversion-optimised checkout flows — tailored to your products and brand.",
    category: "services",
    tags: ["ecommerce", "online store", "payments", "shopify"],
  },
  {
    id: 5,
    question: "What technologies do you use?",
    answer:
      "We use a modern, industry-leading tech stack including React, Next.js, Node.js, TypeScript, Tailwind CSS, and cloud infrastructure on AWS, Vercel, and DigitalOcean — ensuring your product is fast, secure, and maintainable.",
    category: "services",
    tags: ["tech stack", "react", "nextjs", "nodejs", "aws"],
  },
  {
    id: 6,
    question: "How long does it take to build a website?",
    answer:
      "Timelines depend on project scope. A standard website typically takes 2–4 weeks, while a complex web application can take 6–12 weeks. We'll give you a clear, detailed timeline during the discovery phase before any work begins.",
    category: "process",
    tags: ["timeline", "delivery", "turnaround", "duration"],
  },
  {
    id: 7,
    question: "What does your development process look like?",
    answer:
      "Our process has four clear stages: Discovery (understanding your goals and audience), Design (wireframes and UI/UX prototypes), Development (building and testing), and Launch (deployment, QA, and handover). You're involved and informed at every step.",
    category: "process",
    tags: ["process", "workflow", "stages", "how it works"],
  },
  {
    id: 8,
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every project we deliver is fully responsive and mobile-first by default. We test across all major devices and screen sizes to ensure a flawless experience for every visitor.",
    category: "services",
    tags: ["mobile", "responsive", "design", "devices"],
  },
  {
    id: 9,
    question: "How much does a website cost?",
    answer:
      "Project costs vary depending on scope, complexity, and features required. We offer transparent, fixed-price quotes after a free discovery call — no hidden fees, no surprises. Get in touch and we'll put together a proposal for you.",
    category: "pricing",
    tags: ["cost", "pricing", "budget", "quote"],
  },
  {
    id: 10,
    question: "Do you offer payment plans?",
    answer:
      "Yes. We typically structure payments in milestones — an initial deposit, a payment at design approval, and a final payment before launch. For larger projects, we can arrange a custom payment schedule.",
    category: "pricing",
    tags: ["payment", "installments", "billing", "milestones"],
  },
  {
    id: 11,
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance packages that include updates, performance monitoring, security patches, and feature additions. We don't disappear after launch — we're here for the long term.",
    category: "support",
    tags: ["support", "maintenance", "post-launch", "updates"],
  },
  {
    id: 12,
    question: "Will I be able to manage my website content myself?",
    answer:
      "Yes. We can integrate a CMS (like WordPress, Sanity, or a custom dashboard) so you can update content, images, and pages without any technical knowledge. Full training is included at handover.",
    category: "services",
    tags: ["cms", "content", "wordpress", "manage"],
  },
  {
    id: 13,
    question: "Is my website going to be fast and SEO-friendly?",
    answer:
      "Yes — performance and SEO are built in, not added on. Every site we build is optimised for Core Web Vitals, fast load times, clean semantic HTML, structured data, and on-page SEO best practices from day one.",
    category: "services",
    tags: ["seo", "performance", "speed", "google"],
  },
  {
    id: 14,
    question: "How do I get started with Zentrox Solutions?",
    answer:
      "Simply reach out via our contact form or email us at zentroxsolutions.official@gmail.com. We'll schedule a free discovery call, understand your project, and send you a detailed proposal — no obligations.",
    category: "process",
    tags: ["get started", "contact", "onboarding", "discovery"],
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

const categories = [
  { id: "all", name: "All", count: faqData.length },
  {
    id: "general",
    name: "General",
    count: faqData.filter((f) => f.category === "general").length,
  },
  {
    id: "services",
    name: "Services",
    count: faqData.filter((f) => f.category === "services").length,
  },
  {
    id: "process",
    name: "Process",
    count: faqData.filter((f) => f.category === "process").length,
  },
  {
    id: "pricing",
    name: "Pricing",
    count: faqData.filter((f) => f.category === "pricing").length,
  },
  {
    id: "support",
    name: "Support",
    count: faqData.filter((f) => f.category === "support").length,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// ─── Component ────────────────────────────────────────────────────────────────

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setOpenIndex(null);
  };
  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setOpenIndex(null);
  };
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setOpenIndex(null);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://zentroxsolutions.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQs",
        item: "https://zentroxsolutions.com/faqs",
      },
    ],
  };

  return (
    <main
      id="main-content"
      className="relative overflow-hidden min-h-screen pt-20 sm:pt-24"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
      }}
    >
      <Helmet>
        <title>FAQs | Zentrox Solutions — Web Development Agency</title>
        <meta
          name="description"
          content="Find answers to common questions about Zentrox Solutions — our services, process, pricing, timelines, and support."
        />
        <meta
          name="keywords"
          content="Zentrox Solutions FAQ, web development questions, web agency pricing, how to get started, website cost Pakistan"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zentroxsolutions.com/faqs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta property="og:title" content="FAQs | Zentrox Solutions" />
        <meta
          property="og:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Zentrox Solutions — Web Development Agency"
        />
        <meta
          property="og:description"
          content="Everything you need to know about working with Zentrox Solutions — web development, design, pricing, and support."
        />
        <meta property="og:url" content="https://zentroxsolutions.com/faqs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQs | Zentrox Solutions — Web Development Agency"
        />
        <meta
          name="twitter:description"
          content="Find answers to common questions about Zentrox Solutions — services, pricing, timelines, and support."
        />
        <meta
          name="twitter:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta
          name="twitter:image:alt"
          content="Zentrox Solutions — Web Development Agency"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,64,176,0.10) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6 sm:mb-8"
            style={{
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.35)",
            }}
            variants={itemVariants}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#2563EB" }}
            />
            <span className="text-sm font-medium" style={{ color: "#93C5FD" }}>
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "#F0F6FF" }}>Got Questions?</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We've Got Answers.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            variants={itemVariants}
          >
            Everything you need to know about working with Zentrox Solutions —
            from services and pricing to process and support.
          </motion.p>
        </motion.div>

        {/* ── Search & Filter ── */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div
            className="rounded-2xl p-6"
            style={{
              background: "#10101A",
              border: "1px solid rgba(16,64,176,0.4)",
            }}
          >
            {/* Search input */}
            <div className="relative mb-5">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  style={{ color: "#94A3B8" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                aria-label="Search frequently asked questions"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search questions, answers, or keywords..."
                className="w-full pl-12 pr-10 py-4 rounded-xl text-sm transition-all duration-300 outline-none"
                style={{
                  background: "#000000",
                  border: "1px solid rgba(16,64,176,0.5)",
                  color: "#F0F6FF",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(37,99,235,0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,64,176,0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 transition-colors"
                    style={{ color: "#94A3B8" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{
                      background: active ? "#2563EB" : "rgba(16,64,176,0.15)",
                      border: `1px solid ${active ? "#2563EB" : "rgba(37,99,235,0.25)"}`,
                      color: active ? "#F0F6FF" : "#93C5FD",
                      boxShadow: active
                        ? "0 4px 18px rgba(37,99,235,0.3)"
                        : "none",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat.name}
                    <span
                      className="px-1.5 py-0.5 rounded-full text-xs"
                      style={{
                        background: active
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(37,99,235,0.2)",
                        color: active ? "#F0F6FF" : "#93C5FD",
                      }}
                    >
                      {cat.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active filter summary */}
            {(searchQuery || selectedCategory !== "all") && (
              <motion.div
                className="flex items-center justify-between mt-4 pt-4"
                style={{ borderTop: "1px solid rgba(37,99,235,0.15)" }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#CBD5E1" }}
                >
                  <span>Showing {filteredFAQs.length} results</span>
                  {searchQuery && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{
                        background: "rgba(37,99,235,0.2)",
                        color: "#93C5FD",
                      }}
                    >
                      "{searchQuery}"
                    </span>
                  )}
                  {selectedCategory !== "all" && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{
                        background: "rgba(96,160,255,0.15)",
                        color: "#60A0FF",
                      }}
                    >
                      {categories.find((c) => c.id === selectedCategory)?.name}
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  aria-label="Clear all filters"
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0F6FF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ── FAQ Items ── */}
        <motion.div
          className="space-y-3 sm:space-y-4 mb-14 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              <motion.div
                key="faq-items"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-3 sm:space-y-4"
              >
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="group"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className="relative rounded-2xl overflow-hidden transition-all duration-300"
                      style={{
                        background: "#10101A",
                        border: "1px solid rgba(16,64,176,0.4)",
                      }}
                      variants={cardHoverVariants}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.55)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 36px rgba(37,99,235,0.10)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(16,64,176,0.4)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, transparent 60%)",
                        }}
                      />

                      {/* Question button */}
                      <button
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${faq.id}`}
                        className="w-full text-left p-6 sm:p-7 relative z-10"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3
                              className="text-base sm:text-lg font-semibold mb-3 leading-snug"
                              style={{ color: "#F0F6FF" }}
                            >
                              {faq.question}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                              {faq.tags.slice(0, 3).map((tag, ti) => (
                                <span
                                  key={ti}
                                  className="px-2 py-0.5 rounded-full text-xs"
                                  style={{
                                    background: "rgba(37,99,235,0.12)",
                                    border: "1px solid rgba(37,99,235,0.2)",
                                    color: "#93C5FD",
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* Chevron */}
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex-shrink-0 mt-1 w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              background:
                                openIndex === index
                                  ? "#2563EB"
                                  : "rgba(37,99,235,0.12)",
                              border: "1px solid rgba(37,99,235,0.3)",
                            }}
                          >
                            <svg
                              aria-hidden="true"
                              className="w-4 h-4"
                              style={{
                                color:
                                  openIndex === index ? "#F0F6FF" : "#2563EB",
                              }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            id={`faq-answer-${faq.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-7 pb-6 sm:pb-7 relative z-10">
                              <div
                                className="w-10 h-0.5 mb-4 rounded-full"
                                style={{
                                  background:
                                    "linear-gradient(90deg, #2563EB, #60A0FF)",
                                }}
                              />
                              <p
                                className="text-sm sm:text-base leading-relaxed"
                                style={{ color: "#94A3B8", fontWeight: 300 }}
                              >
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16"
              >
                <div
                  className="rounded-2xl p-12"
                  style={{
                    background: "#10101A",
                    border: "1px solid rgba(16,64,176,0.4)",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-14 h-14 mx-auto mb-4"
                    style={{ color: "#94A3B8" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#F0F6FF" }}
                  >
                    No results found
                  </h3>
                  <p className="mb-6 text-sm" style={{ color: "#94A3B8" }}>
                    Try different keywords or browse all categories.
                  </p>
                  <button
                    onClick={clearFilters}
                    aria-label="Clear all filters"
                    className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      background: "#2563EB",
                      boxShadow: "0 6px 22px rgba(37,99,235,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#3B7BF5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2563EB";
                    }}
                  >
                    Show All FAQs
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Still Have Questions ── */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="p-8 sm:p-12 rounded-2xl"
            style={{
              background: "#10101A",
              border: "1px solid rgba(37,99,235,0.3)",
              boxShadow: "0 0 60px rgba(37,99,235,0.07)",
            }}
            variants={itemVariants}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{
                background: "#2563EB",
                boxShadow: "0 6px 24px rgba(37,99,235,0.4)",
              }}
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#F0F6FF" }}
            >
              Still Have Questions?
            </h3>
            <p
              className="mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
              style={{ color: "#94A3B8", fontWeight: 300 }}
            >
              Can't find what you're looking for? Our team is happy to answer
              any questions and help you figure out if Zentrox Solutions is the
              right fit for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                aria-label="Contact Zentrox Solutions"
                onClick={handleNavigate}
                className="px-8 py-4 rounded-xl font-semibold text-white text-center w-full sm:w-auto transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3B7BF5";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(59,123,245,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(37,99,235,0.35)";
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                aria-label="Explore Zentrox Solutions services"
                onClick={handleNavigate}
                className="px-8 py-4 rounded-xl font-semibold text-center w-full sm:w-auto transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  color: "#93C5FD",
                  background: "transparent",
                  border: "1px solid rgba(37,99,235,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </main>
  );
};

export default FAQPage;
