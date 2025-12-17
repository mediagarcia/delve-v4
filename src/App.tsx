import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import SolutionECOA from "./pages/SolutionECOA";
import About from "./pages/About";
import WhitePapers from "./pages/WhitePapers";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import Pharma from "./pages/Pharma";
import Biotech from "./pages/Biotech";
import Wearables from "./pages/Wearables";
import Concierge from "./pages/Concierge";
import MedTech from "./pages/MedTech";
import Sites from "./pages/Sites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home & Demo */}
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />

          {/* Solutions */}
          <Route path="/solutions/ecoa" element={<SolutionECOA />} />
          <Route path="/solutions/wearables" element={<Wearables />} />
          <Route path="/solutions/patient-engagement" element={<SolutionECOA />} />
          <Route path="/solutions/concierge" element={<Concierge />} />
          <Route path="/solutions/econsent" element={<SolutionECOA />} />
          <Route path="/solutions/analytics" element={<SolutionECOA />} />
          <Route path="/solutions/provisioning" element={<SolutionECOA />} />
          <Route path="/solutions/biomarkers" element={<SolutionECOA />} />

          {/* Industries */}
          <Route path="/industries/pharma" element={<Pharma />} />
          <Route path="/industries/biotech" element={<Biotech />} />
          <Route path="/industries/medtech" element={<MedTech />} />
          <Route path="/industries/sites" element={<Sites />} />

          {/* Resources */}
          <Route path="/resources/white-papers" element={<WhitePapers />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />

          {/* Company */}
          <Route path="/about" element={<About />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
