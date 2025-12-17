import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, ClipboardList, Activity, Heart, Users, Target, TrendingUp, Globe, CheckCircle2, XCircle, Clock, Zap, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-clinical-trial.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import clinicalResearchTeam from "@/assets/clinical-research-team.jpg";
import wearableDevices from "@/assets/wearable-devices.jpg";
import conciergePatientCare from "@/assets/concierge-patient-care.jpg";
import dataVisualization from "@/assets/data-visualization.jpg";
import patientsDigitalHealth from "@/assets/patients-digital-health.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - "Some See Noise. We Hear Heartbeats." */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,184,190,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start w-16 h-16 mb-6">
                <Heart className="text-primary animate-pulse" size={48} strokeWidth={2} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Some See Noise.
                <br />
                <span className="text-primary">We Hear Heartbeats.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Unified wearable data, multilingual eCOA, and human concierge support — delivering validated endpoints and unmatched compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Hear the Difference <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/demo">Book a Demo</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                Trusted by sponsors, sites & vendors transforming patient-centric research
              </p>
            </div>

            {/* Right Column - Video Placeholder */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <img
                    src={heroImage}
                    alt="Clinical trial innovation"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm group-hover:bg-background/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <svg
                        className="w-8 h-8 text-primary-foreground ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <p className="text-sm font-semibold text-foreground">Watch: How Delve Health Transforms Clinical Trials</p>
                    <p className="text-xs text-muted-foreground mt-1">2:30 minutes</p>
                  </div>
                </div>
              </div>
              {/* Decorative pulse effect */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground font-medium">Device Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">+45%</div>
              <div className="text-muted-foreground font-medium">Higher ePRO Completion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-success mb-2">60%</div>
              <div className="text-muted-foreground font-medium">Fewer Missed Syncs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">87%</div>
              <div className="text-muted-foreground font-medium">Retention at 12 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge-as-a-Service Spotlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <MessageSquare className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Concierge-as-a-Service™</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  The Human Layer Every Trial Needs.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Real humans supporting patients in 65+ languages — the missing link between technology and trust.
                </p>
              </div>
              <div>
                <img
                  src={conciergePatientCare}
                  alt="Healthcare concierge helping patient with digital health tools"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Secondary screening & prescreening support</h3>
                  <p className="text-sm text-muted-foreground">Expert assistance to ensure eligible participants</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Missed-sync detection with 15-minute human follow-up</h3>
                  <p className="text-sm text-muted-foreground">Proactive outreach to maintain data quality</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Device onboarding & multilingual troubleshooting</h3>
                  <p className="text-sm text-muted-foreground">Setup and support in your patients' languages</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Medication reminders, scheduling & outreach</h3>
                  <p className="text-sm text-muted-foreground">Keep patients on track with personalized support</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ClipboardList className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Chart retrieval + televisit readiness for hybrid studies</h3>
                  <p className="text-sm text-muted-foreground">Seamless support for virtual and hybrid trials</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Daily compliance monitoring across devices and eCOA</h3>
                  <p className="text-sm text-muted-foreground">Continuous oversight for data integrity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* One Platform. Every Signal. */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              One Platform. Every Signal.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unified technology that connects wearables, eCOA, and real-time insights in a single platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={wearableDevices}
                  alt="Medical wearable devices and health monitoring technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 relative z-10 border-4 border-background">
                  <Activity className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Validated wearable and sensor integrations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect and validate data from cellular and Bluetooth devices with regulatory-grade quality
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={patientsDigitalHealth}
                  alt="Diverse patients using tablets and smartphones for digital health assessments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 relative z-10 border-4 border-background">
                  <ClipboardList className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Global eCOA & ePRO with regulatory alignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multilingual assessments with built-in compliance and investigator oversight
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={dataVisualization}
                  alt="Clinical data visualization showing heartbeat waveforms and health metrics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 relative z-10 border-4 border-background">
                  <BarChart3 className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Real-time dashboards for sponsors and sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Live visibility into compliance, engagement, and data quality across your study
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/solutions/ecoa">
                Explore the Unified Platform <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built solutions for every stakeholder in clinical research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pharma</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Unified eCOA, wearables, and concierge support for global drug trials.
                </p>
                <Button asChild variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                  <Link to="/industries/pharma">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="text-secondary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">MedTech</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Real-world post-market data, device training, and patient engagement.
                </p>
                <Button asChild variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                  <Link to="/industries/medtech">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Biotech</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Fit-for-purpose digital endpoints to help small teams move faster.
                </p>
                <Button asChild variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                  <Link to="/industries/biotech">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Research Sites</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Concierge support, scheduling, and burden-reducing workflows.
                </p>
                <Button asChild variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                  <Link to="/industries/sites">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Solves Problems. Humans Prevent Them. */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={clinicalResearchTeam}
                  alt="Clinical research team collaborating with digital technology"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Automation Solves Problems.
                  <br />
                  <span className="text-primary">Humans Prevent Them.</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our hybrid engine pairs AI automation with live concierge outreach. When a wearable misses a sync, Delve notices — and a real person checks in within 15 minutes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's how retention rises, compliance holds, and endpoints stay clean. Technology gives you speed. Empathy delivers results.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">
                    See the Engagement Model <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              When you listen, data speaks volumes.
            </h2>
            <p className="text-xl text-muted-foreground">
              Real trials, real results, real impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="text-sm font-semibold text-primary mb-3">POST-MARKET RESPIRATORY</div>
                <h3 className="text-2xl font-bold mb-2">Visits reduced 12 → 2. Retention: 94%.</h3>
                <p className="text-muted-foreground">Remote monitoring replaced in-person visits while maintaining exceptional patient engagement</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="text-sm font-semibold text-secondary mb-3">HYBRID ONCOLOGY</div>
                <h3 className="text-2xl font-bold mb-2">63% increase in retention through concierge.</h3>
                <p className="text-muted-foreground">Human support made the difference in a complex patient population</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 pb-6">
                <div className="text-sm font-semibold text-accent mb-3">WEARABLE INTEGRATION</div>
                <h3 className="text-2xl font-bold mb-2">35% increase in data completion in 14 days.</h3>
                <p className="text-muted-foreground">Proactive sync monitoring and human follow-up eliminated data gaps</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/resources/case-studies">
                View Case Studies <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table - Why Sponsors Choose Delve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Sponsors Choose Delve
            </h2>
            <p className="text-xl text-muted-foreground">
              The difference is in the details
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-6 font-bold text-lg">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-primary">Delve</th>
                    <th className="text-center py-4 px-6 font-bold text-lg text-muted-foreground">Other Vendors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Unified eCOA + Wearables</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 className="text-success mx-auto" size={24} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="text-destructive mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Human Concierge Support</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 className="text-success mx-auto" size={24} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <XCircle className="text-destructive mx-auto" size={24} />
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Sync Issue Resolution</td>
                    <td className="py-4 px-6 text-center font-bold text-primary">15 min avg</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">24-48 hours</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Real-Time Dashboards</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 className="text-success mx-auto" size={24} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-muted-foreground text-sm">Limited</span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Validated Wearables</td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 className="text-success mx-auto" size={24} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-muted-foreground text-sm">Varies</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/demo">
                See the Platform in Action <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Pharmaceutical Companies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with global leaders to transform clinical research
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {["Pfizer", "Novartis", "Johnson & Johnson", "Roche", "Merck", "AstraZeneca"].map((company) => (
              <div
                key={company}
                className="flex items-center justify-center p-6 border-2 border-border rounded-lg bg-card hover:border-primary/50 transition-colors h-24"
              >
                <span className="text-sm md:text-base font-semibold text-foreground text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Data Visualization */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Evidence-Based Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time data and metrics that demonstrate measurable impact across clinical trials
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
            {/* Study Performance Card */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Study Performance</h3>
                  <span className="text-sm text-muted-foreground">Live Dashboard</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Activity size={18} />
                      <span className="text-sm font-medium">Compliance</span>
                    </div>
                    <div className="text-4xl font-bold mb-1">95%</div>
                    <div className="text-sm text-success">+8.2% vs goal</div>
                  </div>

                  <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-2 mb-2 text-secondary">
                      <Users size={18} />
                      <span className="text-sm font-medium">Retention</span>
                    </div>
                    <div className="text-4xl font-bold mb-1">87%</div>
                    <div className="text-sm text-muted-foreground">Above target</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Recent Activity</h4>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div>
                        <div className="font-medium">Patient #1042</div>
                        <div className="text-sm text-muted-foreground">ePRO completed</div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <div>
                        <div className="font-medium">Patient #1039</div>
                        <div className="text-sm text-muted-foreground">Wearable sync</div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">8 min ago</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div>
                        <div className="font-medium">Patient #1035</div>
                        <div className="text-sm text-muted-foreground">Concierge follow-up</div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">12 min ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patient Retention Over Time Card */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Patient Retention Over Time</h3>
                <p className="text-sm text-muted-foreground mb-8">Delve Health vs. Industry Average</p>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Month 1</span>
                      <div className="flex gap-4">
                        <span className="text-sm font-bold text-primary">98%</span>
                        <span className="text-sm text-muted-foreground">95%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '98%' }} />
                      <div className="h-2 bg-muted rounded-full" style={{ width: '2%' }} />
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="h-2 bg-muted/40 rounded-full" style={{ width: '95%' }} />
                      <div className="h-2 bg-muted/20 rounded-full" style={{ width: '5%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Month 3</span>
                      <div className="flex gap-4">
                        <span className="text-sm font-bold text-primary">94%</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '94%' }} />
                      <div className="h-2 bg-muted rounded-full" style={{ width: '6%' }} />
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="h-2 bg-muted/40 rounded-full" style={{ width: '85%' }} />
                      <div className="h-2 bg-muted/20 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Month 6</span>
                      <div className="flex gap-4">
                        <span className="text-sm font-bold text-primary">90%</span>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }} />
                      <div className="h-2 bg-muted rounded-full" style={{ width: '10%' }} />
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="h-2 bg-muted/40 rounded-full" style={{ width: '75%' }} />
                      <div className="h-2 bg-muted/20 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Month 12</span>
                      <div className="flex gap-4">
                        <span className="text-sm font-bold text-primary">87%</span>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '87%' }} />
                      <div className="h-2 bg-muted rounded-full" style={{ width: '13%' }} />
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="h-2 bg-muted/40 rounded-full" style={{ width: '65%' }} />
                      <div className="h-2 bg-muted/20 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium">Delve Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted/40" />
                    <span className="text-sm font-medium text-muted-foreground">Industry Avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/demo">
                See Live Data Dashboard <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Human Story */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Heart className="text-primary mx-auto animate-pulse" size={56} strokeWidth={2} />
            <h2 className="text-4xl md:text-5xl font-bold">
              Behind every dataset is a life we're helping change.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Delve Health began with one patient — and now powers thousands worldwide. We believe every trial should be built for people first — powered by empathy, driven by evidence, and made possible by connection.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Meet the Humans Behind Delve <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Make Your Next Study Human.
            </h2>
            <p className="text-xl text-muted-foreground">
              Automation gives speed. Empathy delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/demo">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
