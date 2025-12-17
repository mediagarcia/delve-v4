import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Building2, User, Smartphone, Activity, CheckCircle2, TrendingUp, AlertTriangle, Gauge } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Analytics = () => {
  const pillars = [
    {
      icon: Building2,
      title: "Study Oversight",
      description: "Enrollment, randomization, study flow, deviations, missing tasks, and real-time quality metrics.",
    },
    {
      icon: User,
      title: "Patient-Level Insights",
      description: "Sensor trends, PRO history, compliance curves, symptom patterns, and physiological changes — updated continuously.",
    },
    {
      icon: Smartphone,
      title: "Device Monitoring",
      description: "Battery health, connectivity, missed syncs, wear-time estimation, device replacements, and troubleshooting flows.",
    },
    {
      icon: Activity,
      title: "Digital Endpoints",
      description: "Wearable-derived biomarkers such as sleep, activity, HRV, gait, respiratory trends, and functional capacity indicators.",
    },
  ];

  const roles = [
    {
      title: "Sponsors",
      description: "Portfolio-level dashboards, risk detection, and early signals.",
    },
    {
      title: "CRAs / MONs",
      description: "Visit windows, missing tasks, and actionable site alerts.",
    },
    {
      title: "Research Sites",
      description: "Patient-level insights, onboarding status, and device troubleshooting.",
    },
    {
      title: "Data Science Teams",
      description: "Raw data access, algorithm outputs, and endpoint evaluations.",
    },
  ];

  const stats = [
    { value: "98%", label: "Real-time data availability" },
    { value: "45%", label: "Increase in study adherence" },
    { value: "60%", label: "Faster issue resolution" },
    { value: "5X", label: "More complete sensor data" },
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
                <BarChart3 size={16} />
                Real-Time Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Real-Time Analytics for Clinical Research.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A unified dashboard for patient, site, and study performance — across wearables, ePRO, and digital endpoints.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    See the Dashboard <ArrowRight className="ml-2" size={20} />
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
                    One Dashboard. Every Signal.
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Delve Analytics brings together wearable sensor streams, ePRO responses, device health, compliance, and digital biomarkers into a single, real-time platform built for modern research.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Role-based dashboards for sites, CRAs, sponsors & data science teams",
                      "Instant access to patient status, compliance, and data quality",
                      "Device monitoring: battery, connectivity, sync health",
                      "Wearable-derived biomarkers and trend modeling",
                      "Immediate alerts when a patient falls behind",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    No more waiting weeks for vendor exports — evidence streams in continuously.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Showcase */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Unified Delve Analytics Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Adaptively shows only the studies, sites, and patients tied to your role.
              </p>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Gauge className="text-primary mx-auto mb-4" size={64} />
                    <p className="text-muted-foreground">Interactive Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Four Pillars of Delve Analytics
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

        {/* Compliance & Signal Health */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border order-2 lg:order-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-accent" size={64} />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Compliance, Data Quality & Signal Health
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Continuous research requires continuous insight. Delve monitors the full chain of evidence — from device to dashboard.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Compliance curve tracking",
                      "Wear-time estimation and accuracy",
                      "Signal drop detection and automated QC",
                      "Outlier removal and smoothing",
                      "Flagged physiological anomalies",
                      "Study-wide thermal maps",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    You see data the moment it changes — not weeks later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Based Access */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Designed for Every Role in Research
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roles.map((role, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
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
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                See Your Study in Real Time.
              </h2>
              <p className="text-xl text-muted-foreground">
                The dashboard designed for modern hybrid and decentralized research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Book a Demo <ArrowRight className="ml-2" size={20} />
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

export default Analytics;
