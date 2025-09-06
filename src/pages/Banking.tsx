import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Banknote, Building, Star, TrendingUp } from "lucide-react";

const Banking = () => {
  const bankingServices = [
    {
      title: "Money Market Rates",
      description: "Compare the best money market account rates and find high-yield options for your savings.",
      icon: <TrendingUp className="h-8 w-8" />,
      href: "/banking/money-market-rates",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Best Checking Accounts",
      description: "Find the perfect checking account with no fees, high rates, and great perks.",
      icon: <Banknote className="h-8 w-8" />,
      href: "/banking/checking-accounts",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Banking Reviews",
      description: "Read expert reviews and customer ratings of banks and credit unions.",
      icon: <Star className="h-8 w-8" />,
      href: "/banking/reviews",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Online Banking",
      description: "Discover the benefits of digital-first banking with competitive rates and features.",
      icon: <Building className="h-8 w-8" />,
      href: "/banking/online-banking",
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
                Banking Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Compare rates, find the best accounts, and make informed banking decisions with our comprehensive guides and expert reviews.
              </p>
            </div>
          </div>
        </section>

        {/* Banking Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {bankingServices.map((service, index) => (
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
                Ready to Find Your Perfect Bank?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Use our tools and expert guidance to compare banks and find the right financial institution for your needs.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/banking/reviews">
                  Start Comparing Banks
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

export default Banking;