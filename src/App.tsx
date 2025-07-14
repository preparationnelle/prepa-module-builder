
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Formation from "./pages/Formation";
import MathsFormation from "./pages/MathsFormation";
import ModulePage from "./pages/ModulePage";
import ExercisePage from "./pages/ExercisePage";
import NotFound from "./pages/NotFound";
import Chapitre1 from "./pages/formation/maths/chapitre1";
import Chapitre2 from "./pages/formation/maths/chapitre2";
import Chapitre3 from "./pages/formation/maths/chapitre3";
import Chapitre4 from "./pages/formation/maths/chapitre4";
import Chapitre5 from "./pages/formation/maths/chapitre5";
import Chapitre6 from "./pages/formation/maths/chapitre6";
import Chapitre7 from "./pages/formation/maths/chapitre7";
import Chapitre8 from "./pages/formation/maths/chapitre8";
import Chapitre9 from "./pages/formation/maths/chapitre9";
import Chapitre10 from "./pages/formation/maths/chapitre10";
import Chapitre11 from "./pages/formation/maths/chapitre11";
import Chapitre12 from "./pages/formation/maths/chapitre12";
import Chapitre13 from "./pages/formation/maths/chapitre13";
import Chapitre14 from "./pages/formation/maths/chapitre14";
import Chapitre15 from "./pages/formation/maths/chapitre15";
import Chapitre16 from "./pages/formation/maths/chapitre16";
import Chapitre17 from "./pages/formation/maths/chapitre17";
import Chapitre18 from "./pages/formation/maths/chapitre18";
import Chapitre19 from "./pages/formation/maths/chapitre19";
import Chapitre20 from "./pages/formation/maths/chapitre20";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formation />} />
          <Route path="/formation/maths" element={<MathsFormation />} />
          <Route path="/formation/maths/module/:moduleId" element={<ModulePage />} />
          <Route path="/formation/maths/module/:moduleId/exercises" element={<ExercisePage />} />
          <Route path="/formation/maths/chapitre1" element={<Chapitre1 />} />
          <Route path="/formation/maths/chapitre2" element={<Chapitre2 />} />
          <Route path="/formation/maths/chapitre3" element={<Chapitre3 />} />
          <Route path="/formation/maths/chapitre4" element={<Chapitre4 />} />
          <Route path="/formation/maths/chapitre5" element={<Chapitre5 />} />
          <Route path="/formation/maths/chapitre6" element={<Chapitre6 />} />
          <Route path="/formation/maths/chapitre7" element={<Chapitre7 />} />
          <Route path="/formation/maths/chapitre8" element={<Chapitre8 />} />
          <Route path="/formation/maths/chapitre9" element={<Chapitre9 />} />
          <Route path="/formation/maths/chapitre10" element={<Chapitre10 />} />
          <Route path="/formation/maths/chapitre11" element={<Chapitre11 />} />
          <Route path="/formation/maths/chapitre12" element={<Chapitre12 />} />
          <Route path="/formation/maths/chapitre13" element={<Chapitre13 />} />
          <Route path="/formation/maths/chapitre14" element={<Chapitre14 />} />
          <Route path="/formation/maths/chapitre15" element={<Chapitre15 />} />
          <Route path="/formation/maths/chapitre16" element={<Chapitre16 />} />
          <Route path="/formation/maths/chapitre17" element={<Chapitre17 />} />
          <Route path="/formation/maths/chapitre18" element={<Chapitre18 />} />
          <Route path="/formation/maths/chapitre19" element={<Chapitre19 />} />
          <Route path="/formation/maths/chapitre20" element={<Chapitre20 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
