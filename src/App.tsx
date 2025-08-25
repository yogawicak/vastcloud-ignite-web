import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CloudHosting from "./pages/CloudHosting";
import SharedHosting from "./pages/SharedHosting";
import VpsHosting from "./pages/VpsHosting";
import Vastpod from "./pages/Vastpod";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cloud-hosting" element={<CloudHosting />} />
              <Route path="/shared-hosting" element={<SharedHosting />} />
              <Route path="/vps-hosting" element={<VpsHosting />} />
              <Route path="/vastpod" element={<Vastpod />} />
              <Route path="/pricing" element={<Pricing />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
