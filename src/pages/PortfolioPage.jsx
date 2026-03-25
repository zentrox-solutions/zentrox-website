// import { useState, useMemo } from "react";
// import { Link } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";

// // ─── Zentrox Palette v3 ───────────────────────────────────────────────────────
// // --black:       #000000   Primary BG
// // --black-2:     #0A0A0F   Section BG
// // --black-3:     #10101A   Cards & Panels
// // --blue-dark:   #1040B0   Borders & BG tints
// // --blue:        #2563EB   Primary / CTA  ★
// // --blue-mid:    #3B7BF5   Hover States
// // --blue-light:  #60A0FF   Accents
// // --blue-glow:   #93C5FD   Links & Subtle Accents
// // --steel:       #94A3B8   Muted / Captions
// // --light:       #CBD5E1   Secondary Text
// // --white:       #F0F6FF   Primary Text
// // ─────────────────────────────────────────────────────────────────────────────

// const handleNavigate = () => window.scrollTo({ top: 0, behavior: "smooth" });

// // ─── Animation Variants ───────────────────────────────────────────────────────

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.6 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// // ─── Portfolio Data ───────────────────────────────────────────────────────────
// // Replace these with your real projects.
// // previewUrl: your subdomain e.g. "https://project1.zentroxsolutions.com"
// // image: screenshot path e.g. "/images/portfolio/project1.jpg"

// const projects = [
//   {
//     id: 1,
//     name: "StyleStore",
//     category: "e-commerce",
//     categoryLabel: "E-Commerce",
//     description:
//       "A fully custom e-commerce platform for a fashion brand — featuring product filtering, cart management, Stripe payments, and a mobile-first checkout flow.",
//     tech: ["React", "Node.js", "Stripe", "Tailwind CSS"],
//     previewUrl: "https://stylestore.zentroxsolutions.com",
//     image: "/images/portfolio/stylestore.jpg",
//     year: "2024",
//   },
//   {
//     id: 2,
//     name: "TaskFlow",
//     category: "web-app",
//     categoryLabel: "Web App",
//     description:
//       "A project management web app with real-time updates, drag-and-drop kanban boards, team collaboration, and role-based access control.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
//     previewUrl: "https://taskflow.zentroxsolutions.com",
//     image: "/images/portfolio/taskflow.jpg",
//     year: "2024",
//   },
//   {
//     id: 3,
//     name: "NovaBrand",
//     category: "website",
//     categoryLabel: "Website",
//     description:
//       "A high-performance marketing website for a branding agency — built with Next.js, optimised for Core Web Vitals, and fully CMS-driven via Sanity.",
//     tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
//     previewUrl: "https://novabrand.zentroxsolutions.com",
//     image: "/images/portfolio/novabrand.jpg",
//     year: "2025",
//   },
// ];

// // ─── Categories ───────────────────────────────────────────────────────────────

// const categories = [
//   { id: "all", label: "All Projects", count: projects.length },
//   {
//     id: "website",
//     label: "Websites",
//     count: projects.filter((p) => p.category === "website").length,
//   },
//   {
//     id: "web-app",
//     label: "Web Apps",
//     count: projects.filter((p) => p.category === "web-app").length,
//   },
//   {
//     id: "e-commerce",
//     label: "E-Commerce",
//     count: projects.filter((p) => p.category === "e-commerce").length,
//   },
//   {
//     id: "landing",
//     label: "Landing Pages",
//     count: projects.filter((p) => p.category === "landing").length,
//   },
// ];

// // ─── Schema ───────────────────────────────────────────────────────────────────

// const breadcrumbSchema = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     {
//       "@type": "ListItem",
//       position: 1,
//       name: "Home",
//       item: "https://zentroxsolutions.com/",
//     },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Portfolio",
//       item: "https://zentroxsolutions.com/portfolio",
//     },
//   ],
// };

// const portfolioSchema = {
//   "@context": "https://schema.org",
//   "@type": "CollectionPage",
//   name: "Zentrox Solutions Portfolio",
//   description:
//     "Portfolio of websites and web applications built by Zentrox Solutions.",
//   url: "https://zentroxsolutions.com/portfolio",
// };

// // ─── Project Card ─────────────────────────────────────────────────────────────

// function ProjectCard({ project }) {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <motion.article
//       variants={itemVariants}
//       className="group relative flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden transition-all duration-300"
//       style={{ background: "#10101A", border: "1px solid rgba(16,64,176,0.4)" }}
//       whileHover={{
//         borderColor: "rgba(37,99,235,0.55)",
//         boxShadow: "0 20px 50px rgba(37,99,235,0.12)",
//       }}
//     >
//       {/* Hover glow */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, transparent 60%)",
//         }}
//       />

//       {/* ── Preview Panel ── */}
//       <div
//         className="relative w-full sm:w-72 lg:w-80 flex-shrink-0 overflow-hidden"
//         style={{ minHeight: "200px" }}
//       >
//         {/* Screenshot or placeholder */}
//         {!imgError ? (
//           <img
//             src={project.image}
//             alt={`${project.name} website screenshot`}
//             className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//             style={{ minHeight: "200px" }}
//             onError={() => setImgError(true)}
//             loading="lazy"
//           />
//         ) : (
//           // Fallback placeholder when image not yet uploaded
//           <div
//             className="w-full h-full flex flex-col items-center justify-center gap-3"
//             style={{ background: "#000000", minHeight: "200px" }}
//           >
//             <div
//               className="w-12 h-12 rounded-xl flex items-center justify-center"
//               style={{
//                 background: "rgba(37,99,235,0.15)",
//                 border: "1px solid rgba(37,99,235,0.3)",
//               }}
//             >
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6"
//                 style={{ color: "#2563EB" }}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.8}
//                   d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <span className="text-xs" style={{ color: "#94A3B8" }}>
//               Preview coming soon
//             </span>
//           </div>
//         )}

//         {/* Category badge overlay */}
//         <div
//           className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
//           style={{
//             background: "rgba(37,99,235,0.85)",
//             color: "#F0F6FF",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           {project.categoryLabel}
//         </div>

//         {/* Year badge */}
//         <div
//           className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-medium"
//           style={{
//             background: "rgba(0,0,0,0.7)",
//             color: "#94A3B8",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           {project.year}
//         </div>
//       </div>

//       {/* ── Content Panel ── */}
//       <div className="flex flex-col justify-between p-6 lg:p-8 flex-1 relative z-10">
//         <div>
//           {/* Project name */}
//           <h2
//             className="text-xl lg:text-2xl font-bold mb-3 leading-tight"
//             style={{ color: "#F0F6FF" }}
//           >
//             {project.name}
//           </h2>

//           {/* Description */}
//           <p
//             className="text-sm leading-relaxed mb-5"
//             style={{ color: "#94A3B8", fontWeight: 300 }}
//           >
//             {project.description}
//           </p>

//           {/* Tech stack */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="px-2.5 py-1 rounded-lg text-xs font-medium"
//                 style={{
//                   background: "rgba(37,99,235,0.10)",
//                   border: "1px solid rgba(37,99,235,0.2)",
//                   color: "#93C5FD",
//                 }}
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="flex items-center gap-3">
//           <a
//             href={project.previewUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={`View live preview of ${project.name}`}
//             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5"
//             style={{
//               background: "#2563EB",
//               boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "#3B7BF5";
//               e.currentTarget.style.boxShadow =
//                 "0 8px 24px rgba(59,123,245,0.45)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "#2563EB";
//               e.currentTarget.style.boxShadow =
//                 "0 4px 16px rgba(37,99,235,0.3)";
//             }}
//           >
//             <svg
//               aria-hidden="true"
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//               />
//             </svg>
//             Live Preview
//           </a>

//           {/* Animated arrow on hover */}
//           <div
//             className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 text-sm"
//             style={{ color: "#60A0FF" }}
//           >
//             <svg
//               aria-hidden="true"
//               className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function PortfolioPage() {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filtered = useMemo(
//     () =>
//       selectedCategory === "all"
//         ? projects
//         : projects.filter((p) => p.category === selectedCategory),
//     [selectedCategory],
//   );

//   return (
//     <div
//       className="relative overflow-hidden min-h-screen pt-24"
//       style={{
//         background:
//           "linear-gradient(160deg, #000000 0%, #0A0A0F 50%, #000000 100%)",
//       }}
//     >
//       <Helmet>
//         <title>Portfolio | Zentrox Solutions — Web Development Agency</title>
//         <meta
//           name="description"
//           content="Explore websites and web applications built by Zentrox Solutions — custom e-commerce stores, web apps, landing pages, and more."
//         />
//         <meta
//           name="keywords"
//           content="Zentrox Solutions portfolio, web development projects, websites we built, web agency work, custom websites Pakistan"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://zentroxsolutions.com/portfolio" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Portfolio | Zentrox Solutions" />
//         <meta
//           property="og:description"
//           content="Explore websites and web applications built by Zentrox Solutions — custom e-commerce stores, web apps, landing pages, and more."
//         />
//         <meta
//           property="og:url"
//           content="https://zentroxsolutions.com/portfolio"
//         />
//         <meta
//           property="og:image"
//           content="https://zentroxsolutions.com/og-image.jpg"
//         />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:image:alt" content="Zentrox Solutions Portfolio" />
//         <script type="application/ld+json">
//           {JSON.stringify(breadcrumbSchema)}
//         </script>
//         <script type="application/ld+json">
//           {JSON.stringify(portfolioSchema)}
//         </script>
//       </Helmet>

//       {/* Decorative background */}
//       <div
//         aria-hidden="true"
//         className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
//           filter: "blur(24px)",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(16,64,176,0.10) 0%, transparent 70%)",
//           filter: "blur(24px)",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
//           backgroundSize: "72px 72px",
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="absolute top-0 left-0 right-0 h-px pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
//         }}
//       />

//       <div className="relative mx-auto max-w-5xl px-6 py-12 lg:px-8">
//         {/* ── Header ── */}
//         <motion.div
//           className="text-center mb-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm mb-6"
//             style={{
//               background: "rgba(37,99,235,0.12)",
//               border: "1px solid rgba(37,99,235,0.35)",
//             }}
//             variants={itemVariants}
//           >
//             <span
//               aria-hidden="true"
//               className="w-2 h-2 rounded-full animate-pulse"
//               style={{ background: "#2563EB" }}
//             />
//             <span className="text-sm font-medium" style={{ color: "#93C5FD" }}>
//               Our Work
//             </span>
//           </motion.div>

//           <motion.h1
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
//             variants={itemVariants}
//           >
//             <span style={{ color: "#F0F6FF" }}>Projects We've</span>
//             <br />
//             <span
//               style={{
//                 background: "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Built & Launched.
//             </span>
//           </motion.h1>

//           <motion.p
//             className="text-lg leading-relaxed max-w-2xl mx-auto"
//             style={{ color: "#94A3B8", fontWeight: 300 }}
//             variants={itemVariants}
//           >
//             A selection of websites and web applications we've designed, built,
//             and launched for our clients — each one live and ready to explore.
//           </motion.p>
//         </motion.div>

//         {/* ── Category Filter ── */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-2 mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           {categories
//             .filter((c) => c.id === "all" || c.count > 0)
//             .map((cat) => {
//               const active = selectedCategory === cat.id;
//               return (
//                 <motion.button
//                   key={cat.id}
//                   onClick={() => setSelectedCategory(cat.id)}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
//                   style={{
//                     background: active ? "#2563EB" : "rgba(16,64,176,0.15)",
//                     border: `1px solid ${active ? "#2563EB" : "rgba(37,99,235,0.25)"}`,
//                     color: active ? "#F0F6FF" : "#93C5FD",
//                     boxShadow: active
//                       ? "0 4px 18px rgba(37,99,235,0.3)"
//                       : "none",
//                   }}
//                 >
//                   {cat.label}
//                   <span
//                     className="px-1.5 py-0.5 rounded-full text-xs"
//                     style={{
//                       background: active
//                         ? "rgba(255,255,255,0.2)"
//                         : "rgba(37,99,235,0.2)",
//                       color: active ? "#F0F6FF" : "#93C5FD",
//                     }}
//                   >
//                     {cat.count}
//                   </span>
//                 </motion.button>
//               );
//             })}
//         </motion.div>

//         {/* ── Project List ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedCategory}
//             className="space-y-6"
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0, y: -10 }}
//             variants={containerVariants}
//           >
//             {filtered.length > 0 ? (
//               filtered.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))
//             ) : (
//               <motion.div
//                 variants={itemVariants}
//                 className="text-center py-20 rounded-2xl"
//                 style={{
//                   background: "#10101A",
//                   border: "1px solid rgba(16,64,176,0.4)",
//                 }}
//               >
//                 <svg
//                   aria-hidden="true"
//                   className="w-12 h-12 mx-auto mb-4"
//                   style={{ color: "#94A3B8" }}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.8}
//                     d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <p
//                   className="text-lg font-semibold mb-2"
//                   style={{ color: "#F0F6FF" }}
//                 >
//                   No projects yet
//                 </p>
//                 <p className="text-sm" style={{ color: "#94A3B8" }}>
//                   Projects in this category are coming soon.
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {/* ── Bottom CTA ── */}
//         <motion.div
//           className="text-center mt-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.div
//             className="p-8 rounded-2xl max-w-2xl mx-auto"
//             style={{
//               background: "#10101A",
//               border: "1px solid rgba(37,99,235,0.3)",
//               boxShadow: "0 0 60px rgba(37,99,235,0.07)",
//             }}
//             variants={itemVariants}
//           >
//             <h2 className="text-xl font-bold mb-3" style={{ color: "#F0F6FF" }}>
//               Want a Website Like These?
//             </h2>
//             <p
//               className="mb-6 text-sm leading-relaxed max-w-md mx-auto"
//               style={{ color: "#94A3B8", fontWeight: 300 }}
//             >
//               Every project starts with a free discovery call. Tell us what
//               you're building and we'll put together a plan and proposal.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link
//                 to="/contact"
//                 onClick={handleNavigate}
//                 aria-label="Start your web development project with Zentrox Solutions"
//                 className="px-6 py-3 rounded-xl font-semibold text-white text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
//                 style={{
//                   background: "#2563EB",
//                   boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#3B7BF5";
//                   e.currentTarget.style.boxShadow =
//                     "0 10px 30px rgba(59,123,245,0.5)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#2563EB";
//                   e.currentTarget.style.boxShadow =
//                     "0 6px 24px rgba(37,99,235,0.35)";
//                 }}
//               >
//                 Start Your Project
//               </Link>
//               <Link
//                 to="/services"
//                 onClick={handleNavigate}
//                 aria-label="Explore Zentrox Solutions services"
//                 className="px-6 py-3 rounded-xl font-semibold text-sm text-center transition-all duration-300 transform hover:-translate-y-1"
//                 style={{
//                   color: "#93C5FD",
//                   background: "transparent",
//                   border: "1px solid rgba(37,99,235,0.4)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "#2563EB";
//                   e.currentTarget.style.background = "rgba(37,99,235,0.08)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
//                   e.currentTarget.style.background = "transparent";
//                 }}
//               >
//                 View Services
//               </Link>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom fade */}
//       <div
//         aria-hidden="true"
//         className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
//         style={{
//           background: "linear-gradient(to bottom, transparent, #000000)",
//         }}
//       />
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import wasooliImg from "./../assets/portfolio-images/wasooli.png";
import ilmwasooliImg from "./../assets/portfolio-images/ilmwasooli.png";
import wasooliaabImg from "./../assets/portfolio-images/wasooliaab.png";
import cornerstonesImg from "./../assets/portfolio-images/cornerstones.png";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.12, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    id: 1,
    name: "Wasooli",
    tagline: "ISP & Cable Billing Management Platform",
    category: "website",
    categoryLabel: "Website",
    description:
      "A high-conversion marketing website built for an ISP and cable TV billing software platform. Designed to showcase product capabilities, the site highlights features like subscriber management, billing automation, complaint tracking, and real-time analytics — all structured to attract Internet Service Providers and cable network businesses. The UI is clean, modern, and optimised for performance, ensuring fast load times and strong user engagement.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://wasooli.pk/",
    image: wasooliImg,
    year: "2025",
    accentColor: "#2563EB",
  },
  {
    id: 2,
    name: "IlmWasooli",
    tagline: "School Management & ERP System Website",
    category: "website",
    categoryLabel: "Website",
    description:
      "A modern, high-conversion marketing website built for a school management and ERP platform. The site is designed to clearly communicate product value, showcasing features like geo-location attendance, online fee collection, student management, and automation tools for educational institutes. Built with a clean UI and structured content flow, the website targets schools looking to digitise operations, improve efficiency, and adopt cloud-based systems. Optimised for performance, SEO, and lead generation.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://ilmwasooli.com/",
    image: ilmwasooliImg,
    year: "2025",
    accentColor: "#3B7BF5",
  },
  {
    id: 3,
    name: "WasooliAab",
    tagline: "Water Supply Management System Website",
    category: "website",
    categoryLabel: "Website",
    description:
      "A modern, conversion-focused marketing website built for a water supply management system. Designed to help water distribution businesses digitise operations, the platform highlights features like customer management, billing automation, supply tracking, and operational analytics. The website is structured to clearly communicate value, improve lead generation, and position the product as a scalable solution for utility providers. Built with a clean UI, fast performance, and SEO-friendly architecture.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://wasooliaab.com/",
    image: wasooliaabImg,
    year: "2025",
    accentColor: "#60A0FF",
  },
  {
    id: 4,
    name: "Cornerstones School",
    tagline: "Modern School Website Experience",
    category: "website",
    categoryLabel: "Website",
    description:
      "A modern, trust-focused website built for Cornerstones School to establish a strong digital presence and attract parents and students. The website highlights the school's academic excellence, values, and learning environment through a clean, structured layout. Designed with clarity and accessibility in mind, it features intuitive navigation, mobile responsiveness, and engaging sections to communicate credibility and encourage admissions inquiries.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    previewUrl: "https://cornerstones.edu.pk/",
    image: cornerstonesImg,
    year: "2025",
    accentColor: "#2563EB",
  },
];

const categories = [
  { id: "all", label: "All Work", count: projects.length },
  {
    id: "website",
    label: "Websites",
    count: projects.filter((p) => p.category === "website").length,
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    count: projects.filter((p) => p.category === "e-commerce").length,
  },
  {
    id: "landing",
    label: "Landing Pages",
    count: projects.filter((p) => p.category === "landing").length,
  },
];

// ─── Schema ───────────────────────────────────────────────────────────────────

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
      name: "Portfolio",
      item: "https://zentroxsolutions.com/portfolio",
    },
  ],
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Zentrox Solutions Portfolio",
  description:
    "Portfolio of websites and web applications built by Zentrox Solutions.",
  url: "https://zentroxsolutions.com/portfolio",
};

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article variants={itemVariants} className="group relative">
      <div
        className="relative rounded-3xl overflow-hidden transition-all duration-500"
        style={{
          background: "#0A0A0F",
          border: "1px solid rgba(16,64,176,0.35)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
          e.currentTarget.style.boxShadow = "0 32px 80px rgba(37,99,235,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(16,64,176,0.35)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Top accent line per project */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px z-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          }}
        />

        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
        >
          {/* ── Image Half ── */}
          <div
            className="relative w-full lg:w-1/2 overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            {!imgError ? (
              <img
                src={project.image}
                alt={`${project.name} — ${project.tagline}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "300px" }}
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4 relative"
                style={{
                  minHeight: "300px",
                  background:
                    "linear-gradient(135deg, #000000 0%, #0A0A0F 100%)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    border: "1px solid rgba(37,99,235,0.25)",
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
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="relative text-center">
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#CBD5E1" }}
                  >
                    {project.name}
                  </p>
                  <p className="text-xs" style={{ color: "#94A3B8" }}>
                    Screenshot coming soon
                  </p>
                </div>
              </div>
            )}

            {/* Directional gradient to blend into content */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isEven
                  ? "linear-gradient(to right, transparent 55%, #0A0A0F 100%)"
                  : "linear-gradient(to left, transparent 55%, #0A0A0F 100%)",
              }}
            />

            {/* Badges */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(0,0,0,0.75)",
                  border: `1px solid ${project.accentColor}50`,
                  color: project.accentColor,
                  backdropFilter: "blur(10px)",
                  letterSpacing: "0.1em",
                }}
              >
                {project.categoryLabel}
              </span>
              <span
                className="px-2.5 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(0,0,0,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#94A3B8",
                  backdropFilter: "blur(10px)",
                }}
              >
                {project.year}
              </span>
            </div>
          </div>

          {/* ── Content Half ── */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-10 xl:p-14">
            {/* Hover radial glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Editorial index + tagline */}
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold flex-shrink-0"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.3)",
                    color: "#2563EB",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#94A3B8", letterSpacing: "0.12em" }}
                >
                  {project.tagline}
                </span>
              </div>

              {/* Large project name */}
              <h2
                className="font-bold leading-none tracking-tight mb-5"
                style={{
                  color: "#F0F6FF",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {project.name}
              </h2>

              {/* Animated accent rule */}
              <div
                className="h-px mb-7 rounded-full transition-all duration-500 group-hover:w-20"
                style={{
                  width: "2.5rem",
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                }}
              />

              {/* Description */}
              <p
                className="text-sm leading-loose mb-8"
                style={{ color: "#94A3B8", fontWeight: 300 }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      border: "1px solid rgba(37,99,235,0.18)",
                      color: "#93C5FD",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="relative z-10 flex items-center justify-between">
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live preview of ${project.name}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3B7BF5";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(59,123,245,0.45)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(37,99,235,0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
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
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Live Site
              </a>

              <div
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                style={{ color: "#60A0FF" }}
              >
                <span>Explore</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = useMemo(
    () =>
      selectedCategory === "all"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <main
      id="main-content"
      className="relative overflow-hidden min-h-screen pt-24"
      style={{
        background:
          "linear-gradient(160deg, #000000 0%, #0A0A0F 60%, #000000 100%)",
      }}
    >
      <Helmet>
        <title>Portfolio | Zentrox Solutions — Web Development Agency</title>
        <meta
          name="description"
          content="Explore websites and web applications built by Zentrox Solutions — custom e-commerce stores, landing pages, and more."
        />
        <meta
          name="keywords"
          content="Zentrox Solutions portfolio, web development projects, websites we built, web agency work, custom websites Pakistan"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zentroxsolutions.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zentrox Solutions" />
        <meta property="og:title" content="Portfolio | Zentrox Solutions" />
        <meta
          property="og:description"
          content="Explore websites and web applications built by Zentrox Solutions — custom e-commerce stores, landing pages, and more."
        />
        <meta
          property="og:url"
          content="https://zentroxsolutions.com/portfolio"
        />
        <meta
          property="og:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zentrox Solutions Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Zentrox Solutions" />
        <meta
          name="twitter:description"
          content="Explore websites and web applications built by Zentrox Solutions — custom e-commerce stores, landing pages, and more."
        />
        <meta
          name="twitter:image"
          content="https://zentroxsolutions.com/images/zs.png"
        />
        <meta name="twitter:image:alt" content="Zentrox Solutions Portfolio" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>

      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-px pointer-events-none"
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
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,64,176,0.08) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-12 lg:px-8">
        {/* ── Editorial Header ── */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="h-px w-12" style={{ background: "#2563EB" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#2563EB", letterSpacing: "0.2em" }}
            >
              Selected Work
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div variants={itemVariants}>
              <h1
                className="font-bold leading-none tracking-tight mb-4"
                style={{
                  color: "#F0F6FF",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: "0.95",
                }}
              >
                Work That
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #2563EB 0%, #60A0FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Speaks.
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base leading-relaxed max-w-sm lg:text-right"
              style={{ color: "#94A3B8", fontWeight: 300, lineHeight: "1.8" }}
              variants={itemVariants}
            >
              Every project we build is live, tested, and crafted to perform.
              Browse our work — each one is hosted and ready to explore.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(37,99,235,0.4), transparent)",
            }}
            variants={itemVariants}
          />
        </motion.div>

        {/* ── Category Filter ── */}
        <motion.div
          className="flex flex-wrap items-center gap-2 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {categories
            .filter((c) => c.id === "all" || c.count > 0)
            .map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background: active ? "#2563EB" : "transparent",
                    border: `1px solid ${active ? "#2563EB" : "rgba(37,99,235,0.3)"}`,
                    color: active ? "#F0F6FF" : "#94A3B8",
                    boxShadow: active
                      ? "0 4px 20px rgba(37,99,235,0.35)"
                      : "none",
                  }}
                >
                  {cat.label}
                  {cat.id !== "all" && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                      style={{
                        background: active
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(37,99,235,0.15)",
                        color: active ? "#F0F6FF" : "#60A0FF",
                      }}
                    >
                      {cat.count}
                    </span>
                  )}
                </motion.button>
              );
            })}

          {/* Live project count */}
          <div
            className="ml-auto text-sm flex items-center gap-1.5"
            style={{ color: "#94A3B8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#2563EB" }}
            />
            <span style={{ color: "#2563EB", fontWeight: 600 }}>
              {filtered.length}
            </span>
            <span>{filtered.length === 1 ? "project" : "projects"}</span>
          </div>
        </motion.div>

        {/* ── Project List ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="space-y-8"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            variants={containerVariants}
          >
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="text-center py-24 rounded-3xl"
                style={{
                  background: "#0A0A0F",
                  border: "1px solid rgba(16,64,176,0.3)",
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 mx-auto mb-5"
                  style={{ color: "#94A3B8" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#F0F6FF" }}
                >
                  Coming Soon
                </p>
                <p className="text-sm" style={{ color: "#94A3B8" }}>
                  Projects in this category will appear here.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Editorial Bottom CTA ── */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="h-px w-full mb-14"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
            }}
            variants={itemVariants}
          />

          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
            variants={itemVariants}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "#2563EB" }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#2563EB", letterSpacing: "0.15em" }}
                >
                  Next Step
                </span>
              </div>
              <h2
                className="font-bold leading-tight mb-4"
                style={{
                  color: "#F0F6FF",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Your project could
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #2563EB, #60A0FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  be next.
                </span>
              </h2>
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{ color: "#94A3B8", fontWeight: 300 }}
              >
                Every project starts with a free discovery call. Tell us what
                you're building and we'll put together a plan, timeline, and
                proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/start-project"
                onClick={handleNavigate}
                aria-label="Start your web development project with Zentrox Solutions"
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm text-center transition-all duration-300"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3B7BF5";
                  e.currentTarget.style.boxShadow =
                    "0 10px 32px rgba(59,123,245,0.5)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(37,99,235,0.35)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                onClick={handleNavigate}
                aria-label="Explore Zentrox Solutions services"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-center transition-all duration-300"
                style={{
                  color: "#93C5FD",
                  background: "transparent",
                  border: "1px solid rgba(37,99,235,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.35)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </main>
  );
}
