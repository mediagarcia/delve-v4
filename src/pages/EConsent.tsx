import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileCheck, Video, Shield, Users, CheckCircle2, Clock, Globe, Eye, AlertCircle, Lock, Cloud } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import abstractBg from "@/assets/abstract background.png";

const EConsent = () => {
  const pillars = [
    {
      icon: Video,
      title: "Multimedia for Real Understanding",
      description: "Replace dense legal text with clear videos, visuals, and voiceovers. Patients understand what they're joining — improving satisfaction and enrollment rates.",
    },
    {
      icon: Shield,
      title: "Regulatory-Ready Compliance",
      description: "Full audit trails, signature verification, version control, and alignment with FDA, EMA, and ICH E6(R3) expectations.",
    },
    {
      icon: Users,
      title: "Live Human Support",
      description: "Delve Concierge teams assist patients during the consent process — answering questions and ensuring complete, correct documentation.",
    },
  ];

  const oversightFeatures = [
    {
      icon: Eye,
      title: "Consent Tracker Dashboard",
      description: "Live visibility into who started consent, who completed it, who needs follow-up.",
    },
    {
      icon: AlertCircle,
      title: "Incomplete or Expired Consent Alerts",
      description: "Automatic notifications when patients pause or fail to complete a section.",
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      description: "Sites, monitors, and sponsors see only what they need — nothing more.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "HIPAA, GDPR, 21 CFR Part 11-aligned consent storage with audit history.",
    },
  ];

  const stats = [
    { value: "98%", label: "Consent completion rates" },
    { value: "40%", label: "Faster screening" },
    { value: "120+", label: "Languages supported" },
    { value: "100%", label: "Regulatory audit-ready" },
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
                <FileCheck size={16} />
                eConsent
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Multimedia eConsent — Made for Humans.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empower patients with clear, multimedia-guided consent they can understand. Built for global enrollment, hybrid trials, and real-time oversight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Book an eConsent Demo <ArrowRight className="ml-2" size={20} />
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
                    eConsent That Actually Improves Enrollment
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Most eConsent platforms digitize PDFs. Delve rethinks consent entirely — using multimedia, comprehension checks, human support, and real-time site oversight to ensure every participant truly understands the study.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multimedia consent with video, audio & illustrations",
                      "Comprehension questions to confirm understanding",
                      "Remote consenting with live coordinator support",
                      "Automated reminders for partial or incomplete consents",
                      "Global-ready: 120+ languages supported",
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
                    <FileCheck className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Three Pillars of Human-Centered eConsent
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <pillar.icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multimedia Consent */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border order-2 lg:order-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Globe className="text-accent" size={64} />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Multimedia Consent for Global Trials
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Video, audio, images, simplified text, chapter-style navigation. Designed for every literacy level and culture — not just for English-speaking populations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multiple languages & subtitles",
                      "Side-by-side long-form document + interactive media",
                      "Voiceover narration for low-literacy populations",
                      "Chapters that break down complex medical concepts",
                      "Configurable at the sponsor or site level",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehension & Audit Trails */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Comprehension, Documentation & Audit Trails
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Consent only matters if patients understand it. Delve adds built-in comprehension checks and robust documentation.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comprehension quizzes with pass/fail logic",
                      "Knowledge gaps flagged for site review",
                      "Version control with automatic re-consent workflows",
                      "Full timestamps, IP logs, signature certificates",
                      "Electronic + remote consenting with identity verification",
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
                    <Shield className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Support */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border order-2 lg:order-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Users className="text-accent" size={64} />
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Concierge Support for the Consent Process
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    When a patient pauses, drops off, or fails a comprehension quiz, a Delve coordinator reaches out. This reduces delays and increases completion rates.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Live multilingual patient support",
                      "Assistance during remote consenting",
                      "Follow-ups for missing signatures",
                      "Device/app help for patients needing support",
                      "Sponsor visibility into bottlenecks",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link to="/solutions/concierge">
                      Explore Concierge-as-a-Service <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Oversight */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Real-Time Oversight for Sponsors & Sites
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {oversightFeatures.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                See How Modern eConsent Improves Enrollment.
              </h2>
              <p className="text-xl text-muted-foreground">
                Multimedia. Human Support. Real-Time Oversight. Everything you need to start patients on the right path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Book an eConsent Demo <ArrowRight className="ml-2" size={20} />
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

export default EConsent;
