import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "FAQs", path: "/faqs" },
  { name: "Start Project", path: "/start-project" },
];

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Zentrox Solutions</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to Zentrox Solutions homepage and explore our web development services."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Page Not Found | Zentrox Solutions"
        />
        <meta
          property="og:description"
          content="This page doesn't exist. Visit Zentrox Solutions to explore our web development services."
        />
        <meta property="og:url" content="https://zentroxsolutions.com/" />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Page Not Found | Zentrox Solutions"
        />
        <meta
          name="twitter:description"
          content="This page doesn't exist. Visit Zentrox Solutions to explore our web development services."
        />
      </Helmet>

      <main
        id="main-content"
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-32 text-center"
        style={{
          background:
            "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
        }}
      >
        {/* ── Decorative Background ── */}
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
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
          }}
        />

        {/* ── Floating Orbs ── */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-10 left-10 w-4 h-4 rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.3)" }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-20 right-20 w-3 h-3 rounded-full pointer-events-none"
          style={{ background: "rgba(96,160,255,0.3)" }}
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.2)" }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* ── 404 Number ── */}
        <motion.div
          aria-hidden="true"
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <span
            className="text-8xl sm:text-9xl font-black select-none"
            style={{
              background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </span>
        </motion.div>

        {/* ── Content Card ── */}
        <motion.div
          className="relative w-full max-w-md rounded-2xl p-8"
          style={{
            background: "#10101A",
            border: "1px solid rgba(37,99,235,0.3)",
            boxShadow: "0 0 60px rgba(37,99,235,0.07)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Icon */}
          <motion.div
            aria-hidden="true"
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "#2563EB",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          >
            <svg
              aria-hidden="true"
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-2xl font-bold mb-3"
            style={{ color: "#F0F6FF" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to building something great.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link
              to="/"
              onClick={handleNavigate}
              aria-label="Return to Zentrox Solutions homepage"
              className="flex-1 py-3 px-6 rounded-xl font-semibold text-sm text-white text-center transition-all duration-300 transform hover:-translate-y-1"
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
              Return Home
            </Link>

            <button
              onClick={() => window.history.back()}
              aria-label="Go back to previous page"
              className="flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
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
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* ── Quick Links ── */}
        <motion.nav
          aria-label="Helpful page links"
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <p className="text-sm mb-4" style={{ color: "#94A3B8" }}>
            Or visit one of these pages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + index * 0.08 }}
              >
                <Link
                  to={link.path}
                  onClick={handleNavigate}
                  className="text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-lg"
                  style={{
                    color: "#60A0FF",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F0F6FF";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                    e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#60A0FF";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      </main>
    </>
  );
}
