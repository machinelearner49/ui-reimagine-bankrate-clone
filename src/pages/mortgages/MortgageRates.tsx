import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calculator, Star, Shield } from "lucide-react";

const MortgageRates = () => {
  const currentRates = [
    {
      loanType: "30-Year Fixed",
      rate: "6.875%",
      apr: "6.932%",
      change: "-0.125",
      trend: "down"
    },
    {
      loanType: "15-Year Fixed",
      rate: "6.125%",
      apr: "6.201%",
      change: "-0.063",
      trend: "down"
    },
    {
      loanType: "5/1 ARM",
      rate: "5.750%",
      apr: "7.234%",
      change: "+0.125",
      trend: "up"
    },
    {
      loanType: "Jumbo 30-Year",
      rate: "6.750%",
      apr: "6.798%",
      change: "-0.250",
      trend: "down"
    }
  ];

  const topLenders = [
    {
      lenderName: "Rocket Mortgage",
      rate: "6.750%",
      apr: "6.892%",
      rating: 4.8,
      badge: "Best Overall"
    },
    {
      lenderName: "Better Mortgage",
      rate: "6.625%",
      apr: "6.745%",
      rating: 4.7,
      badge: "Low Rates"
    },
    {
      lenderName: "LoanDepot",
      rate: "6.875%",
      apr: "6.934%",
      rating: 4.5,
      badge: "Fast Closing"
    }
  ];

  const features = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Live Rate Updates",
      description: "Get real-time mortgage rate updates throughout the day"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Rate Calculator",
      description: "Calculate payments and compare different loan scenarios"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Lender Reviews",
      description: "Read reviews and ratings from verified customers"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Process",
      description: "Your information is protected with bank-level security"
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
                Current Mortgage Rates Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Compare today's mortgage rates from top lenders and find the best deal for your home purchase
              </p>
            </div>
          </div>
        </section>

        {/* Current Rates */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Today's Mortgage Rates</h2>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {currentRates.map((rate, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{rate.loanType}</h3>
                        <p className="text-sm text-muted-foreground">Loan Type</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{rate.rate}</p>
                        <p className="text-sm text-muted-foreground">Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">{rate.apr}</p>
                        <p className="text-sm text-muted-foreground">APR</p>
                      </div>
                      <div className="text-center">
                        <div className={`flex items-center gap-1 ${rate.trend === 'down' ? 'text-green-500' : 'text-red-500'}`}>
                          <span className="font-semibold">{rate.change}%</span>
                          <TrendingDown className={`h-4 w-4 ${rate.trend === 'up' ? 'rotate-180' : ''}`} />
                        </div>
                        <p className="text-sm text-muted-foreground">Daily Change</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Top Lenders */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Top Mortgage Lenders</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {topLenders.map((lender, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-xl">{lender.lenderName}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(lender.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold">{lender.rating}</span>
                        </div>
                      </div>
                      <Badge className="bg-gradient-primary text-white border-0">
                        {lender.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-8">
                        <div>
                          <p className="text-2xl font-bold text-primary">{lender.rate}</p>
                          <p className="text-sm text-muted-foreground">Rate</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">{lender.apr}</p>
                          <p className="text-sm text-muted-foreground">APR</p>
                        </div>
                      </div>
                      <Button className="bg-gradient-primary hover:opacity-90">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Rate Comparison</h2>
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

export default MortgageRates;