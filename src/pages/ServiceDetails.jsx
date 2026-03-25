import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
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

const handleNavigate = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Feature Data ─────────────────────────────────────────────────────────────

const featureDetails = {
  "custom-website-development": {
    title: "Custom Website Development",
    intro:
      "Fast, modern, and fully custom websites designed to grow your business online.",
    longDescription:
      "Our custom website development service focuses on building high-performance, scalable, and visually engaging websites tailored to your business goals. Whether you're a startup or an established company, we create websites optimized for speed, SEO, and conversions. Every website is built from scratch — no templates — ensuring a unique digital presence that stands out.",
    keyFeatures: [
      {
        title: "Fully Custom Design",
        desc: "Unique layouts designed specifically for your brand.",
      },
      {
        title: "SEO-Optimised Structure",
        desc: "Built with best practices to rank on Google.",
      },
      {
        title: "Fast Loading Speed",
        desc: "Optimised for performance and Core Web Vitals.",
      },
      {
        title: "Responsive Design",
        desc: "Works perfectly on mobile, tablet, and desktop.",
      },
      {
        title: "Clean Code Architecture",
        desc: "Scalable and maintainable development approach.",
      },
      {
        title: "Conversion-Focused",
        desc: "Designed to turn visitors into customers.",
      },
    ],
    whyChoose:
      "We build websites that don’t just look good — they perform. Our focus on speed, SEO, and conversion ensures your website becomes a powerful business asset.",
  },

  "landing-page-development": {
    title: "Landing Page Development",
    intro:
      "High-converting landing pages designed to maximize leads and sales.",
    longDescription:
      "Our landing page development service is focused on creating conversion-driven pages for marketing campaigns, ads, and product launches. We combine persuasive design, fast loading speed, and clear messaging to ensure maximum ROI from your traffic.",
    keyFeatures: [
      {
        title: "Conversion-Focused Layout",
        desc: "Designed to drive user action.",
      },
      {
        title: "Speed Optimisation",
        desc: "Loads instantly for better conversions.",
      },
      { title: "Mobile-First Design", desc: "Optimised for mobile users." },
      {
        title: "Clear Call-to-Actions",
        desc: "Strategically placed CTA buttons.",
      },
      {
        title: "A/B Testing Ready",
        desc: "Easily test variations for better results.",
      },
    ],
    whyChoose:
      "Our landing pages are built with one goal — conversions. We help you turn traffic into real business results.",
  },

  "business-website-packages": {
    title: "Business Website Solutions",
    intro:
      "Complete website solutions for businesses looking to establish a strong online presence.",
    longDescription:
      "We provide complete business website solutions designed for small and medium businesses. From design to deployment, everything is handled to give you a professional online presence that builds trust and attracts customers.",
    keyFeatures: [
      {
        title: "All-in-One Setup",
        desc: "Design, development, and deployment included.",
      },
      {
        title: "Professional Design",
        desc: "Modern and clean UI tailored for your industry.",
      },
      {
        title: "SEO Basics Included",
        desc: "Optimised structure for search engines.",
      },
      { title: "Mobile Responsive", desc: "Looks perfect on all devices." },
      { title: "Fast Delivery", desc: "Get your website live quickly." },
    ],
    whyChoose:
      "Perfect for businesses that want a professional website without complexity — we handle everything from start to finish.",
  },

  "ecommerce-development": {
    title: "E-Commerce Website Development",
    intro: "Powerful online stores built to sell and scale your business.",
    longDescription:
      "We develop high-performing e-commerce websites that are designed to convert visitors into customers. From product pages to checkout flow, everything is optimized for sales, speed, and user experience.",
    keyFeatures: [
      {
        title: "Custom Store Design",
        desc: "Unique store tailored to your brand.",
      },
      { title: "Optimised Checkout Flow", desc: "Reduce cart abandonment." },
      {
        title: "Mobile Shopping Experience",
        desc: "Smooth experience on all devices.",
      },
      {
        title: "SEO-Friendly Structure",
        desc: "Products optimized for search engines.",
      },
      {
        title: "Scalable Architecture",
        desc: "Grow your store without limits.",
      },
    ],
    whyChoose:
      "We build e-commerce stores that are not just visually appealing but engineered to maximize sales and growth.",
  },

  "payment-integration": {
    title: "Payment Integration",
    intro: "Secure and seamless payment gateway integration for your website.",
    longDescription:
      "We integrate trusted payment gateways like Stripe, PayPal, and local solutions to ensure smooth and secure transactions. Our focus is on reliability, security, and user-friendly checkout experiences.",
    keyFeatures: [
      {
        title: "Multiple Payment Options",
        desc: "Support for global and local gateways.",
      },
      {
        title: "Secure Transactions",
        desc: "Industry-standard security practices.",
      },
      {
        title: "Smooth Checkout Experience",
        desc: "Minimise friction for users.",
      },
      { title: "Mobile Optimised", desc: "Easy payments on all devices." },
    ],
    whyChoose:
      "We ensure your customers can pay easily and securely, improving trust and increasing conversions.",
  },

  "seo-optimisation": {
    title: "SEO Optimisation",
    intro: "Improve your website’s visibility and rank higher on Google.",
    longDescription:
      "Our SEO optimisation service focuses on improving your website’s search engine rankings through on-page optimisation, technical SEO, and content structure improvements. We help your business get found by the right audience.",
    keyFeatures: [
      {
        title: "On-Page SEO",
        desc: "Optimised titles, meta tags, and structure.",
      },
      { title: "Technical SEO", desc: "Fix performance and indexing issues." },
      { title: "Keyword Optimisation", desc: "Target the right search terms." },
      {
        title: "SEO-Friendly Code",
        desc: "Clean structure for better crawling.",
      },
    ],
    whyChoose:
      "We focus on practical SEO strategies that bring real traffic and business growth.",
  },

  "performance-optimisation": {
    title: "Website Speed Optimisation",
    intro: "Make your website faster, smoother, and more efficient.",
    longDescription:
      "We improve your website’s performance by optimising code, images, and loading strategies. Faster websites lead to better user experience, higher rankings, and increased conversions.",
    keyFeatures: [
      {
        title: "Core Web Vitals Improvement",
        desc: "Meet Google performance standards.",
      },
      { title: "Image Optimisation", desc: "Reduce load times significantly." },
      { title: "Code Optimisation", desc: "Clean and efficient scripts." },
      { title: "Lazy Loading", desc: "Load content only when needed." },
    ],
    whyChoose:
      "Speed matters — we make sure your website performs at its best.",
  },

  "ui-ux-design": {
    title: "UI/UX & Conversion Design",
    intro: "Designs that are not just beautiful but built to convert.",
    longDescription:
      "Our UI/UX design service focuses on creating user-friendly, visually appealing interfaces that enhance user experience and drive conversions. We design with purpose — every element is intentional.",
    keyFeatures: [
      { title: "User-Centered Design", desc: "Focused on user experience." },
      {
        title: "Modern UI Aesthetics",
        desc: "Clean and visually appealing layouts.",
      },
      {
        title: "Conversion-Focused Design",
        desc: "Designed to drive actions.",
      },
      { title: "Wireframes & Prototypes", desc: "Plan before building." },
    ],
    whyChoose:
      "We design experiences that not only look great but also deliver real results.",
  },

  "website-redesign": {
    title: "Website Redesign",
    intro:
      "Transform outdated websites into modern, high-performing platforms.",
    longDescription:
      "We redesign existing websites to improve design, performance, and user experience. If your current website feels outdated or slow, we can upgrade it into a modern digital asset.",
    keyFeatures: [
      { title: "Modern UI Upgrade", desc: "Fresh and clean design." },
      { title: "Performance Improvement", desc: "Faster loading speed." },
      { title: "SEO Enhancement", desc: "Better structure for ranking." },
      { title: "Mobile Optimisation", desc: "Fully responsive redesign." },
    ],
    whyChoose:
      "Give your website a second life with a redesign that improves both looks and performance.",
  },

  "cloud-deployment-hosting": {
    title: "Cloud Deployment & Hosting",
    intro: "Fast, secure, and reliable hosting solutions for your website.",
    longDescription:
      "We deploy your website on modern cloud infrastructure ensuring high uptime, fast loading speeds, and scalability. From setup to optimisation, everything is handled professionally.",
    keyFeatures: [
      { title: "Cloud Hosting Setup", desc: "Deploy on reliable platforms." },
      { title: "High Performance", desc: "Fast global loading speeds." },
      {
        title: "Secure Infrastructure",
        desc: "Protected and monitored servers.",
      },
      { title: "Scalable Solutions", desc: "Grow without limitations." },
    ],
    whyChoose:
      "We ensure your website runs smoothly, securely, and without downtime.",
  },

  "website-maintenance": {
    title: "Website Care & Support",
    intro: "Keep your website secure, updated, and running smoothly.",
    longDescription:
      "Our website maintenance service ensures your website stays updated, secure, and fully functional. We handle updates, bug fixes, and performance monitoring so you can focus on your business.",
    keyFeatures: [
      { title: "Regular Updates", desc: "Keep your website up-to-date." },
      { title: "Bug Fixes", desc: "Quick resolution of issues." },
      { title: "Security Monitoring", desc: "Protect against threats." },
      { title: "Performance Checks", desc: "Ensure optimal speed." },
    ],
    whyChoose:
      "We take care of your website so you don’t have to worry about technical issues.",
  },

  "monthly-website-care": {
    title: "Monthly Website Care Plan",
    intro: "Ongoing support, updates, and optimisation for long-term success.",
    longDescription:
      "Our monthly care plan provides continuous support, updates, SEO improvements, and performance optimisation to keep your website growing over time.",
    keyFeatures: [
      { title: "Ongoing Support", desc: "Dedicated assistance when needed." },
      { title: "SEO Improvements", desc: "Continuous optimisation." },
      { title: "Performance Monitoring", desc: "Track and improve speed." },
      { title: "Regular Backups", desc: "Secure your data." },
    ],
    whyChoose:
      "Perfect for businesses that want consistent growth and peace of mind.",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function FeatureDetailPage() {
  const { slug } = useParams();
  const feature = featureDetails[slug];

  // ── 404 state ──
  if (!feature) {
    return (
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{
          background:
            "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(37,99,235,0.12)",
            border: "1px solid rgba(37,99,235,0.3)",
          }}
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8"
            style={{ color: "#2563EB" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#F0F6FF" }}>
          Feature Not Found
        </h1>
        <p className="text-sm mb-8" style={{ color: "#94A3B8" }}>
          The feature you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/services"
          onClick={handleNavigate}
          className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300"
          style={{
            background: "#2563EB",
            boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3B7BF5")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
        >
          View All Services
        </Link>
      </div>
    );
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: feature.title,
        item: `https://zentroxsolutions.com/services/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: feature.title,
    description: feature.longDescription,
    url: `https://zentroxsolutions.com/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Zentrox Solutions",
      url: "https://zentroxsolutions.com",
    },
    areaServed: ["US", "UK", "CA", "AU", "PK"],
  };

  return (
    <div
      className="relative overflow-hidden min-h-screen pt-24"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
      }}
    >
      <Helmet>
        <title>{feature.title} | Zentrox Solutions</title>
        <meta
          name="description"
          content={`${feature.title} by Zentrox Solutions. ${feature.intro} We build high-performance, SEO-optimised solutions for businesses worldwide.`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://zentroxsolutions.com/services/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta
          property="og:title"
          content={`${feature.title} | Zentrox Solutions`}
        />
        <meta property="og:description" content={`${feature.intro} Expert ${feature.title} by Zentrox Solutions — built for performance, SEO, and business growth.`} />
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
          content={`https://zentroxsolutions.com/services/${slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${feature.title} | Zentrox Solutions`}
        />
        <meta name="twitter:description" content={feature.intro} />
        <meta
          name="twitter:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta
          name="twitter:image:alt"
          content={`${feature.title} — Zentrox Solutions`}
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
        }}
      />
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
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* ── Breadcrumb ── */}
        <motion.nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs mb-10"
          style={{ color: "#94A3B8" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            onClick={handleNavigate}
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F6FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            Home
          </Link>
          <svg
            aria-hidden="true"
            className="w-3 h-3"
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
          <Link
            to="/services"
            onClick={handleNavigate}
            className="transition-colors duration-200"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0F6FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            Services
          </Link>
          <svg
            aria-hidden="true"
            className="w-3 h-3"
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
          <span style={{ color: "#F0F6FF" }}>{feature.title}</span>
        </motion.nav>

        {/* ── Header ── */}
        <motion.div
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6"
            style={{
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.35)",
            }}
            variants={itemVariants}
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#2563EB" }}
            />
            <span className="text-sm font-medium" style={{ color: "#93C5FD" }}>
              Service Detail
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "#F0F6FF", fontFamily: "'Outfit', sans-serif" }}
            variants={itemVariants}
          >
            {feature.title}
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="text-lg leading-relaxed mb-6 max-w-2xl"
            style={{ color: "#CBD5E1", fontWeight: 300 }}
            variants={itemVariants}
          >
            {feature.intro}
          </motion.p>

          {/* Accent divider */}
          <motion.div
            className="h-px w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #2563EB, #60A0FF)" }}
            variants={itemVariants}
          />
        </motion.div>

        {/* ── Long Description ── */}
        <motion.div
          className="p-6 sm:p-8 rounded-2xl mb-12"
          style={{
            background: "#10101A",
            border: "1px solid rgba(16,64,176,0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: "#94A3B8", fontWeight: 300, lineHeight: "1.85" }}
          >
            {feature.longDescription}
          </p>
        </motion.div>

        {/* ── Key Features ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="h-px w-10" style={{ background: "#2563EB" }} />
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#F0F6FF", fontFamily: "'Outfit', sans-serif" }}
            >
              Key Features of {feature.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {feature.keyFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative p-5 sm:p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "#10101A",
                  border: "1px solid rgba(16,64,176,0.4)",
                }}
                variants={itemVariants}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.55)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 36px rgba(37,99,235,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,64,176,0.4)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)",
                  }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  {/* Number badge */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{
                      background: "rgba(37,99,235,0.15)",
                      border: "1px solid rgba(37,99,235,0.3)",
                      color: "#2563EB",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-sm sm:text-base font-semibold mb-1.5"
                      style={{ color: "#F0F6FF" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "#94A3B8", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Why Choose This ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-14"
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="h-px w-10" style={{ background: "#2563EB" }} />
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#F0F6FF", fontFamily: "'Outfit', sans-serif" }}
            >
              Why Choose Our {feature.title} Services?
            </h2>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: "#10101A",
              border: "1px solid rgba(37,99,235,0.3)",
              boxShadow: "0 0 60px rgba(37,99,235,0.06)",
            }}
            variants={itemVariants}
          >
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#94A3B8", fontWeight: 300, lineHeight: "1.85" }}
            >
              {feature.whyChoose}
            </p>
          </motion.div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="p-8 sm:p-10 rounded-2xl"
            style={{
              background: "#10101A",
              border: "1px solid rgba(37,99,235,0.3)",
              boxShadow: "0 0 60px rgba(37,99,235,0.07)",
            }}
            variants={itemVariants}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{
                background: "#2563EB",
                boxShadow: "0 6px 24px rgba(37,99,235,0.4)",
              }}
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-white"
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
            </div>

            <h3
              className="text-xl sm:text-2xl font-bold mb-3"
              style={{ color: "#F0F6FF" }}
            >
              Ready to Get Started?
            </h3>
            <p
              className="text-sm leading-relaxed max-w-md mx-auto mb-8"
              style={{ color: "#94A3B8", fontWeight: 300 }}
            >
              Let's discuss how{" "}
              <strong style={{ color: "#CBD5E1" }}>{feature.title}</strong> can
              work for your project. Reach out and we'll put together a proposal
              — no obligations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/start-project"
                onClick={handleNavigate}
                aria-label={`Start a project using ${feature.title} with Zentrox Solutions`}
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
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
                to="/services"
                onClick={handleNavigate}
                aria-label="View all Zentrox Solutions services"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
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
                All Services
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
    </div>
  );
}

export default FeatureDetailPage;
