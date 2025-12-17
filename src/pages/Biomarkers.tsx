import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, Heart, Wind, Footprints, Moon, CheckCircle2, FlaskConical, Settings, FileCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Biomarkers = () => {
  const validationPhases = [
    {
      icon: FlaskConical,
      title: "Correlation & Feasibility",
      description: "Compare sensor-derived signals against gold-standard clinical tools to confirm feasibility.",
    },
    {
      icon: Settings,
      title: "Algorithm Training & Calibration",
      description: "Generate reproducible, device-agnostic algorithms with consistent sampling and signal quality.",
    },
    {
      icon: FileCheck,
      title: "Verification & Submission Readiness",
      description: "Measurement accuracy, variance, reproducibility, and context-of-use verification for FDA/EMA review.",
    },
  ];

  const biomarkerCategories = [
    {
      icon: Heart,
      title: "Cardiovascular",
      items: ["Heart Rate", "HR Variability (RMSSD, SDNN)", "Pulse Morphology", "AFib Risk Indicators"],
    },
    {
      icon: Wind,
      title: "Respiratory",
      items: ["Respiratory Rate", "Nocturnal RR Trends", "Breath Variability", "Activity-adjusted Respiratory Burden"],
    },
    {
      icon: Footprints,
      title: "Activity & Function",
      items: ["Gait Speed", "Step Count Accuracy", "6MWT Digital Equivalent", "Functional Mobility Signatures"],
    },
    {
      icon: Moon,
      title: "Sleep & Circadian",
      items: ["Sleep Stages", "Fragmentation Index", "Circadian Rhythm Stability", "Sleep Efficiency"],
    },
  ];

  const caseStudies = [
    {
      title: "Cardio-Oncology Study",
      description: "Real-time HRV + symptom correlation predicted early toxicity signals.",
    },
    {
      title: "Respiratory Trial",
      description: "Nocturnal respiratory patterns improved early exacerbation detection.",
    },
    {
      title: "Mobility Study",
      description: "Gait speed and 6MWT digital equivalents aligned with clinician assessments.",
    },
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
                <Activity size={16} />
                Digital Biomarkers
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Digital Biomarkers & Endpoints — Powered by Real-World Data.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From physiology to function, Delve transforms raw wearable signals into validated, regulator-aligned digital measures you can trust in clinical development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Explore the Endpoint Library <ArrowRight className="ml-2" size={20} />
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
                    From Raw Signals to Regulator-Ready Evidence
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wearable data is noisy, inconsistent, and device-dependent. Digital biomarkers solve this by applying validated algorithms, statistical models, and context-aware transformations that turn continuous sensor data into <strong>meaningful, clinical-grade measurements.</strong>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Delve enables sponsors to rapidly deploy, validate, and scale digital biomarkers aligned with <strong>FDA, EMA, and PMDA digital health technology frameworks.</strong>
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Fit-for-purpose validation for clinical use",
                      "Algorithm transparency & reproducibility",
                      "Cross-device measurement equivalence",
                      "Science-driven QC & accuracy checks",
                      "End-to-end endpoint management",
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
                    <Activity className="text-primary" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Framework */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our 3-Phase Digital Endpoint Validation Framework
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {validationPhases.map((phase, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <phase.icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{index + 1}. {phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Biomarker Library */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Digital Biomarker Library
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Delve supports a broad and continuously expanding catalog of digital biomarkers. Each is validated for physiological accuracy, sampling reliability, and clinical interpretability.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {biomarkerCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <category.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-semibold mb-3">{category.title}</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subjective + Objective */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border order-2 lg:order-1">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="flex gap-4">
                      <Heart className="text-accent" size={48} />
                      <Activity className="text-primary" size={48} />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Subjective + Objective = True Digital Endpoints
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The future of endpoints is hybrid. Delve fuses wearable signals with ePRO triggers, symptom diaries, and clinician assessments to produce composite endpoints with richer explanatory power.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Sensor-driven ePRO triggers",
                      "Event-linked symptom capture",
                      "Composite endpoints blending function + perception",
                      "Automated outlier detection",
                      "Longitudinal trend modeling",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    This is how Delve reveals the story behind every datapoint — the human experience inside the physiology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Digital Biomarkers in Action
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                        <Activity className="text-primary" size={32} />
                      </div>
                      <h3 className="font-semibold mb-2">{study.title}</h3>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Explore Delve's Digital Biomarker Portfolio
              </h2>
              <p className="text-xl text-muted-foreground">
                See how validated digital endpoints can accelerate your next study.
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

export default Biomarkers;
