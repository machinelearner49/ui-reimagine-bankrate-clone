import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Percent, Shield, TrendingUp, Filter, ChevronDown, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CDRates = () => {
  const [zipCode, setZipCode] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [minTerm, setMinTerm] = useState("");
  const [maxTerm, setMaxTerm] = useState("");

  const topCDRates = [
    {
      bank: "Marcus by Goldman Sachs",
      term: "12 months",
      apy: "4.50%",
      minDeposit: "$500",
      rating: 4.8,
      fdic: true,
      promoted: true
    },
    {
      bank: "Ally Bank",
      term: "12 months",
      apy: "4.25%",
      minDeposit: "$0",
      rating: 4.7,
      fdic: true,
      promoted: false
    },
    {
      bank: "Capital One",
      term: "12 months", 
      apy: "4.10%",
      minDeposit: "$0",
      rating: 4.6,
      fdic: true,
      promoted: false
    },
    {
      bank: "Discover Bank",
      term: "18 months",
      apy: "4.30%",
      minDeposit: "$2,500",
      rating: 4.5,
      fdic: true,
      promoted: true
    },
    {
      bank: "American Express",
      term: "24 months",
      apy: "4.15%",
      minDeposit: "$0",
      rating: 4.4,
      fdic: true,
      promoted: false
    },
  ];

  const cdTerms = [
    { term: "3 months", rate: "3.85%", popular: false },
    { term: "6 months", rate: "4.09%", popular: true },
    { term: "12 months", rate: "4.25%", popular: true },
    { term: "18 months", rate: "4.15%", popular: false },
    { term: "24 months", rate: "4.05%", popular: false },
    { term: "5 years", rate: "3.95%", popular: false },
  ];

  const benefits = [
    "Current rates that have been pre-screened",
    "All offers are FDIC/NCUA insured",
    "Competitively higher APYs vs the National Average",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Compare Great
              </span>
              <br />
              <span className="text-foreground">CD Rates</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quality offers rated highly by Bankrate for competitive rates, fees, and minimums
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary/50 px-4 py-2">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="bg-card/50 backdrop-blur-glass border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Filter className="h-6 w-6 text-primary" />
                <span>Filter CD Rates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="Enter ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="bg-card/50 border-border/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="depositAmount">Deposit Amount</Label>
                  <Input
                    id="depositAmount"
                    placeholder="$10,000"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <div>
                  <Label htmlFor="minTerm">Min. Term Length</Label>
                  <Select value={minTerm} onValueChange={setMinTerm}>
                    <SelectTrigger className="bg-card/50 border-border/50">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="6-months">6 months</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="2-years">2 years</SelectItem>
                      <SelectItem value="5-years">5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="maxTerm">Max. Term Length</Label>
                  <Select value={maxTerm} onValueChange={setMaxTerm}>
                    <SelectTrigger className="bg-card/50 border-border/50">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6-months">6 months</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="2-years">2 years</SelectItem>
                      <SelectItem value="5-years">5 years</SelectItem>
                      <SelectItem value="5+-years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" className="border-border/50">
                  Reset Filters
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CD Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Today's Best CD Rates
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare certificate of deposit rates across different terms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {cdTerms.map((cd, index) => (
              <Card 
                key={cd.term}
                className={`group transition-all duration-300 hover:scale-105 ${
                  cd.popular 
                    ? 'bg-gradient-primary p-1 shadow-glow' 
                    : 'bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-elegant'
                }`}
              >
                <div className={cd.popular ? 'bg-card rounded-lg' : ''}>
                  <CardHeader className="text-center">
                    {cd.popular && (
                      <Badge className="w-fit mx-auto mb-2 bg-primary text-primary-foreground">
                        Popular Choice
                      </Badge>
                    )}
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {cd.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {cd.rate}
                    </div>
                    <div className="text-muted-foreground mb-6">APY</div>
                    <Button 
                      className={`w-full ${
                        cd.popular 
                          ? 'bg-gradient-primary hover:opacity-90' 
                          : 'bg-gradient-secondary hover:opacity-90'
                      }`}
                    >
                      View Offers
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top CD Rates Table */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Top <span className="bg-gradient-accent bg-clip-text text-transparent">CD Offers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Best certificate of deposit rates from top-rated banks
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-glass border-border/50 max-w-6xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Bank</th>
                      <th className="text-left p-4 font-semibold">Term</th>
                      <th className="text-left p-4 font-semibold">APY</th>
                      <th className="text-left p-4 font-semibold">Min. Deposit</th>
                      <th className="text-left p-4 font-semibold">Rating</th>
                      <th className="text-left p-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCDRates.map((cd, index) => (
                      <tr key={cd.bank} className="border-t border-border/30 hover:bg-secondary/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-semibold flex items-center space-x-2">
                                <span>{cd.bank}</span>
                                {cd.promoted && (
                                  <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                                    Promoted
                                  </Badge>
                                )}
                              </div>
                              {cd.fdic && (
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Shield className="h-3 w-3" />
                                  <span>FDIC Insured</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-medium">{cd.term}</td>
                        <td className="p-4">
                          <div className="text-2xl font-bold text-primary">{cd.apy}</div>
                        </td>
                        <td className="p-4 text-muted-foreground">{cd.minDeposit}</td>
                        <td className="p-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{cd.rating}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Button className="bg-gradient-primary hover:opacity-90">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-border/50 hover:bg-card/50">
              View All CD Offers
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CD Education */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Understanding <span className="bg-gradient-primary bg-clip-text text-transparent">CDs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about certificate of deposits and how they work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Percent,
                title: "Guaranteed Returns",
                description: "CDs offer fixed interest rates, providing predictable returns on your investment."
              },
              {
                icon: Shield,
                title: "FDIC Protected",
                description: "Your deposits are insured up to $250,000 by the FDIC at member banks."
              },
              {
                icon: TrendingUp,
                title: "Higher Than Savings",
                description: "CDs typically offer higher APYs than traditional savings accounts."
              }
            ].map((feature) => (
              <Card key={feature.title} className="bg-card/30 backdrop-blur-glass border-border/30 hover:bg-card/50 hover:shadow-elegant transition-all text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CDRates;