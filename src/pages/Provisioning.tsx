import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Truck, Smartphone, Wifi, Shield, CheckCircle2, BarChart3, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Provisioning = () => {
  const pillars = [
    {
      icon: Truck,
      title: "Forward & Reverse Logistics",
      description: "Global shipping, customs handling, local carriers, returns management.",
    },
    {
      icon: Smartphone,
      title: "Pre-Configured Study Devices",
      description: "Apps installed, restrictions applied, wearables paired & validated.",
    },
    {
      icon: Wifi,
      title: "Connectivity Guaranteed",
      description: "SIM activation, carrier selection, APN settings, signal validation.",
    },
    {
      icon: Shield,
      title: "Secure Returns & NIST Wipes",
      description: "Certified NIST 800-88 deletion, refurbished or re-kitted for reuse.",
    },
  ];

  const stats = [
    { value: "40+", label: "Countries Supported" },
    { value: "95%", label: "Device Uptime" },
    { value: "3,500+", label: "Devices Provisioned" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Package size={16} />
                Device Provisioning & Logistics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Global Device Provisioning & Logistics — Handled End-to-End.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From sourcing to enrollment to replacement, Delve manages every device, every SIM, every update — so sites and sponsors never have to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Talk to a Provisioning Specialist <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Full-Service Provisioning for Wearables, Tablets & Kits
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Clinical trials fail when devices fail. Delve handles the entire operational layer — sourcing, configuring, shipping, tracking, updating, and recovering devices across global deployments.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Device sourcing, inventory forecasting & study planning",
                      "Pre-configuration, labeling & patient-ready packaging",
                      "SIM activation, data plans & connectivity validation",
                      "MDM setup (lockdown mode, app restrictions, remote wipe)",
                      "Wearable pairing, testing & QC validation",
                      "Shipping, customs handling & global logistics",
                      "Returns processing, diagnostics & NIST 800-88 data wipe",
                      "Replacement flows with concierge-led coordination",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Package className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Four Pillars of Device Logistics Excellence
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <pillar.icon className="text-primary" size={28} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{index + 1}. {pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-primary-foreground/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inventory & Tracking */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border order-2 lg:order-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-accent" size={64} />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Real-Time Inventory & Device Tracking
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Every device — from tablet to wearable to charger — is tracked in Delve's supply chain system. Study teams always know what's deployed, what's in transit, and what needs replacement.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time inventory dashboard",
                      "Device-level barcode tracking",
                      "Site-level deployment visibility",
                      "RMA & replacement queue tracking",
                      "Proactive stock replenishment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    No more guesswork. No more spreadsheets. True supply chain intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provisioning + Concierge */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Provisioning + Concierge = Zero Gaps
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Logistics is only half the equation. Devices still fail, batteries die, and patients need help — which is why Delve pairs provisioning with live multilingual concierge support.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Onboarding calls for device setup",
                      "Missed-sync detection & live outreach",
                      "Replacement coordination with patients",
                      "Site escalation workflows",
                      "Proactive battery/signal monitoring",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    This combination produces unmatched device compliance.
                  </p>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link to="/solutions/concierge">
                      Explore Concierge-as-a-Service <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <RefreshCw className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Streamline Device Logistics?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let Delve handle the complexity — sourcing, shipping, setup, support, and returns — so your teams can focus on science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Talk to a Logistics Specialist <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/resources/case-studies">View Case Studies</Link>
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

export default Provisioning;
