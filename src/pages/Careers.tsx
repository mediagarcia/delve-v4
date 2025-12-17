import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-First Mindset",
      description: "Everything we build is designed to improve patient outcomes and experiences.",
    },
    {
      icon: Zap,
      title: "Move Fast, Stay Aligned",
      description: "We ship quickly while maintaining quality and regulatory compliance.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Cross-functional teams working together to solve complex challenges.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our work touches clinical trials and patients around the world.",
    },
  ];

  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Clinical Operations Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Help us transform clinical research through human-centered technology.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What drives us every day
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Delve Health?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Benefits & Perks</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Competitive salary and equity</li>
                    <li>Comprehensive health, dental, and vision</li>
                    <li>Flexible PTO policy</li>
                    <li>Remote-first culture</li>
                    <li>Professional development budget</li>
                    <li>Home office stipend</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Growth & Impact</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Work on products that impact patient lives</li>
                    <li>Collaborate with clinical research experts</li>
                    <li>Fast-paced, high-growth environment</li>
                    <li>Direct access to leadership</li>
                    <li>Opportunities for advancement</li>
                    <li>Cross-functional project exposure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Find your next opportunity
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.department} · {job.location} · {job.type}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">
                          Apply <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
