import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
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
// --white:       #F0F6FF   Primary Text
// ─────────────────────────────────────────────────────────────────────────────

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/#contact" },
];

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ── Logo wordmark (no image asset needed) ────────────────────────────────────
function ZentroxLogo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Zentrox Solutions logo" className="w-16" />
      <span
        className="text-base font-bold tracking-wide hidden sm:block"
        style={{ color: "#F0F6FF", fontFamily: "'Outfit', sans-serif" }}
      >
        ZENTROX <span style={{ color: "#2563EB" }}>SOLUTIONS</span>
      </span>
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      return location.pathname === "/" && location.hash === `#${hash}`;
    }
    return location.pathname === href && !location.hash;
  };

  return (
    <motion.header
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-50 w-full"
      style={{
        background: "rgba(0,0,0,0.85)",
        borderBottom: "1px solid rgba(37,99,235,0.18)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between px-5 py-3.5 max-w-7xl mx-auto">
        {/* ── Logo ── */}
        <motion.div className="flex flex-1">
          <Link
            to="/"
            onClick={handleNavigate}
            aria-label="Zentrox Solutions — go to homepage"
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <ZentroxLogo />
            </motion.div>
          </Link>
        </motion.div>

        {/* ── Desktop Nav ── */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex xl:items-center xl:gap-1"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href);
            const linkClass = `relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200`;

            const inner = (
              <>
                <span
                  style={{ color: active ? "#F0F6FF" : "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0F6FF")
                  }
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  {item.name}
                </span>
                {active && (
                  <motion.div
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#2563EB" }}
                    layoutId="desktop-activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            );

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.href.includes("#") ? (
                  <HashLink
                    to={item.href}
                    smooth
                    className={linkClass}
                    style={{
                      background: active
                        ? "rgba(37,99,235,0.15)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(37,99,235,0.3)"
                        : "1px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "rgba(37,99,235,0.08)";
                        e.currentTarget.style.border =
                          "1px solid rgba(37,99,235,0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.border = "1px solid transparent";
                      }
                    }}
                    onClick={undefined}
                  >
                    {inner}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={handleNavigate}
                    className={linkClass}
                    style={{
                      background: active
                        ? "rgba(37,99,235,0.15)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(37,99,235,0.3)"
                        : "1px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background =
                          "rgba(37,99,235,0.08)";
                        e.currentTarget.style.border =
                          "1px solid rgba(37,99,235,0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.border = "1px solid transparent";
                      }
                    }}
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-end xl:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
          >
            <Link to="/start-project" onClick={handleNavigate}>
              <motion.div
                className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.35)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#3B7BF5",
                  boxShadow: "0 8px 28px rgba(37,99,235,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Start a Project
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* ── Tablet Nav (md → xl) ── */}
        <div
          aria-label="Tablet navigation"
          role="navigation"
          className="hidden md:flex xl:hidden items-center gap-1"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href);
            const inner = (
              <>
                <span
                  style={{ color: active ? "#F0F6FF" : "#94A3B8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0F6FF")
                  }
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  {item.name}
                </span>
                {active && (
                  <motion.div
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#2563EB" }}
                    layoutId="tablet-activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            );

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {item.href.includes("#") ? (
                  <HashLink
                    to={item.href}
                    smooth
                    className="relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: active ? "#F0F6FF" : "#94A3B8",
                      background: active
                        ? "rgba(37,99,235,0.15)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(37,99,235,0.3)"
                        : "1px solid transparent",
                    }}
                    onClick={undefined}
                  >
                    {inner}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={handleNavigate}
                    className="relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: active ? "#F0F6FF" : "#94A3B8",
                      background: active
                        ? "rgba(37,99,235,0.15)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(37,99,235,0.3)"
                        : "1px solid transparent",
                    }}
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
          <Link to="/start-project" onClick={handleNavigate}>
            <div
              className="ml-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200"
              style={{ background: "#2563EB" }}
            >
              Start a Project
            </div>
          </Link>
        </div>

        {/* ── Mobile menu button ── */}
        <motion.div
          className="flex md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.25)",
              color: "#F0F6FF",
            }}
            aria-label="Open menu"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </motion.div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden z-50"
            static
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <DialogPanel
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm p-5"
              style={{
                background: "#0A0A0F",
                borderLeft: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              <motion.div
                initial={{ x: 280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 280, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="h-full flex flex-col"
              >
                {/* Mobile header */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    to="/"
                    onClick={() => {
                      handleNavigate();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <ZentroxLogo />
                  </Link>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-xl transition-all duration-200"
                    style={{
                      background: "rgba(37,99,235,0.10)",
                      border: "1px solid rgba(37,99,235,0.2)",
                      color: "#94A3B8",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile links */}
                <nav
                  aria-label="Mobile navigation"
                  className="space-y-2 flex-1 overflow-y-auto"
                >
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);
                    const baseClass =
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200";

                    const inner = (
                      <>
                        <span>{item.name}</span>
                        {active && (
                          <motion.div
                            className="w-2 h-2 rounded-full"
                            style={{ background: "#F0F6FF" }}
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </>
                    );

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        {item.href.includes("#") ? (
                          <HashLink
                            to={item.href}
                            smooth
                            className={baseClass}
                            style={{
                              background: active
                                ? "#2563EB"
                                : "rgba(37,99,235,0.06)",
                              border: `1px solid ${active ? "#2563EB" : "rgba(37,99,235,0.15)"}`,
                              color: active ? "#F0F6FF" : "#94A3B8",
                              boxShadow: active
                                ? "0 4px 16px rgba(37,99,235,0.3)"
                                : "none",
                            }}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                          >
                            {inner}
                          </HashLink>
                        ) : (
                          <Link
                            to={item.href}
                            aria-current={active ? "page" : undefined}
                            className={baseClass}
                            style={{
                              background: active
                                ? "#2563EB"
                                : "rgba(37,99,235,0.06)",
                              border: `1px solid ${active ? "#2563EB" : "rgba(37,99,235,0.15)"}`,
                              color: active ? "#F0F6FF" : "#94A3B8",
                              boxShadow: active
                                ? "0 4px 16px rgba(37,99,235,0.3)"
                                : "none",
                            }}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                          >
                            {inner}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div
                  className="pt-5 mt-5"
                  style={{ borderTop: "1px solid rgba(37,99,235,0.15)" }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to="/start-project"
                      onClick={() => {
                        handleNavigate();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <motion.div
                        className="w-full text-center font-semibold py-3.5 px-6 rounded-xl text-white text-sm transition-all duration-200"
                        style={{
                          background: "#2563EB",
                          boxShadow: "0 6px 22px rgba(37,99,235,0.35)",
                        }}
                        whileHover={{ scale: 1.02, backgroundColor: "#3B7BF5" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Start a Project
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
