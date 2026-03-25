import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  CloudArrowUpIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const handleNavigate = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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
    transition: { staggerChildren: 0.13, duration: 0.7 },
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

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

// const services = [
//   {
//     name: "Custom Web Development",
//     slug: "custom-web-development",
//     description:
//       "We build tailor-made websites and web applications from the ground up — crafted to your exact requirements with clean code, scalable architecture, and pixel-perfect design.",
//     icon: CodeBracketIcon,
//   },
//   {
//     name: "Mobile-First Design",
//     slug: "mobile-first-design",
//     description:
//       "Every project we deliver is fully responsive and optimized for mobile. Your users get a flawless experience across all devices — from smartphones to large desktop screens.",
//     icon: DevicePhoneMobileIcon,
//   },
//   {
//     name: "E-Commerce Solutions",
//     slug: "ecommerce-solutions",
//     description:
//       "Launch a powerful online store with secure payments, inventory management, and a smooth checkout flow. We build e-commerce platforms that are fast, reliable, and conversion-focused.",
//     icon: ShoppingCartIcon,
//   },
//   {
//     name: "SEO & Performance",
//     slug: "seo-performance",
//     description:
//       "We engineer sites for speed and visibility. From Core Web Vitals to on-page SEO, your website will rank higher, load faster, and outperform the competition.",
//     icon: MagnifyingGlassIcon,
//   },
//   {
//     name: "Cloud Deployment & Hosting",
//     slug: "cloud-deployment-hosting",
//     description:
//       "We handle end-to-end deployment on AWS, Vercel, or your preferred cloud. Enjoy 99.9% uptime, automated scaling, SSL, and zero-downtime releases as standard.",
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: "UI/UX Design",
//     slug: "ui-ux-design",
//     description:
//       "Our designers craft beautiful, intuitive interfaces that delight users and drive results. From wireframes to high-fidelity prototypes, every detail is purposefully designed.",
//     icon: PaintBrushIcon,
//   },
// ];

const services = [
  {
    name: "Custom Web Development",
    slug: "custom-website-development",
    description: (
      <>
        We build custom business websites and scalable web applications tailored
        to your needs — optimized for performance, SEO, and conversions. From
        startup websites to advanced platforms, our solutions are designed to
        grow your business. Explore our{" "}
        <Link
          to="/services/seo-optimisation"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          SEO & Performance services
        </Link>{" "}
        to maximize your visibility.
      </>
    ),
    icon: CodeBracketIcon,
  },
  {
    name: "Website Maintenance",
    slug: "website-maintenance",
    description: (
      <>
        Keep your website secure, fast, and always up to date with our ongoing
        maintenance services. We handle updates, bug fixes, backups, and
        performance monitoring so you can focus on your business. Pair this with
        our{" "}
        <Link
          to="/services/seo-optimisation"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          SEO Optimisation
        </Link>{" "}
        to ensure your website stays optimized and competitive in search
        results.
      </>
    ),
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "E-Commerce Solutions",
    slug: "ecommerce-development",
    description: (
      <>
        We develop high-converting e-commerce websites with secure payment
        systems, optimized checkout flows, and scalable architecture. Whether
        you're launching or scaling, our solutions are built for performance.
        Pair it with our{" "}
        <Link
          to="/services/seo-optimisation"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          SEO & Performance services
        </Link>{" "}
        to drive more traffic and sales.
      </>
    ),
    icon: ShoppingCartIcon,
  },
  {
    name: "SEO & Performance",
    slug: "seo-optimisation",
    description: (
      <>
        Our SEO and performance optimization services ensure your website ranks
        higher on search engines and loads lightning fast. We focus on Core Web
        Vitals, on-page SEO, and technical improvements to increase traffic and
        conversions. Works perfectly with our{" "}
        <Link
          to="/services/custom-website-development"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          Custom Web Development solutions
        </Link>
        .
      </>
    ),
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Cloud Deployment & Hosting",
    slug: "cloud-deployment-hosting",
    description: (
      <>
        We provide reliable cloud deployment and hosting solutions using
        platforms like AWS and Vercel. Enjoy fast loading speeds, high uptime,
        and secure infrastructure. Integrate this with our{" "}
        <Link
          to="/services/custom-website-development"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          Custom Web Development services
        </Link>{" "}
        for a complete end-to-end solution.
      </>
    ),
    icon: CloudArrowUpIcon,
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: (
      <>
        Our UI/UX design services focus on creating intuitive, visually
        appealing interfaces that improve user engagement and conversions. From
        wireframes to final designs, every detail is crafted with purpose.
        Combine this with our{" "}
        <Link
          to="/services/custom-website-development"
          className="text-blue-400 underline"
          onClick={handleNavigate}
        >
          Custom Web Development solutions
        </Link>{" "}
        for the best results.
      </>
    ),
    icon: PaintBrushIcon,
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="Web Development Services"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
      }}
    >
      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,64,176,0.10) 0%, transparent 70%)",
          filter: "blur(20px)",
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

      {/* Top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
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
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "#F0F6FF" }}>
              Web Development Services for
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Businesses
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-lg leading-8 mx-auto max-w-3xl"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            variants={itemVariants}
          >
            We provide custom web development services including business
            website design, e-commerce development, SEO optimization, and
            scalable web applications for growing businesses worldwide.
          </motion.p>
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.name}
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
                  {/* Subtle card top glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
                    }}
                  />

                  <dl>
                    {/* Icon + Title */}
                    <dt className="flex items-start gap-4 mb-5 relative z-10">
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={handleNavigate}
                        aria-label={`Learn more about ${service.name}`}
                        className="flex items-center gap-4 mb-5 relative z-10"
                      >
                        <div
                          className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                          style={{
                            background: "rgba(37,99,235,0.15)",
                            border: "1px solid rgba(37,99,235,0.3)",
                          }}
                        >
                          <service.icon
                            className="w-6 h-6"
                            style={{ color: "#2563EB" }}
                          />
                        </div>
                        <h3
                          className="text-lg font-semibold leading-tight"
                          style={{ color: "#F0F6FF" }}
                        >
                          {service.name}
                        </h3>
                      </Link>
                    </dt>

                    {/* Description */}
                    <dd
                      className="text-sm leading-relaxed relative z-10"
                      style={{ color: "#94A3B8", fontWeight: 300 }}
                    >
                      {service.description}
                    </dd>

                    <Link
                      to={`/services/${service.slug}`}
                      onClick={handleNavigate}
                      aria-label={`Learn more about ${service.name}`}
                    >
                      {/* Learn more link */}
                      <div
                        className="mt-6 flex items-center text-xs font-medium relative z-10"
                        style={{ color: "#60A0FF" }}
                      >
                        Learn more about {service.name}
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </Link>
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
              to="/services"
              onClick={handleNavigate}
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
              View All Web Development Services
            </Link>
          </motion.div>

          <motion.p
            className="mt-5 text-sm"
            style={{ color: "#94A3B8" }}
            variants={itemVariants}
          >
            Trusted by growing businesses worldwide — let's build something that
            drives real results.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />

      <p className="sr-only">
        Our services include custom website development, responsive web design,
        ecommerce solutions, SEO optimization, and scalable web applications for
        businesses.
      </p>
    </section>
  );
}
