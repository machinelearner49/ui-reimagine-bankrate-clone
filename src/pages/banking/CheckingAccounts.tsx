import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, CreditCard, Globe } from "lucide-react";

const CheckingAccounts = () => {
  const topAccounts = [
    {
      bankName: "Charles Schwab Bank",
      apy: "0.45%",
      monthlyFee: "$0",
      badge: "Best Overall",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      features: ["No ATM fees worldwide", "No minimum balance", "Free checks"]
    },
    {
      bankName: "Ally Bank Interest Checking",
      apy: "0.25%",
      monthlyFee: "$0",
      badge: "High Interest",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      features: ["Interest on balance", "No monthly fees", "Mobile deposit"]
    },
    {
      bankName: "Capital One 360 Checking",
      apy: "0.10%",
      monthlyFee: "$0",
      badge: "No Fees",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      features: ["No fees", "55,000+ ATMs", "Early direct deposit"]
    },
    {
      bankName: "Discover Cashback Debit",
      apy: "0.00%",
      monthlyFee: "$0",
      badge: "Cash Rewards",
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-500",
      features: ["1% cashback on purchases", "No monthly fees", "No minimums"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "No Monthly Fees",
      description: "Avoid maintenance fees with fee-free checking accounts"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "ATM Access",
      description: "Access thousands of ATMs nationwide without fees"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Online Banking",
      description: "Manage your money 24/7 with mobile and online banking"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "FDIC Insured",
      description: "Your deposits are protected up to $250,000"
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
                Best Checking Accounts of September 2025
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find checking accounts with no fees, high interest rates, and excellent features
              </p>
            </div>
          </div>
        </section>

        {/* Top Accounts */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Top Checking Accounts</h2>
            <div className="grid gap-6 max-w-5xl mx-auto">
              {topAccounts.map((account, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{account.bankName}</CardTitle>
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="text-2xl font-bold text-primary">{account.apy}</span>
                            <span className="text-sm text-muted-foreground ml-1">APY</span>
                          </div>
                          <div>
                            <span className="text-lg font-semibold">{account.monthlyFee}</span>
                            <span className="text-sm text-muted-foreground ml-1">Monthly Fee</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${account.badgeColor} text-white border-0`}>
                        {account.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-end">
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Features:</p>
                        <ul className="space-y-1">
                          {account.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="bg-gradient-primary hover:opacity-90 ml-4">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Top Checking Accounts</h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default CheckingAccounts;