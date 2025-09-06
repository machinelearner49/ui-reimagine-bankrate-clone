import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Calculator, Home, DollarSign, Percent } from "lucide-react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.875);
  const [zipCode, setZipCode] = useState("");

  // Calculate monthly payment
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const propertyTax = Math.round((homePrice * 0.012) / 12);
  const homeInsurance = Math.round((homePrice * 0.003) / 12);
  const pmiPayment = downPayment < homePrice * 0.2 ? Math.round(loanAmount * 0.005 / 12) : 0;
  const totalMonthlyPayment = Math.round(monthlyPayment + propertyTax + homeInsurance + pmiPayment);

  const calculatorFeatures = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Payment Breakdown",
      description: "See principal, interest, taxes, and insurance separately"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Amortization Schedule",
      description: "View how your balance decreases over time"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Total Cost Analysis",
      description: "Calculate total interest paid over the life of the loan"
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Rate Scenarios",
      description: "Compare different interest rates and loan terms"
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
                Mortgage Calculator
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Calculate your monthly mortgage payment and see how different factors affect your costs
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Calculator Form */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Loan Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="homePrice">Home Price</Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="text-lg font-semibold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="downPayment">Down Payment</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="text-lg font-semibold"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {((downPayment / homePrice) * 100).toFixed(1)}% of home price
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="loanTerm">Loan Term</Label>
                    <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.001"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="text-lg font-semibold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                {/* Monthly Payment */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-primary">
                      ${totalMonthlyPayment.toLocaleString()}
                    </CardTitle>
                    <p className="text-muted-foreground">Monthly Payment</p>
                  </CardHeader>
                </Card>

                {/* Payment Breakdown */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <CardTitle className="text-xl">Payment Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Principal & Interest</span>
                      <span className="font-semibold">${Math.round(monthlyPayment).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Tax</span>
                      <span className="font-semibold">${propertyTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Home Insurance</span>
                      <span className="font-semibold">${homeInsurance.toLocaleString()}</span>
                    </div>
                    {pmiPayment > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">PMI</span>
                        <span className="font-semibold">${pmiPayment.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total Monthly Payment</span>
                      <span>${totalMonthlyPayment.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Loan Summary */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <CardTitle className="text-xl">Loan Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest</span>
                      <span className="font-semibold">${Math.round(monthlyPayment * numberOfPayments - loanAmount).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Paid</span>
                      <span className="font-semibold">${Math.round(monthlyPayment * numberOfPayments).toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-3">
                  Get Pre-Approved Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Calculator Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {calculatorFeatures.map((feature, index) => (
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

export default MortgageCalculator;