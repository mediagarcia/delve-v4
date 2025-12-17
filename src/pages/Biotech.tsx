import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Users, Gauge, Wrench, Target, Heart, TrendingUp, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-clinical-trial.jpg";
import wearableDevices from "@/assets/wearable-devices.jpg";
import conciergePatientCare from "@/assets/concierge-patient-care.jpg";
import dataVisualization from "@/assets/data-visualization.jpg";

const Biotech = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,184,190,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start w-16 h-16 mb-6">
                <Zap className="text-primary" size={48} strokeWidth={2} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Move Fast. Stay Aligned.
                <br />
                <span className="text-primary">Deliver Real Evidence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Delve Health helps emerging biotechs run efficient, high-quality decentralized and hybrid studies — without needing massive teams or complex multi-vendor setups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Book a Biotech Demo <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/resources/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Trusted by emerging biotechs running lean, moving fast, and staying compliant
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <img
                    src={heroImage}
                    alt="Biotech clinical trial innovation"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              {/* Decorative pulse effect */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Your Study Needs Speed — Not Complexity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Study Needs Speed — Not Complexity
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When your team is small and your timeline is tight, you need a platform that works with you — not against you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Fit-for-purpose eCOA + wearable platform</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deploy validated digital endpoints and patient-reported outcomes in one unified system — no vendor juggling required.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                    <Users className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Reduced operational burden for small teams</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated monitoring, real-time alerts, and human concierge support mean your lean team can do more with less.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <Gauge className="text-accent" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Adaptive workflows for early-phase trials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Flexible configurations that evolve with your protocol — perfect for exploratory studies and dose-finding trials.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-success transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="text-success" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Faster deployment with minimal IT overhead</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No complex integrations or IT infrastructure needed. Get up and running in weeks, not months.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Emerging Biotechs Feature Grid */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for Emerging Biotechs
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Purpose-built solutions that scale with your science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fast Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Launch eCOA + wearables in weeks, not months. Start collecting data when it matters most.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fit-for-Purpose Endpoints</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Validated digital biomarkers and PROs that regulatory agencies trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Human Concierge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multilingual support in 65+ languages keeps patients engaged and sites aligned.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-success transition-all hover:shadow-xl">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-success" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lean Team Ready</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated oversight + human support means small teams can run world-class studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* eCOA + Wearables in One Place */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={wearableDevices}
                alt="Integrated wearable devices and eCOA platform"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                eCOA + Wearables
                <br />
                <span className="text-primary">in One Place</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop managing multiple vendors and platforms. Delve Health unifies patient-reported outcomes with objective wearable data — all in one dashboard, one data stream, one partner.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Validated endpoints for regulatory submissions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Real-time data harmonization and quality checks</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">Seamless device provisioning and patient onboarding</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/solutions/wearables">
                  Explore Wearables Platform <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stronger Early Data With Human Support */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Stronger Early Data
                  <br />
                  <span className="text-primary">With Human Support</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  In early-phase trials, every data point matters. Our Concierge-as-a-Service™ team proactively engages patients, troubleshoots devices, and ensures compliance — so your endpoints stay clean and your timelines stay on track.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Heart className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">24/7 multilingual patient support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Proactive outreach for missed assessments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">Device troubleshooting and replacement coordination</span>
                  </div>
                </div>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions/concierge">
                    Learn About Concierge Services <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
              <div>
                <img
                  src={conciergePatientCare}
                  alt="Healthcare concierge supporting clinical trial patients"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real Biotechs. Real Results.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how emerging biotechs are accelerating their research with Delve Health
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-primary mb-3">EARLY-PHASE STUDY</div>
                  <h3 className="text-xl font-bold mb-3">
                    Early-Phase Digital Endpoint Study
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A Series A biotech deployed wearable-based mobility endpoints in a Phase 1b trial, capturing exploratory biomarkers with minimal operational overhead.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-1">3 weeks</div>
                    <div className="text-sm text-muted-foreground">From contract to first patient enrolled</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-secondary mb-3">RARE DISEASE</div>
                  <h3 className="text-xl font-bold mb-3">
                    Decentralized Rare Disease Trial
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A rare disease biotech ran a fully decentralized trial with eCOA + wearables, achieving exceptional patient engagement despite geographic dispersion.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-secondary mb-1">92%</div>
                    <div className="text-sm text-muted-foreground">ePRO completion rate across all patients</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-accent mb-3">EXPLORATORY PROGRAM</div>
                  <h3 className="text-xl font-bold mb-3">
                    Exploratory Biomarker Program
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    An early-stage biotech used Delve's unified platform to capture both subjective and objective endpoints, accelerating interim readouts for their board and investors.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-accent mb-1">35%</div>
                    <div className="text-sm text-muted-foreground">Faster data readouts vs. traditional methods</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/resources/case-studies">
                  View All Case Studies <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">92%</div>
              <div className="text-primary-foreground/90 font-medium">ePRO Completion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">87%</div>
              <div className="text-primary-foreground/90 font-medium">Patient Retention</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/90 font-medium">Wearable Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">30%</div>
              <div className="text-primary-foreground/90 font-medium">Faster Interim Readouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Biotechs Choose Delve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Biotechs Choose Delve
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No vendor fatigue</h3>
                  <p className="text-muted-foreground">
                    One platform, one contract, one team. Stop coordinating between eCOA, wearables, and concierge vendors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-secondary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Built for speed</h3>
                  <p className="text-muted-foreground">
                    Deploy in weeks with minimal IT overhead. Perfect for resource-constrained teams moving fast.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Regulatory ready</h3>
                  <p className="text-muted-foreground">
                    Validated endpoints, 21 CFR Part 11 compliance, and audit-ready data from day one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Heart className="text-success" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Human-centered</h3>
                  <p className="text-muted-foreground">
                    Real people supporting patients and sites — not just algorithms and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
              <Zap className="text-primary" size={56} strokeWidth={2} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Move Your Science Forward — Faster.
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Delve Health can help your biotech run lean, stay compliant, and deliver real evidence. Book a demo tailored to your study design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Biotech Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/resources/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Biotech;
