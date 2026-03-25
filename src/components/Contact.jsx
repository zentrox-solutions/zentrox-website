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

const features = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security with infrastructure built to grow alongside your business.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Blazing Fast Delivery",
    description:
      "From kickoff to launch in record time — without sacrificing quality or attention to detail.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    title: "Dedicated Support",
    description:
      "A real team that's always reachable — for questions, updates, and post-launch care.",
  },
];

const stats = [
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Reusable card wrapper with Zentrox styling
function ZCard({ children, className = "" }) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl transition-all duration-300 ${className}`}
      style={{
        background: "#10101A",
        border: "1px solid rgba(16,64,176,0.4)",
      }}
      variants={cardHoverVariants}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(37,99,235,0.55)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(37,99,235,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function CTASection() {
  return (
    <section
      aria-label="Start Your Web Development Project with Zentrox Solutions"
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
        <motion.div
          className="text-center"
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
              Start Your Project Today
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "#F0F6FF" }}>Ready to Start Your</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web Development Project?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            variants={itemVariants}
          >
            Join businesses that trust Zentrox Solutions to design, build, and
            scale their digital presence. Explore our{" "}
            <Link
              to="/services"
              className="text-[#3B7BF5] hover:text-[#60A0FF] transition-colors"
            >
              web development services
            </Link>{" "}
            or view our{" "}
            <Link
              to="/portfolio"
              className="text-[#3B7BF5] hover:text-[#60A0FF] transition-colors"
            >
              recent projects
            </Link>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <Link
              to="/start-project"
              aria-label="Start your web development project with Zentrox Solutions"
              onClick={handleNavigate}
              className="relative text-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
              style={{
                background: "#2563EB",
                boxShadow: "0 8px 32px rgba(37,99,235,0.40)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3B7BF5";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(59,123,245,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(37,99,235,0.40)";
              }}
            >
              Start Your Project
            </Link>

            <Link
              to="/portfolio"
              aria-label="View Zentrox Solutions portfolio of completed projects"
              onClick={handleNavigate}
              className="relative text-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
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
              View Our Portfolio
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="relative group"
                variants={itemVariants}
                whileHover="hover"
              >
                <ZCard>
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl mb-6 mx-auto"
                    style={{
                      background: "rgba(37,99,235,0.15)",
                      border: "1px solid rgba(37,99,235,0.3)",
                      color: "#2563EB",
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="text-center relative z-10">
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: "#F0F6FF" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="leading-relaxed text-sm"
                      style={{ color: "#94A3B8", fontWeight: 300 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </ZCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            className="grid grid-cols-2 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: "#94A3B8" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Contact Card */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#10101A",
                border: "1px solid rgba(37,99,235,0.3)",
                boxShadow: "0 0 60px rgba(37,99,235,0.08)",
              }}
            >
              <motion.div variants={itemVariants}>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#F0F6FF" }}
                >
                  Still Have Questions?
                </h3>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: "#94A3B8", fontWeight: 300 }}
                >
                  Our team is ready to walk you through how Zentrox Solutions
                  can help bring your project to life. Reach out — we respond
                  fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:zentroxsolutions.official@gmail.com"
                    className="px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:-translate-y-0.5"
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
                    Email Us
                  </a>
                  {/* <a
                    href="tel:+923000000000"
                    className="px-6 py-3 rounded-xl font-semibold text-white text-center transition-all duration-300 transform hover:-translate-y-0.5"
                    style={{
                      background: "#2563EB",
                      boxShadow: "0 6px 22px rgba(37,99,235,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#3B7BF5";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(59,123,245,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2563EB";
                      e.currentTarget.style.boxShadow =
                        "0 6px 22px rgba(37,99,235,0.35)";
                    }}
                  >
                    Call Now
                  </a> */}
                </div>
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
      />
    </section>
  );
}
