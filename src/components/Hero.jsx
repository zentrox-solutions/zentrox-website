import React from "react";
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

// ─── Animation Variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

// ─── Mini Components ──────────────────────────────────────────────────────────

function GridLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  );
}

function GlowOrb({ style }) {
  return (
    <div className="absolute rounded-full pointer-events-none" style={style} />
  );
}

function StatCard({ value, sub, label }) {
  return (
    <motion.div
      className="text-center"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320 }}
    >
      <div
        className="text-2xl font-bold leading-tight"
        style={{ color: "#F0F6FF" }}
      >
        {value}
        {sub && (
          <span
            className="block text-xs font-medium -mt-1"
            style={{ color: "#93C5FD" }}
          >
            {sub}
          </span>
        )}
      </div>
      <div className="text-sm mt-1" style={{ color: "#94A3B8" }}>
        {label}
      </div>
    </motion.div>
  );
}

function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-2xl"
      role="img"
      aria-label="Custom web development dashboard interface showing analytics and business website performance"
    >
      {/* Outer card */}
      <rect
        x="1"
        y="1"
        width="518"
        height="378"
        rx="18"
        fill="#0A0A0F"
        stroke="#1040B0"
        strokeWidth="1.5"
      />

      {/* Top bar */}
      <rect x="1" y="1" width="518" height="44" rx="18" fill="#10101A" />
      <rect x="1" y="27" width="518" height="18" fill="#10101A" />

      {/* Traffic lights */}
      <circle cx="28" cy="22" r="6" fill="#2563EB" opacity="0.7" />
      <circle cx="48" cy="22" r="6" fill="#3B7BF5" opacity="0.5" />
      <circle cx="68" cy="22" r="6" fill="#60A0FF" opacity="0.35" />

      {/* URL bar */}
      <rect
        x="100"
        y="12"
        width="260"
        height="20"
        rx="6"
        fill="#000000"
        stroke="#1040B0"
        strokeWidth="1"
      />
      <text x="140" y="26" fontSize="9" fill="#60A0FF" fontFamily="monospace">
        zentroxsolutions.com
      </text>

      {/* Sidebar */}
      <rect x="1" y="44" width="110" height="334" fill="#10101A" />

      {/* Sidebar items */}
      {[70, 106, 142, 178, 214].map((y, i) => (
        <g key={i}>
          <rect
            x="14"
            y={y}
            width="84"
            height="26"
            rx="7"
            fill={i === 0 ? "#2563EB" : "transparent"}
            stroke={i === 0 ? "none" : "#1040B0"}
            strokeWidth="1"
          />
          <rect
            x="22"
            y={y + 9}
            width={i === 0 ? 50 : 40 - i * 4}
            height="8"
            rx="3"
            fill={i === 0 ? "rgba(255,255,255,0.7)" : "#94A3B8"}
            opacity={i === 0 ? 1 : 0.5}
          />
        </g>
      ))}

      {/* Metric cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={122 + i * 128}
            y="56"
            width="116"
            height="64"
            rx="10"
            fill="#000000"
            stroke="#1040B0"
            strokeWidth="1"
          />
          <rect
            x={134 + i * 128}
            y="68"
            width="40"
            height="8"
            rx="3"
            fill="#2563EB"
            opacity="0.6"
          />
          <rect
            x={134 + i * 128}
            y="84"
            width={60 + i * 6}
            height="12"
            rx="3"
            fill="#F0F6FF"
            opacity="0.8"
          />
          <rect
            x={134 + i * 128}
            y="102"
            width="30"
            height="6"
            rx="2"
            fill="#94A3B8"
            opacity="0.5"
          />
        </g>
      ))}

      {/* Chart area */}
      <rect
        x="122"
        y="132"
        width="250"
        height="130"
        rx="10"
        fill="#000000"
        stroke="#1040B0"
        strokeWidth="1"
      />
      {[
        { h: 55, x: 142 },
        { h: 80, x: 170 },
        { h: 45, x: 198 },
        { h: 95, x: 226 },
        { h: 70, x: 254 },
        { h: 110, x: 282 },
        { h: 60, x: 310 },
      ].map(({ h, x }, i) => (
        <g key={i}>
          <rect
            x={x}
            y={242 - h}
            width="18"
            height={h}
            rx="4"
            fill={i === 5 ? "#2563EB" : "#1040B0"}
            opacity={i === 5 ? 1 : 0.7}
          />
          {i === 5 && (
            <rect
              x={x}
              y={242 - h}
              width="18"
              height={h}
              rx="4"
              fill="url(#barGlow)"
            />
          )}
        </g>
      ))}
      <defs>
        <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B7BF5" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Right panel */}
      <rect
        x="384"
        y="132"
        width="122"
        height="130"
        rx="10"
        fill="#000000"
        stroke="#1040B0"
        strokeWidth="1"
      />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x="396"
            y={148 + i * 28}
            width="98"
            height="18"
            rx="5"
            fill="#10101A"
          />
          <rect
            x="404"
            y={153 + i * 28}
            width={i % 2 === 0 ? 55 : 40}
            height="7"
            rx="2"
            fill="#60A0FF"
            opacity="0.5"
          />
          <rect
            x={460}
            y={153 + i * 28}
            width="28"
            height="7"
            rx="2"
            fill={i === 2 ? "#2563EB" : "#1040B0"}
            opacity="0.8"
          />
        </g>
      ))}

      {/* Bottom row */}
      <rect
        x="122"
        y="274"
        width="384"
        height="54"
        rx="10"
        fill="#000000"
        stroke="#1040B0"
        strokeWidth="1"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={138 + i * 74}
          y="289"
          width="58"
          height="8"
          rx="3"
          fill={i === 2 ? "#2563EB" : "#94A3B8"}
          opacity={i === 2 ? 0.8 : 0.35}
        />
      ))}

      <ellipse
        cx="370"
        cy="190"
        rx="120"
        ry="80"
        fill="#2563EB"
        opacity="0.04"
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO CONTENT ── */}
      <section
        aria-label="Web Development Services by Zentrox Solutions"
        style={{ background: "#000000" }}
      >
        <div
          className="relative px-6 py-24 sm:py-28 lg:pb-32 lg:pt-42 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #000000 0%, #0A0A0F 55%, #000000 100%)",
          }}
        >
          {/* Background layers */}
          <GlowOrb
            style={{
              top: "-120px",
              right: "-120px",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)",
            }}
          />
          <GlowOrb
            style={{
              bottom: "-100px",
              left: "-80px",
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(16,64,176,0.10) 0%, transparent 65%)",
            }}
          />
          <GridLines />

          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #2563EB, transparent)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-center gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* ── Left — Text ── */}
              <motion.div className="lg:w-1/2 space-y-8" variants={slideInLeft}>
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    border: "1px solid rgba(37,99,235,0.35)",
                  }}
                  variants={itemVariants}
                  aria-label="Custom web development agency building high-converting business websites"
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "#2563EB" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#93C5FD" }}
                  >
                    build high-converting business websites
                  </span>
                </motion.div>

                {/* Heading — SEO: H1 with primary keyword */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
                  variants={itemVariants}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span style={{ color: "#F0F6FF" }}>Web Development</span>
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Agency
                  </span>
                  <br />
                  <span style={{ color: "#CBD5E1" }}>
                    for Clinics & Businesses
                  </span>
                </motion.h1>

                {/* Description — SEO: keyword-rich, matches meta description */}
                <motion.p
                  className="text-lg leading-relaxed max-w-xl"
                  style={{ color: "#94A3B8", fontWeight: 300 }}
                  variants={itemVariants}
                >
                  Zentrox Solutions is a full-service web development agency
                  helping businesses worldwide build high-performance websites,
                  custom web apps, and scalable digital platforms that drive
                  real growth.
                </motion.p>

                {/* CTA Buttons — SEO: descriptive anchor text */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                  variants={itemVariants}
                >
                  <Link
                    to="/start-project"
                    onClick={handleNavigate}
                    aria-label="Start your web development project with Zentrox Solutions"
                    className="group relative text-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      background: "#2563EB",
                      boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#3B7BF5";
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(59,123,245,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2563EB";
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(37,99,235,0.4)";
                    }}
                  >
                    Start Your Website Project
                  </Link>

                  <Link
                    to="/portfolio"
                    onClick={handleNavigate}
                    aria-label="View Zentrox Solutions portfolio of web development work"
                    className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                    style={{
                      color: "#93C5FD",
                      border: "1px solid rgba(37,99,235,0.4)",
                      background: "transparent",
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
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    View Our Web Dev Portfolio
                  </Link>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                  className="flex flex-wrap gap-8 pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  variants={itemVariants}
                  aria-label="Zentrox Solutions key statistics"
                >
                  <StatCard value="99%" label="Client Satisfaction" />
                  <StatCard value="24/7" label="Support Available" />
                  <StatCard value="Fast" label="Project Delivery" />
                </motion.div>
              </motion.div>

              {/* ── Right — Illustration ── */}
              <motion.div
                className="lg:w-1/2 w-full flex items-center justify-center"
                variants={slideInRight}
              >
                <div className="relative w-full max-w-lg">
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)",
                      filter: "blur(24px)",
                    }}
                    aria-hidden="true"
                  />
                  <motion.div
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <DashboardIllustration />
                  </motion.div>

                  {/* Floating badge — top right */}
                  <motion.div
                    className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold"
                    style={{
                      background: "#2563EB",
                      color: "#F0F6FF",
                      boxShadow: "0 4px 20px rgba(37,99,235,0.5)",
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    aria-label="Custom built solutions"
                  >
                    ✦ Custom Built
                  </motion.div>

                  {/* Floating badge — bottom left */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold"
                    style={{
                      background: "#10101A",
                      border: "1px solid rgba(37,99,235,0.4)",
                      color: "#93C5FD",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    aria-label="Fast project delivery"
                  >
                    ⚡ Fast Delivery
                  </motion.div>
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
            aria-hidden="true"
          />
        </div>
        <p className="sr-only">
          Zentrox Solutions provides custom web development services, website
          design, and scalable web applications for businesses looking to grow
          online.
        </p>
      </section>
    </>
  );
}
