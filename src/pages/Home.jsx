import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";

// ─── SEO Constants ────────────────────────────────────────────────────────────
const SEO = {
  title:
    "Web Development Agency for High-Performance Websites | Zentrox Solutions",
  description:
    "Zentrox Solutions is a full-service web development agency building high-performance websites, custom web apps, and scalable digital platforms. 99% client satisfaction. Fast delivery. Start your project today.",
  keywords:
    "web development agency, custom website design, web app development, full-service web agency, high-performance websites, scalable digital platforms, React development, frontend development, Zentrox Solutions",
  canonical: "https://zentroxsolutions.com/",
  ogImage: "https://zentroxsolutions.com/images/zs.png",
  twitterHandle: "@zentroxsolution",
};

const serviceCategories = [
  {
    name: "Web Development",
    description: "High-performance websites built to convert and scale",
    services: [
      {
        name: "Custom Website Development",
        slug: "custom-website-development",
        description: "Fast, modern websites tailored for your business",
      },
      {
        name: "Landing Page Development",
        slug: "landing-page-development",
        description: "Conversion-focused pages for ads & campaigns",
      },
      {
        name: "Business Website Packages",
        slug: "business-website-packages",
        description: "Complete website solutions for small businesses",
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
      },
      {
        name: "Website Speed Optimisation",
        slug: "performance-optimisation",
        description: "Improve load times & Core Web Vitals",
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
      },
      {
        name: "Website Maintenance",
        slug: "website-maintenance",
        description: "Ongoing updates, fixes, and support",
      },
      {
        name: "Monthly Website Care Plan",
        slug: "monthly-website-care",
        description: "Ongoing updates, security, SEO & support",
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
      },
      {
        name: "Website Redesign",
        slug: "website-redesign",
        description: "Upgrade outdated websites into modern experiences",
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
      },
      {
        name: "Payment Integration",
        slug: "payment-integration",
        description: "Stripe, PayPal & local gateway setup",
      },
    ],
  },
];

// JSON-LD structured data — Organization + WebSite
const structuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zentrox Solutions",
  url: "https://zentroxsolutions.com",
  logo: "https://zentroxsolutions.com/images/zs.png",
  description: SEO.description,
  sameAs: [
    // Add social profile URLs here, e.g.:
    // "https://www.linkedin.com/company/zentrox-solutions",
    "https://facebook.com/zentroxsolutions",
    "https://x.com/zentroxsolution",
    "https://instagram.com/zentrox_solutions",
    "https://github.com/zentrox-solutions",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    url: "https://zentroxsolutions.com/#contact",
  },
};

const structuredDataWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zentrox Solutions",
  url: "https://zentroxsolutions.com",
};

const structuredDataService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zentrox Solutions",
  "@id": "https://zentroxsolutions.com",
  image: "https://zentroxsolutions.com/images/zs.png",
  email: "zentroxsolutions.official@gmail.com",
  // telephone: "+923000000000", // replace with real number
  url: "https://zentroxsolutions.com",
  description:
    "Full-service web development agency crafting high-performance websites, custom web apps, and scalable digital platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  areaServed: ["PK", "UAE", "IND", "US", "UK", "CA", "AU", "Worldwide"],
  contactPoint: {
    "@type": "ContactPoint",
    // telephone: "+923000000000",
    contactType: "Customer Support",
    availableLanguage: "English",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: serviceCategories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      description: category.description,

      itemListElement: category.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `https://zentroxsolutions.com/services/${service.slug}`,
        },
      })),
    })),
  },
};

const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Zentrox Solutions do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zentrox Solutions is a full-service web development agency. We design, build, and launch high-performance websites, custom web applications, and scalable digital platforms tailored to your business goals.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Zentrox Solutions offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom website development, mobile-first design, e-commerce solutions, landing page design, SEO optimisation, cloud deployment, performance optimisation, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on project scope. A standard website typically takes 2–4 weeks, while a complex web application can take 6–12 weeks. We'll give you a clear, detailed timeline during the discovery phase before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project costs vary depending on scope, complexity, and features required. We offer transparent, fixed-price quotes after a free discovery call — no hidden fees, no surprises. Get in touch and we'll put together a proposal for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing maintenance packages that include updates, performance monitoring, security patches, and feature additions. We don't disappear after launch — we're here for the long term.",
      },
    },
    {
      "@type": "Question",
      name: "Is my website going to be fast and SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — performance and SEO are built in, not added on. Every site we build is optimised for Core Web Vitals, fast load times, clean semantic HTML, structured data, and on-page SEO best practices from day one.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://zentroxsolutions.com",
    },
  ],
};

const Home = () => {
  return (
    <main id="main-content">
      {/* ── SEO HEAD ── */}
      <Helmet>
        {/* ── Primary Meta Tags ── */}
        <html lang="en" />
        <title>{SEO.title}</title>
        <meta name="title" content={SEO.title} />
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zentrox Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={SEO.canonical} />

        {/* ── Open Graph / Facebook ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Zentrox Solutions — Web Development Agency"
        />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO.twitterHandle} />
        <meta name="twitter:creator" content={SEO.twitterHandle} />
        <meta name="twitter:url" content={SEO.canonical} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.ogImage} />
        <meta
          name="twitter:image:alt"
          content="Zentrox Solutions — Web Development Agency"
        />

        {/* ── Theme & App Meta ── */}
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="Zentrox Solutions" />

        {/* ── Structured Data — Organization ── */}
        <script type="application/ld+json">
          {JSON.stringify(structuredDataOrganization)}
        </script>

        {/* ── Structured Data — WebSite ── */}
        <script type="application/ld+json">
          {JSON.stringify(structuredDataWebSite)}
        </script>

        {/* ── Structured Data — Service ── */}
        <script type="application/ld+json">
          {JSON.stringify(structuredDataService)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(structuredDataFAQ)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* PAGE SECTIONS */}
      <Hero />
      <Features />
      <WhyChooseUs />
      <Contact />
    </main>
  );
};

export default Home;
