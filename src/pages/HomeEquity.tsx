import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Home, Calculator, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HomeEquity = () => {
  const [loanType, setLoanType] = useState("home-equity-loan");
  const [zipCode, setZipCode] = useState("10157");
  const [propertyValue, setPropertyValue] = useState("");
  const [mortgageBalance, setMortgageBalance] = useState("");
  const [creditScore, setCreditScore] = useState("780+");

  const loanTypes = [
    {
      id: "home-equity-loan",
      title: "Home Equity Loan",
      description: "A loan that lets you borrow against the value of your home, with funds delivered as a lump sum.",
      icon: Home,
      rate: "6.85%",
    },
    {
      id: "heloc",
      title: "HELOC",
      description: "A variable or fixed-rate line of credit based on your home value that you can continually borrow from.",
      icon: TrendingUp,
      rate: "7.24%",
    },
    {
      id: "cash-out-refinance",
      title: "Cash-out Refinance",
      description: "Replaces your current mortgage with a new, bigger one and receive the difference as cash.",
      icon: Calculator,
      rate: "6.95%",
    },
  ];

  const applicationSteps = [
    "Check your credit - The higher your credit score, the better your rate",
    "Calculate your home equity - Determine how much you can borrow",
    "Consider existing debt - Review your current financial obligations",
    "Complete the lender's application - Many lenders offer online applications",
    "Be aware of potential fees - Factor in appraisal and closing costs",
  ];

  const benefits = [
    { title: "Lower Interest Rates", description: "Typically lower than credit cards or personal loans" },
    { title: "Tax Benefits", description: "Interest may be tax-deductible for home improvements" },
    { title: "Large Loan Amounts", description: "Borrow up to 80-90% of your home's equity" },
    { title: "Flexible Use", description: "Use funds for any purpose - renovations, debt consolidation, etc." },
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
                Home Equity
              </span>
              <br />
              <span className="text-foreground">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock your home's value with competitive rates and flexible terms
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Calculator Form */}
            <Card className="bg-card/50 backdrop-blur-glass border-border/50 shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Calculator className="h-8 w-8 text-primary" />
                  <span>Home Equity Calculator</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Type Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Loan Type</Label>
                  <div className="grid gap-3">
                    {loanTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          loanType === type.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border/50 hover:border-border'
                        }`}
                        onClick={() => setLoanType(type.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <type.icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{type.title}</span>
                          </div>
                          <Badge variant="secondary" className="bg-secondary/50">
                            {type.rate}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="creditScore">Credit Score</Label>
                    <Select value={creditScore} onValueChange={setCreditScore}>
                      <SelectTrigger className="bg-card/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="780+">780+</SelectItem>
                        <SelectItem value="760-779">760 - 779</SelectItem>
                        <SelectItem value="740-759">740 - 759</SelectItem>
                        <SelectItem value="720-739">720 - 739</SelectItem>
                        <SelectItem value="700-719">700 - 719</SelectItem>
                        <SelectItem value="680-699">680 - 699</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="propertyValue">Property Value</Label>
                  <Input
                    id="propertyValue"
                    placeholder="$500,000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <div>
                  <Label htmlFor="mortgageBalance">Remaining Mortgage Balance</Label>
                  <Input
                    id="mortgageBalance"
                    placeholder="$300,000"
                    value={mortgageBalance}
                    onChange={(e) => setMortgageBalance(e.target.value)}
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  Calculate My Options
                </Button>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">Home Equity?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <Card key={benefit.title} className="bg-card/30 backdrop-blur-glass border-border/30 hover:bg-card/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-primary p-1 rounded-lg">
                <div className="bg-card rounded-lg p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">FDIC Insured</h3>
                  <p className="text-muted-foreground mb-4">
                    Your deposits are protected up to $250,000
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How to Apply for a <span className="bg-gradient-secondary bg-clip-text text-transparent">Home Equity Loan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to get started with your home equity loan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-elegant transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg">{step}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Start My Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeEquity;