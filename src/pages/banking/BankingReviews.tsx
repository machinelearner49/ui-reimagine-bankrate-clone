import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const BankingReviews = () => {
  const featuredBanks = [
    {
      bankName: "Ally Bank",
      logo: "🏦",
      rating: 4.6,
      category: "ATM Fee Refunds",
      strengths: ["High APY savings", "No monthly fees", "24/7 customer service"],
      badge: "Editor's Choice"
    },
    {
      bankName: "Capital One",
      logo: "🏛️",
      rating: 4.6,
      category: "Digital Leader",
      strengths: ["Great mobile app", "No foreign fees", "Branch + online"],
      badge: "Best Mobile"
    },
    {
      bankName: "Marcus by Goldman Sachs",
      logo: "💰",
      rating: 3.9,
      category: "High APY",
      strengths: ["Top savings rates", "No minimum balance", "Simple interface"],
      badge: "High Yield"
    },
    {
      bankName: "Chase Bank",
      logo: "🏢",
      rating: 4.1,
      category: "Branch Network",
      strengths: ["Extensive branches", "Full-service banking", "Business solutions"],
      badge: "Most Branches"
    }
  ];

  const reviewCategories = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Overall Rating",
      description: "Comprehensive scores based on rates, fees, and service"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Service",
      description: "Phone, chat, and in-person support quality ratings"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Account Options",
      description: "Variety and quality of savings, checking, and CD products"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Special Features",
      description: "Unique perks, tools, and banking innovations"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Bankrate Bank Reviews
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert reviews and ratings to help you choose the right bank for your financial needs
              </p>
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Bank Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {featuredBanks.map((bank, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-glass hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{bank.logo}</div>
                        <div>
                          <CardTitle className="text-xl">{bank.bankName}</CardTitle>
                          <p className="text-sm text-muted-foreground">{bank.category}</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-primary text-white border-0">
                        {bank.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">{bank.rating}</span>
                      <div className="flex">
                        {renderStars(bank.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">Bankrate Score</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm mb-2">Key Strengths:</p>
                        <ul className="space-y-1">
                          {bank.strengths.map((strength, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:opacity-90 mt-4">
                        Read Full Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Review Categories */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How We Review Banks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviewCategories.map((category, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-glass">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Your Perfect Bank Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse our comprehensive bank reviews and find the institution that meets your financial needs.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Browse All Reviews
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BankingReviews;