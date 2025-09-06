import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Home, Percent, RefreshCw } from "lucide-react";

const Mortgages = () => {
  const mortgageServices = [
    {
      title: "Mortgage Rates",
      description: "Compare current mortgage rates from top lenders and find the best deal for your home purchase.",
      icon: <Percent className="h-8 w-8" />,
      href: "/mortgages/rates",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mortgage Calculator",
      description: "Calculate your monthly payment, see amortization schedules, and plan your budget.",
      icon: <Calculator className="h-8 w-8" />,
      href: "/mortgages/calculator",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "30-Year Mortgage Rates",
      description: "Find the best 30-year fixed mortgage rates and learn about this popular loan term.",
      icon: <Home className="h-8 w-8" />,
      href: "/mortgages/30-year-rates",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Refinance Rates",
      description: "Explore refinance options to lower your rate, reduce payments, or cash out equity.",
      icon: <RefreshCw className="h-8 w-8" />,
      href: "/mortgages/refinance-rates",
      color: "from-orange-500 to-red-500"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Mortgage Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find the best mortgage rates, calculate payments, and get expert guidance for your home financing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Mortgage Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {mortgageServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      <Link to={service.href}>
                        Explore {service.title}
                      </Link>
                    </Button>
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
                Ready to Get Your Best Mortgage Rate?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Compare rates from multiple lenders and find the perfect mortgage for your dream home.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/mortgages/rates">
                  Compare Rates Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mortgages;