import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, X, CheckCircle, Calendar, Users, Smartphone, BarChart3, Clock, PhoneCall, Settings, Gauge, Network, TrendingUp, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Sites = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                The Support Every Research Site Deserves.
              </h1>
              <p className="text-xl text-muted-foreground">
                Delve Health gives sites the tools and workflows to reduce burden, simplify scheduling, streamline prescreening, and keep patients on track — without adding to coordinator workload.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Site Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Research Sites Are Carrying Too Much */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Research Sites Are Carrying Too Much
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Coordinators are drowning in manual tasks. Patient engagement falls through the cracks. Sites can't scale without adding headcount.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: PhoneCall,
                    title: "Too many patient calls and reminders",
                    description: "Coordinators spend hours on routine follow-ups instead of high-value care",
                  },
                  {
                    icon: Users,
                    title: "Manual prescreening efforts draining staff",
                    description: "Sites waste time on patients who won't qualify, delaying enrollment",
                  },
                  {
                    icon: Settings,
                    title: "Device setup and troubleshooting taking hours",
                    description: "Wearables and sensors create unexpected workload for already-stretched teams",
                  },
                  {
                    icon: Calendar,
                    title: "Missed visits and last-minute rescheduling",
                    description: "No-shows disrupt schedules and delay study timelines",
                  },
                  {
                    icon: BarChart3,
                    title: "Keeping multiple systems in sync",
                    description: "Jumping between EDC, CTMS, patient apps, and sponsor portals wastes time",
                  },
                  {
                    icon: Heart,
                    title: "High turnover and coordinator burnout",
                    description: "Site staff feel overwhelmed, unsupported, and stretched too thin",
                  },
                ].map((problem, index) => (
                  <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                        <problem.icon className="text-destructive" size={28} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground">{problem.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Delve Health Does for Sites */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Delve Health Does for Sites
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Concierge support that handles the operational burden — so coordinators can focus on what matters
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Visit Scheduling & Reminders",
                  description: "Automated appointment coordination, SMS/email reminders, and proactive no-show prevention",
                  color: "primary",
                },
                {
                  icon: Users,
                  title: "Prescreening Support",
                  description: "Verify eligibility before site visits, reducing screen failures and wasted appointments",
                  color: "secondary",
                },
                {
                  icon: Smartphone,
                  title: "Device Setup & Support",
                  description: "End-to-end patient support for wearables, apps, and sensors—without burdening coordinators",
                  color: "accent",
                },
                {
                  icon: Gauge,
                  title: "Compliance Dashboards",
                  description: "Real-time visibility into patient adherence, device usage, and study milestones",
                  color: "success",
                },
              ].map((feature, index) => (
                <Card key={index} className={`border-2 hover:border-${feature.color} transition-colors`}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-16 h-16 bg-${feature.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className={`text-${feature.color}`} size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Difference Sites Feel Immediately */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  The Difference Sites Feel Immediately
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Before */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="text-destructive" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Before Delve Health</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Coordinators making 50+ patient calls per week",
                      "30% screen failure rate from poor prescreening",
                      "4-6 hours/week on device troubleshooting",
                      "15-20% no-show rate at visits",
                      "Limited visibility into patient compliance between visits",
                      "Coordinator turnover every 18-24 months",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                        <X className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-success" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">With Delve Health</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "37% reduction in manual coordinator calls",
                      "Prescreening completed before patients arrive",
                      "Concierge handles device setup and troubleshooting",
                      "Automated reminders reduce no-shows by 60%",
                      "Real-time dashboards show compliance at a glance",
                      "Coordinators report lower stress and higher satisfaction",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                        <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prescreening, Without Overwhelming Staff */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Prescreening, Without Overwhelming Staff
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our concierge team conducts secondary screening before patients ever come to the site — verifying eligibility, collecting medical history, and flagging potential issues.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Verify inclusion/exclusion criteria via phone or video",
                      "Collect concomitant medications and medical history",
                      "Confirm patient availability for visit schedule",
                      "Flag concerns for coordinators to review",
                      "Reduce screen failures by up to 30%",
                      "Schedule only qualified patients for site visits",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">30%</div>
                      <p className="text-muted-foreground">Reduction in screen failures</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">5-7 hrs</div>
                      <p className="text-muted-foreground">Saved per week per coordinator</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-success mb-2">2x</div>
                      <p className="text-muted-foreground">Faster enrollment timelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Workflows That Don't Burden Sites */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Smartphone className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Patient Onboarding</h4>
                        <p className="text-sm text-muted-foreground">
                          Concierge walks patients through device setup, pairing, and first sync — before they leave the site
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="text-accent-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">24/7 Technical Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Patients call the concierge line for troubleshooting — not the site coordinator
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-success-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Proactive Monitoring</h4>
                        <p className="text-sm text-muted-foreground">
                          We detect missed syncs and low battery before patients realize — and intervene immediately
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Device Workflows That Don't Burden Sites
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wearables, sensors, and apps shouldn't add hours to your workday. With Delve Health, they don't.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Concierge handles setup, pairing, and patient training",
                      "Real-time device monitoring alerts team to issues",
                      "Automated reminders for charging and syncing",
                      "Troubleshooting handled without site involvement",
                      "Replacement devices shipped and activated remotely",
                      "50% fewer device-related protocol deviations",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Site Networks */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Designed for Site Networks
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Managing multiple locations? Delve Health scales with you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Network,
                  title: "Standardized Workflows",
                  description: "Same processes, training, and support across all your sites — no matter where they are",
                },
                {
                  icon: BarChart3,
                  title: "Cross-Site Visibility",
                  description: "Network-wide dashboards show enrollment, compliance, and performance metrics in real time",
                },
                {
                  icon: TrendingUp,
                  title: "Reporting Across Sites",
                  description: "Aggregate data and benchmarking to identify top performers and areas for improvement",
                },
                {
                  icon: Users,
                  title: "Scalable Support",
                  description: "Concierge capacity grows with your studies — no need to hire and train new coordinators",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Real Sites, Real Results
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-primary mb-2">CARDIOLOGY SITE</div>
                  <h3 className="text-xl font-bold mb-4">37% reduction in manual calls</h3>
                  <p className="text-muted-foreground mb-4">
                    A busy cardiology site handling 6 concurrent studies reduced coordinator call volume by 37% while improving patient retention.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-1">150+ hrs</div>
                    <div className="text-sm text-muted-foreground">Saved per quarter</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-secondary mb-2">ONCOLOGY SITE NETWORK</div>
                  <h3 className="text-xl font-bold mb-4">91% retention rate</h3>
                  <p className="text-muted-foreground mb-4">
                    A 12-site oncology network maintained 91% retention in a 6-month study — well above industry average.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-secondary mb-1">91%</div>
                    <div className="text-sm text-muted-foreground">Patient retention at 6 months</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold text-accent mb-2">RESPIRATORY STUDY SITE</div>
                  <h3 className="text-xl font-bold mb-4">50% fewer device-related deviations</h3>
                  <p className="text-muted-foreground mb-4">
                    A respiratory site using multiple wearables reduced device-related protocol deviations by 50% with concierge support.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-accent mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Device compliance maintained</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/resources/case-studies">
                  View All Case Studies <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Give Your Site the Support It Deserves.
              </h2>
              <p className="text-xl text-muted-foreground">
                See how Delve Health reduces coordinator burden, improves patient engagement, and keeps studies on track — without adding headcount.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Book a Site Demo <ArrowRight className="ml-2" size={20} />
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

export default Sites;
