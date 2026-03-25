import { Link } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardHoverVariants = {
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// ─── SVG Icon Components (no external assets needed) ─────────────────────────

const icons = {
  web: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
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
  ),
  mobile: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  ecommerce: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  ui: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  seo: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  cloud: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  ),
  api: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  analytics: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  brand: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M5 3l14 9-14 9V3z"
      />
    </svg>
  ),
  cms: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  maintenance: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  security: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  performance: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  email: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
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
  ),
  payment: (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
};

// ─── Service Categories ───────────────────────────────────────────────────────

const serviceCategories = [
  {
    name: "Web Development",
    description: "High-performance websites built to convert and scale",
    services: [
      {
        name: "Custom Website Development",
        slug: "custom-website-development",
        description: "Fast, modern websites tailored for your business",
        icon: icons.web,
      },
      {
        name: "Landing Page Development",
        slug: "landing-page-development",
        description: "Conversion-focused pages for ads & campaigns",
        icon: icons.brand,
      },
      {
        name: "Business Website Packages",
        slug: "business-website-packages",
        description: "Complete website solutions for small businesses",
        icon: icons.cms,
      },
    ],
  },
  {
    name: "SEO & Performance",
    description: "Rank higher and load faster",
    services: [
      {
        name: "SEO Optimisation",
        slug: "seo-optimisation",
        description: "On-page SEO to improve Google rankings",
        icon: icons.seo,
      },
      {
        name: "Website Speed Optimisation",
        slug: "performance-optimisation",
        description: "Improve load times & Core Web Vitals",
        icon: icons.performance,
      },
    ],
  },
  {
    name: "Hosting & Maintenance",
    description: "Keep your website fast, secure, and updated",
    services: [
      {
        name: "Cloud Deployment & Hosting",
        slug: "cloud-deployment-hosting",
        description: "Deploy websites on fast, reliable servers",
        icon: icons.cloud,
      },
      {
        name: "Website Maintenance",
        slug: "website-maintenance",
        description: "Ongoing updates, fixes, and support",
        icon: icons.maintenance,
      },
      {
        name: "Monthly Website Care Plan",
        slug: "monthly-website-care",
        description: "Ongoing updates, security, SEO & support",
        icon: icons.maintenance,
      },
    ],
  },
  {
    name: "UI/UX & Design",
    description: "Designs that look great and convert better",
    services: [
      {
        name: "UI/UX Design",
        slug: "ui-ux-design",
        description: "Modern, user-focused interface design",
        icon: icons.ui,
      },
      {
        name: "Website Redesign",
        slug: "website-redesign",
        description: "Upgrade outdated websites into modern experiences",
        icon: icons.brand,
      },
    ],
  },
  {
    name: "E-Commerce",
    description: "Online stores designed to sell and scale",
    services: [
      {
        name: "E-Commerce Website Development",
        slug: "ecommerce-development",
        description: "Shopify & custom stores built for conversions",
        icon: icons.ecommerce,
      },
      {
        name: "Payment Integration",
        slug: "payment-integration",
        description: "Stripe, PayPal & local gateway setup",
        icon: icons.payment,
      },
    ],
  },
];

const totalServices = serviceCategories.reduce(
  (sum, c) => sum + c.services.length,
  0,
);

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
      name: "Services",
      item: "https://zentroxsolutions.com/services",
    },
  ],
};

const servicePageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development Services by Zentrox Solutions",
  description:
    "Full list of web development services offered by Zentrox Solutions",
  url: "https://zentroxsolutions.com/services",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://zentroxsolutions.com",
    name: "Zentrox Solutions",
    url: "https://zentroxsolutions.com",
  },
  itemListElement: serviceCategories.flatMap((cat, catIndex) =>
    cat.services.map((service, svcIndex) => ({
      "@type": "ListItem",
      position: catIndex * 10 + svcIndex + 1,
      name: service.name,
      description: service.description,
      url: `https://zentroxsolutions.com/services/${service.slug}`,
    })),
  ),
};

export default function AllServicesPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden min-h-screen pt-24"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
      }}
    >
      <Helmet>
        <title>
          Web Development Services for Businesses | Custom Websites & SEO |
          Zentrox Solutions
        </title>
        <meta
          name="description"
          content="Explore all Zentrox Solutions web development services — custom websites,
          UI/UX design, e-commerce development, SEO optimisation, cloud deployment,
          and website maintenance for businesses worldwide."
        />
        <meta
          name="keywords"
          content="Zentrox Solutions services, web development, UI UX design, e-commerce, SEO, cloud deployment, web agency"
        />
        <link rel="canonical" href="https://zentroxsolutions.com/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta
          property="og:title"
          content="Web Development Services for Businesses | Zentrox Solutions"
        />
        <meta
          property="og:description"
          content="Full-service web development agency. Custom websites, UI/UX design, SEO, cloud deployment and website maintenance for businesses worldwide."
        />
        <meta
          property="og:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Zentrox Solutions Web Development Services"
        />
        <meta
          property="og:url"
          content="https://zentroxsolutions.com/services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Services | Zentrox Solutions"
        />
        <meta
          name="twitter:description"
          content="Explore our full suite of web development services..."
        />
        <meta
          name="twitter:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicePageSchema)}
        </script>
      </Helmet>

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
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6"
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
              Complete Service Suite
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            <span style={{ color: "#F0F6FF" }}>Web Development Services</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              by Zentrox Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#94A3B8", fontWeight: 300 }}
            variants={itemVariants}
          >
            Zentrox Solutions provides complete web development services
            including custom website development, UI/UX design, SEO
            optimisation, e-commerce solutions, and cloud deployment. Our team
            builds high-performance, scalable digital platforms designed to grow
            your business and maximize conversions.
          </motion.p>
        </motion.div>

        {/* ── Service Categories Grid ── */}
        <section aria-label="All web development service categories">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="relative group flex flex-col"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  className="relative p-6 rounded-2xl flex-1 transition-all duration-300"
                  style={{
                    background: "#10101A",
                    border: "1px solid rgba(16,64,176,0.4)",
                  }}
                  variants={cardHoverVariants}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.55)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(37,99,235,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
                    }}
                  />

                  {/* Category Header */}
                  <div className="text-center mb-6 relative z-10">
                    <h2
                      className="text-xl font-bold mb-1"
                      style={{ color: "#F0F6FF" }}
                    >
                      {category.name}
                    </h2>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#94A3B8", fontWeight: 300 }}
                    >
                      {category.description}
                    </p>
                    {/* Accent underline */}
                    <div
                      className="w-12 h-0.5 mx-auto rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                      }}
                    />
                  </div>

                  {/* Services List */}
                  <div className="space-y-2 relative z-10">
                    {category.services.map((service) => (
                      <Link
                        to={`/services/${service.slug}`}
                        aria-label={`Learn more about ${service.name}`}
                        onClick={handleNavigate}
                        key={service.name}
                        className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200"
                        style={{ color: "inherit" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(37,99,235,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {/* Icon box */}
                        <div
                          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{
                            background: "rgba(37,99,235,0.12)",
                            border: "1px solid rgba(37,99,235,0.25)",
                            color: "#2563EB",
                          }}
                        >
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-sm font-semibold truncate"
                            style={{ color: "#F0F6FF" }}
                          >
                            {service.name}
                          </h3>
                          <p
                            className="text-xs truncate"
                            style={{ color: "#94A3B8" }}
                          >
                            {service.description}
                          </p>
                        </div>
                        {/* Arrow hint */}
                        <svg
                          aria-hidden="true"
                          className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                          style={{ color: "#60A0FF" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
            <motion.div
              className="hidden md:grid gap-2 mt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {[
                { number: `${totalServices}+`, label: "Services Offered" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "#10101A",
                    border: "1px solid rgba(16,64,176,0.4)",
                  }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-0.5"
                    style={{
                      background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Mobile stats (shown only on small screens) */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-12 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            { number: `${totalServices}+`, label: "Services Offered" },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl"
              style={{
                background: "#10101A",
                border: "1px solid rgba(16,64,176,0.4)",
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div
                className="text-2xl font-bold mb-0.5"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.number}
              </div>
              <div className="text-xs" style={{ color: "#94A3B8" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="p-8 rounded-2xl max-w-2xl mx-auto"
            style={{
              background: "#10101A",
              border: "1px solid rgba(37,99,235,0.3)",
              boxShadow: "0 0 60px rgba(37,99,235,0.07)",
            }}
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: "#F0F6FF" }}>
              Ready to Start Your Project?
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed max-w-md mx-auto"
              style={{ color: "#94A3B8", fontWeight: 300 }}
            >
              Tell us what you need and we'll put together a plan, timeline, and
              proposal — no obligations, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/start-project"
                aria-label="Start your project with Zentrox Solutions"
                onClick={handleNavigate}
                className="px-6 py-3 rounded-xl font-semibold text-white text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
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
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                aria-label="View Zentrox Solutions portfolio"
                onClick={handleNavigate}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
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
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </main>
  );
}
