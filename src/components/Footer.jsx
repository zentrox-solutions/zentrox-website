import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import logo from "/images/zs.png";

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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/zentroxsolutions",
    label: "Follow Zentrox Solutions on Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/zentrox_solutions",
    label: "Follow Zentrox Solutions on Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  // {
  //   name: "LinkedIn",
  //   href: "https://linkedin.com/company/zentroxsolutions",
  //   label: "Connect with Zentrox Solutions on LinkedIn",
  //   icon: (
  //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //     </svg>
  //   ),
  // },
  {
    name: "X / Twitter",
    href: "https://x.com/zentroxsolution",
    label: "Follow Zentrox Solutions on X",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/zentrox-solutions",
    label: "Follow Zentrox Solutions on GitHub",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const footerSections = {
  company: {
    title: "Company",
    links: [
      { name: "Services", href: "/services" },
      { name: "FAQs", href: "/faqs" },
      { name: "Start Your Project", href: "/start-project" },
      { name: "Portfolio", href: "/portfolio" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/custom-website-development" },
      { name: "Website Maintenance", href: "/services/website-maintenance" },
      { name: "E-Commerce", href: "/services/ecommerce-development" },
      { name: "SEO & Performance", href: "/services/seo-optimisation" },
      { name: "Cloud Deployment", href: "/services/cloud-deployment-hosting" },
    ],
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Zentrox Solutions footer"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 60%, #000000 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,64,176,0.07) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* ── Brand Column ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Logo wordmark */}
            <div className="flex items-center mb-5">
              <img src={logo} alt="Zentrox Solutions logo" className="w-16" />
              <span
                className="text-xl font-bold tracking-wide"
                style={{ color: "#F0F6FF", fontFamily: "'Outfit', sans-serif" }}
              >
                ZENTROX <span style={{ color: "#2563EB" }}>SOLUTIONS</span>
              </span>
            </div>

            <p
              className="leading-relaxed mb-6 max-w-sm text-sm"
              style={{ color: "#94A3B8", fontWeight: 300 }}
            >
              A full-service web development agency crafting high-performance
              websites, custom web apps, and scalable digital platforms — built
              to grow your business from day one.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-7">
              {/* Email */}
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#2563EB",
                  }}
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
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:zentroxsolutions.official@gmail.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0F6FF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94A3B8")
                  }
                >
                  zentroxsolutions.official@gmail.com
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#2563EB",
                  }}
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
                      strokeWidth={1.8}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                    />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "#94A3B8" }}>
                  Serving clients worldwide
                </span>
              </motion.div>

              {/* Response time */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#2563EB",
                  }}
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
                      strokeWidth={1.8}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "#94A3B8" }}>
                  Responds within 24 hours
                </span>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label || social.name}
                  className="group p-2.5 rounded-xl transition-all duration-300"
                  style={{
                    background: "#10101A",
                    border: "1px solid rgba(16,64,176,0.4)",
                    color: "#94A3B8",
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.07 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#2563EB";
                    e.currentTarget.style.color = "#F0F6FF";
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(37,99,235,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
                    e.currentTarget.style.color = "#94A3B8";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Link Columns ── */}
          {Object.entries(footerSections).map(
            ([key, section], sectionIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
              >
                <nav aria-label={`${section.title} navigation`}>
                  <h3
                    className="text-sm font-semibold mb-5 tracking-widest uppercase"
                    style={{ color: "#2563EB", letterSpacing: "3px" }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <Link to={link.href} onClick={handleNavigate}>
                          <motion.div
                            className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                            style={{ color: "#94A3B8" }}
                            whileHover={{ x: 4 }}
                            initial={{ opacity: 0, x: -8 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: 0.4 + (sectionIndex + linkIndex) * 0.05,
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "#F0F6FF")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "#94A3B8")
                            }
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              style={{ background: "#2563EB" }}
                            />
                            {link.name}
                          </motion.div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            ),
          )}
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(37,99,235,0.15)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Copyright */}
          <div
            className="text-xs text-center md:text-left"
            style={{ color: "#94A3B8" }}
          >
            © {currentYear} Zentrox Solutions. All rights reserved.
          </div>

          {/* Built with tag */}
          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: "#94A3B8" }}
          >
            <span>Built with</span>
            <span style={{ color: "#2563EB" }}>♥</span>
            <span>by the Zentrox team</span>
          </div>

          {/* Status indicator */}
          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: "#94A3B8" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#2563EB" }}
            />
            All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
