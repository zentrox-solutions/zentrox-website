import { motion } from "framer-motion";
import { Link } from "react-router";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const reasons = [
  {
    name: "Strategy-First Approach",
    value: "We Plan Before We Build",
    desc: "Every project starts with a deep discovery phase — understanding your goals, audience, and competition so the final product delivers real business results.",
  },
  {
    name: "End-to-End Delivery",
    value: "Design, Build & Launch Under One Roof",
    desc: "From UI/UX design to backend development and cloud deployment, Zentrox Solutions handles every stage of your project with a single accountable team.",
  },
  {
    name: "Modern Tech Stack",
    value: "Built for Speed & Scale",
    desc: "We use industry-leading technologies — React, Next.js, Node.js, and AWS — ensuring your product is fast, secure, maintainable, and ready to grow.",
  },
  {
    name: "Transparent Communication",
    value: "You're Always in the Loop",
    desc: "Regular updates, clear timelines, and open collaboration at every step. No surprises — just consistent progress and honest communication throughout.",
  },
  {
    name: "Post-Launch Support",
    value: "We Don't Disappear After Launch",
    desc: "Our relationship doesn't end at go-live. We provide ongoing maintenance, performance monitoring, and feature development to keep your product ahead.",
  },
  {
    name: "Results-Driven Design",
    value: "Beautiful & Conversion-Focused",
    desc: "Our designs aren't just visually stunning — they're engineered to convert visitors into customers, with every element backed by UX best practices.",
  },
];

export default function WhyChooseSection() {
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      aria-label="Why Choose Zentrox Solutions for Web Development"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
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
          backgroundSize: "72px 72px",
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

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-8"
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
              Why Choose Zentrox Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "#F0F6FF" }}>
              Why Businesses Choose Zentrox to Build
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              High-Performing Websites
            </span>
          </motion.h2>

          {/* Body paragraphs */}
          <motion.div
            className="mt-8 space-y-5 text-lg leading-8"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Zentrox Solutions is a full-service web development agency built
              for businesses that take their digital presence seriously. Whether
              you're launching a brand-new product, scaling an existing
              platform, or rebuilding an outdated website — we bring the
              expertise, process, and passion to make it exceptional.
            </motion.p>
            <motion.p variants={itemVariants}>
              From the first discovery call to the final deployment, our team
              handles design, development, and delivery — giving you one trusted
              partner and zero confusion. We don't just build websites; we build
              digital assets that work for your business 24/7.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <motion.div
                key={reason.name}
                className="relative group"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  className="relative p-8 rounded-2xl h-full transition-all duration-300"
                  style={{
                    background: "#10101A",
                    border: "1px solid rgba(16,64,176,0.4)",
                  }}
                  variants={cardHoverVariants}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.55)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(37,99,235,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Card hover glow overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
                    }}
                  />

                  <dl className="relative z-10 h-full flex flex-col">
                    {/* Card name */}
                    <dt>
                      <h3
                        className="text-xl font-bold mb-3 tracking-tight"
                        style={{ color: "#F0F6FF" }}
                      >
                        {reason.name}
                      </h3>
                    </dt>

                    <dd>
                      {/* Value / sub-heading */}
                      <h4
                        className="text-base font-semibold mb-4 leading-snug"
                        style={{ color: "#2563EB" }}
                      >
                        {reason.value}
                      </h4>
                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed flex-grow"
                        style={{ color: "#94A3B8", fontWeight: 300 }}
                      >
                        {reason.desc}
                      </p>
                    </dd>

                    {/* Animated bottom accent line */}
                    <div
                      className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                      }}
                    />
                  </dl>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              to="/start-project"
              onClick={handleNavigate}
              smooth
              aria-label="Start your web development project with Zentrox Solutions today"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
              style={{
                background: "#2563EB",
                boxShadow: "0 8px 32px rgba(37,99,235,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3B7BF5";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(59,123,245,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(37,99,235,0.35)";
              }}
            >
              Start Your Project Today
            </Link>
            <p className="text-sm mt-4 text-gray-400">
              Trusted by startups and growing businesses worldwide
            </p>
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
    </section>
  );
}
