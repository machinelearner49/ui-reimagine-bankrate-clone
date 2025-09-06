import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calendar, DollarSign, Shield } from "lucide-react";

const ThirtyYearRates = () => {
  const currentRate = "6.875%";
  const rateChange = "-0.125%";
  
  const topLenders = [
    {
      lenderName: "Rocket Mortgage",
      rate: "6.750%",
      apr: "6.892%",
      points: "0.5",
      badge: "Lowest Rate",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      lenderName: "Better Mortgage",
      rate: "6.825%",
      apr: "6.945%",
      points: "0.0",
      badge: "No Points",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      lenderName: "LoanDepot",
      rate: "6.875%",
      apr: "6.984%",
      points: "0.25",
      badge: "Fast Process",
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-500"
    },
    {
      lenderName: "Quicken Loans",
      rate: "6.900%",
      apr: "7.012%",
      points: "0.0",
      badge: "Popular Choice",
      badgeColor: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  const rateHistory = [
    { period: "This Week", rate: "6.875%" },
    { period: "Last Week", rate: "7.000%" },
    { period: "Last Month", rate: "7.125%" },
    { period: "3 Months Ago", rate: "6.750%" },
    { period: "6 Months Ago", rate: "6.500%" },
    { period: "1 Year Ago", rate: "5.875%" }
  ];

  const benefits = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Predictable Payments",
      description: "Fixed rate means your payment stays the same for 30 years"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Lower Monthly Payments",
      description: "Longer term means lower monthly payments compared to 15-year loans"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Rate Protection",
      description: "Lock in today's rate and protect against future rate increases"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Build Equity",
      description: "Build home equity over time while enjoying stable payments"
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
                30-Year Mortgage Rates Today
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Compare current 30-year fixed mortgage rates and find the best deal for your home purchase
              </p>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{currentRate}</p>
                  <p className="text-sm text-muted-foreground">Average 30-Year Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">{rateChange}</p>
                  <p className="text-sm text-muted-foreground">Daily Change</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Lenders */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Best 30-Year Mortgage Rates</h2>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {topLenders.map((lender, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{lender.lenderName}</CardTitle>
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="text-2xl font-bold text-primary">{lender.rate}</span>
                            <span className="text-sm text-muted-foreground ml-1">Rate</span>
                          </div>
                          <div>
                            <span className="text-lg font-semibold">{lender.apr}</span>
                            <span className="text-sm text-muted-foreground ml-1">APR</span>
                          </div>
                          <div>
                            <span className="text-lg font-semibold">{lender.points}</span>
                            <span className="text-sm text-muted-foreground ml-1">Points</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${lender.badgeColor} text-white border-0`}>
                        {lender.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Based on $400,000 loan with 20% down payment
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

        {/* Rate History */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">30-Year Rate History</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {rateHistory.map((item, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader className="pb-2">
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-primary">{item.rate}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of 30-Year Mortgages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                Lock In Your Rate Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interest rates change daily. Get pre-approved and lock in your rate to protect against increases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Get Pre-Approved
                </Button>
                <Button size="lg" variant="outline">
                  Calculate Payment
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

export default ThirtyYearRates;