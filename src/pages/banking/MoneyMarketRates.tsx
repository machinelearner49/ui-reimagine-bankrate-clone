import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Award } from "lucide-react";

const MoneyMarketRates = () => {
  const topAccounts = [
    {
      bankName: "Marcus by Goldman Sachs",
      apy: "4.40%",
      minimumBalance: "$0",
      badge: "Best Overall",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      bankName: "Ally Bank",
      apy: "4.35%",
      minimumBalance: "$0",
      badge: "No Fees",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      bankName: "CIT Bank",
      apy: "4.30%",
      minimumBalance: "$100",
      badge: "High Yield",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      bankName: "Capital One 360",
      apy: "4.25%",
      minimumBalance: "$0",
      badge: "Popular Choice",
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-500"
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Earn up to 4.40% APY on your money market savings"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "FDIC Insured",
      description: "Your deposits are protected up to $250,000 per depositor"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easy Access",
      description: "Write checks and use debit cards while earning high rates"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "No Monthly Fees",
      description: "Many accounts offer no monthly maintenance fees"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Best Money Market Accounts of September 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Compare high-yield money market accounts with competitive rates up to 4.40% APY
              </p>
            </div>
          </div>
        </section>

        {/* Top Accounts */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Top Money Market Accounts</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {topAccounts.map((account, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{account.bankName}</CardTitle>
                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-primary">{account.apy}</span>
                          <span className="text-sm text-muted-foreground">APY</span>
                        </div>
                      </div>
                      <Badge className={`${account.badgeColor} text-white border-0`}>
                        {account.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Minimum Balance</p>
                        <p className="font-semibold">{account.minimumBalance}</p>
                      </div>
                      <Button className="bg-gradient-primary hover:opacity-90">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Money Market Accounts?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MoneyMarketRates;