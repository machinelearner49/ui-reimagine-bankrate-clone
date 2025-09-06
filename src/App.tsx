import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Investing from "./pages/Investing";
import HomeEquity from "./pages/HomeEquity";
import CDRates from "./pages/CDRates";
import Banking from "./pages/Banking";
import Mortgages from "./pages/Mortgages";
import MoneyMarketRates from "./pages/banking/MoneyMarketRates";
import CheckingAccounts from "./pages/banking/CheckingAccounts";
import BankingReviews from "./pages/banking/BankingReviews";
import MortgageRates from "./pages/mortgages/MortgageRates";
import MortgageCalculator from "./pages/mortgages/MortgageCalculator";
import ThirtyYearRates from "./pages/mortgages/ThirtyYearRates";
import RefinanceRates from "./pages/mortgages/RefinanceRates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/investing" element={<Investing />} />
            <Route path="/home-equity" element={<HomeEquity />} />
            <Route path="/cd-rates" element={<CDRates />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/mortgages" element={<Mortgages />} />
            <Route path="/banking/money-market-rates" element={<MoneyMarketRates />} />
            <Route path="/banking/checking-accounts" element={<CheckingAccounts />} />
            <Route path="/banking/reviews" element={<BankingReviews />} />
            <Route path="/mortgages/rates" element={<MortgageRates />} />
            <Route path="/mortgages/calculator" element={<MortgageCalculator />} />
            <Route path="/mortgages/30-year-rates" element={<ThirtyYearRates />} />
            <Route path="/mortgages/refinance-rates" element={<RefinanceRates />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
