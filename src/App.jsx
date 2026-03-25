import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFound";
import ServiceDetailsPage from "./pages/ServiceDetails";
import ConnectionForm from "./pages/StartProject";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <div className="bg-[#0A0A0F]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/start-project" element={<ConnectionForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
