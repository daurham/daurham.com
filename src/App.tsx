import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import BlogPost1 from "./pages/page528";
// import BlogPost2 from "./pages/page531";
import { resumeLink } from "./constant.config";
import FrontendPortfolio from "./pages/FrontendPortfolio";
import BackendPortfolio from "./pages/BackendPortfolio";

const queryClient = new QueryClient();

const ResumeRedirect = () => {
  window.location.href = resumeLink;
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/frontend" element={<FrontendPortfolio />} />
          <Route path="/backend" element={<BackendPortfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;