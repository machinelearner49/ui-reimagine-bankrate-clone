import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, TrendingDown, Calculator, PiggyBank } from "lucide-react";

const RefinanceRates = () => {
  const refinanceRates = [
    {
      loanType: "30-Year Fixed Refi",
      rate: "6.750%",
      apr: "6.892%",
      change: "-0.125%",
      trend: "down"
    },
    {
      loanType: "15-Year Fixed Refi",
      rate: "6.000%",
      apr: "6.125%",
      change: "-0.100%",
      trend: "down"
    },
    {
      loanType: "Cash-Out Refi",
      rate: "7.000%",
      apr: "7.156%",
      change: "-0.075%",
      trend: "down"
    },
    {
      loanType: "5/1 ARM Refi",
      rate: "5.625%",
      apr: "6.984%",
      change: "+0.125%",
      trend: "up"
    }
  ];

  const topLenders = [
    {
      lenderName: "Rocket Mortgage",
      rate: "6.625%",
      apr: "6.784%",
      badge: "Best Overall",
      specialOffer: "No lender fees on qualifying loans"
    },
    {
      lenderName: "Better Mortgage",
      rate: "6.750%",
      apr: "6.825%",
      badge: "Low Fees",
      specialOffer: "$1,000 lender credit available"
    },
    {
      lenderName: "LoanDepot",
      rate: "6.875%",
      apr: "6.945%",
      badge: "Fast Close",
      specialOffer: "Close in as little as 21 days"
    }
  ];

  const refinanceReasons = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Lower Your Rate",
      description: "Reduce your monthly payment by securing a lower interest rate",
      benefit: "Save $200-500/month"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Shorten Your Term",
      description: "Pay off your mortgage faster with a 15-year refinance",
      benefit: "Save $50,000+ in interest"
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Cash-Out Refinance",
      description: "Access your home's equity for renovations or debt consolidation",
      benefit: "Up to 80% of home value"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Switch Loan Type",
      description: "Move from an adjustable-rate to a fixed-rate mortgage",
      benefit: "Payment stability"
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
                Refinance Rates Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lower your monthly payment, shorten your term, or access your home's equity with competitive refinance rates
              </p>
            </div>
          </div>
        </section>

        {/* Current Rates */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Today's Refinance Rates</h2>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {refinanceRates.map((rate, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{rate.loanType}</h3>
                        <p className="text-sm text-muted-foreground">Refinance Option</p>
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
                          <span className="font-semibold">{rate.change}</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Top Refinance Lenders</h2>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {topLenders.map((lender, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{lender.lenderName}</CardTitle>
                        <div className="flex items-center gap-6 mb-3">
                          <div>
                            <span className="text-2xl font-bold text-primary">{lender.rate}</span>
                            <span className="text-sm text-muted-foreground ml-1">Rate</span>
                          </div>
                          <div>
                            <span className="text-lg font-semibold">{lender.apr}</span>
                            <span className="text-sm text-muted-foreground ml-1">APR</span>
                          </div>
                        </div>
                        <p className="text-sm text-green-600 font-medium">{lender.specialOffer}</p>
                      </div>
                      <Badge className="bg-gradient-primary text-white border-0">
                        {lender.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        30-year fixed refinance • 80% LTV
                      </p>
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

        {/* Refinance Reasons */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Refinance Your Mortgage?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {refinanceReasons.map((reason, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{reason.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-2">{reason.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {reason.benefit}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See How Much You Could Save
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a personalized refinance quote and see your potential savings with today's rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Get My Refinance Quote
                </Button>
                <Button size="lg" variant="outline">
                  Calculate Savings
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefinanceRates;