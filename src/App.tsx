import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LobbyScreen from "./screens/LobbyScreen";
import Index from "./pages/Index";
import AdminPanel from "./screens/AdminPanel";
import CreateCharacterScreen from "./screens/CreateCharacterScreen";
import GameScreen from "./screens/GameScreen";
import EndingScreen from "./screens/EndingScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import MilestoneScreen from "./screens/MilestoneScreen";
import ResultScreen from "./screens/ResultScreen";
import RulesScreen from "./screens/RulesScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/minigame" element={<LobbyScreen />} />
          <Route path="/hcm202" element={<AdminPanel />} />
          <Route path="/create-character" element={<CreateCharacterScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/ending" element={<EndingScreen />} />
          <Route path="/leaderboard" element={<LeaderboardScreen />} />
          <Route path="/milestone" element={<MilestoneScreen />} />
          <Route path="/result" element={<ResultScreen />} />
          <Route path="/rules" element={<RulesScreen />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
