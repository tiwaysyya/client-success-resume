import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import FoundersIntelligence from "./pages/FoundersIntelligence";
import SocialProofScraper from "./pages/SocialProofScraper";
import UserResearchDashboard from "./pages/UserResearchDashboard";
import BiotechMarketDashboard from "./pages/BiotechMarketDashboard";
import UnitEconomicsDashboard from "./pages/UnitEconomicsDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/intel" element={<FoundersIntelligence />} />
            <Route path="/social-proof" element={<SocialProofScraper />} />
            <Route path="/user-research" element={<UserResearchDashboard />} />
            <Route path="/biotech-market" element={<BiotechMarketDashboard />} />
            <Route path="/unit-economics" element={<UnitEconomicsDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
